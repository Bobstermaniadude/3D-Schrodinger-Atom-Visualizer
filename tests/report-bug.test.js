import test from "node:test";
import assert from "node:assert/strict";

process.env.RESEND_API_KEY = process.env.RESEND_API_KEY || "re_test_key";
process.env.REPORT_TO_EMAIL = process.env.REPORT_TO_EMAIL || "dest@example.com";

const { default: handler, resend } = await import("../api/report-bug.js");

function createMockRes() {
  return {
    statusCode: 200,
    body: null,
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(payload) {
      this.body = payload;
      return this;
    }
  };
}

test("returns 405 for non-POST requests", async () => {
  const req = { method: "GET", body: {} };
  const res = createMockRes();

  await handler(req, res);

  assert.equal(res.statusCode, 405);
  assert.deepEqual(res.body, { error: "Method not allowed" });
});

test("returns 400 when message is missing/empty", async () => {
  const req = { method: "POST", body: { selectedElement: "He", message: "   " } };
  const res = createMockRes();

  await handler(req, res);

  assert.equal(res.statusCode, 400);
  assert.deepEqual(res.body, { error: "Message required" });
});

test("returns 200 and calls resend on valid payload", async () => {
  const sent = [];
  const originalSend = resend.emails.send;
  resend.emails.send = async (payload) => {
    sent.push(payload);
  };

  const req = {
    method: "POST",
    body: { selectedElement: "C", message: "orbital opacity flickers" }
  };
  const res = createMockRes();

  try {
    await handler(req, res);
  } finally {
    resend.emails.send = originalSend;
  }

  assert.equal(res.statusCode, 200);
  assert.deepEqual(res.body, { ok: true });
  assert.equal(sent.length, 1);
  assert.equal(sent[0].subject, "Bug Report");
  assert.match(sent[0].text, /Element: C/);
  assert.match(sent[0].text, /orbital opacity flickers/);
});

test("returns 500 when resend send throws", async () => {
  const originalSend = resend.emails.send;
  resend.emails.send = async () => {
    throw new Error("resend unavailable");
  };

  const req = {
    method: "POST",
    body: { selectedElement: "O", message: "test failure path" }
  };
  const res = createMockRes();

  try {
    await handler(req, res);
  } finally {
    resend.emails.send = originalSend;
  }

  assert.equal(res.statusCode, 500);
  assert.deepEqual(res.body, { error: "Failed to send email" });
});
