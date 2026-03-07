const test = require("node:test");
const assert = require("node:assert/strict");
const http = require("node:http");

const {
  createApp,
  createTransporter,
  hasRequiredOAuthConfig
} = require("../server");

function startServer(app) {
  return new Promise((resolve) => {
    const server = app.listen(0, () => resolve(server));
  });
}

function closeServer(server) {
  return new Promise((resolve, reject) => {
    server.close((err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}

function postJson(server, route, body) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify(body);
    const port = server.address().port;
    const req = http.request(
      {
        hostname: "127.0.0.1",
        port,
        path: route,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(payload)
        }
      },
      (res) => {
        let raw = "";
        res.on("data", (chunk) => {
          raw += chunk;
        });
        res.on("end", () => {
          let parsed = {};
          try {
            parsed = raw ? JSON.parse(raw) : {};
          } catch {
            parsed = {};
          }
          resolve({ status: res.statusCode, body: parsed });
        });
      }
    );

    req.on("error", reject);
    req.write(payload);
    req.end();
  });
}

test("hasRequiredOAuthConfig validates required OAuth fields", () => {
  const bad = {
    reportToEmail: "dest@example.com",
    oauthUser: "user@example.com",
    oauthClientId: "id",
    oauthClientSecret: "secret"
  };

  const good = {
    ...bad,
    oauthRefreshToken: "refresh-token"
  };

  assert.equal(hasRequiredOAuthConfig(bad), false);
  assert.equal(hasRequiredOAuthConfig(good), true);
});

test("createTransporter returns null when OAuth config is incomplete", () => {
  const config = {
    reportToEmail: "dest@example.com"
  };

  const mailer = {
    createTransport() {
      throw new Error("should not be called");
    }
  };

  const transporter = createTransporter(config, mailer);
  assert.equal(transporter, null);
});

test("POST /api/report-bug returns 500 when transporter is missing", async () => {
  const app = createApp({
    config: {
      reportToEmail: "dest@example.com"
    },
    transporter: null
  });

  const server = await startServer(app);
  try {
    const res = await postJson(server, "/api/report-bug", {
      selectedElement: "H",
      message: "something broke"
    });
    assert.equal(res.status, 500);
    assert.equal(res.body.ok, false);
  } finally {
    await closeServer(server);
  }
});

test("POST /api/report-bug validates empty message", async () => {
  const transporter = {
    async sendMail() {
      throw new Error("should not send when message is empty");
    }
  };

  const app = createApp({
    config: {
      reportToEmail: "dest@example.com",
      smtpFrom: "from@example.com",
      oauthUser: "oauth-user@example.com"
    },
    transporter
  });

  const server = await startServer(app);
  try {
    const res = await postJson(server, "/api/report-bug", {
      selectedElement: "He",
      message: "   "
    });
    assert.equal(res.status, 400);
    assert.equal(res.body.ok, false);
  } finally {
    await closeServer(server);
  }
});

test("POST /api/report-bug sends email and returns ok=true", async () => {
  const sent = [];
  const transporter = {
    async sendMail(payload) {
      sent.push(payload);
    }
  };

  const app = createApp({
    config: {
      reportToEmail: "dest@example.com",
      smtpFrom: "from@example.com",
      oauthUser: "oauth-user@example.com"
    },
    transporter
  });

  const server = await startServer(app);
  try {
    const res = await postJson(server, "/api/report-bug", {
      selectedElement: "C",
      message: "orbital opacity flickers"
    });

    assert.equal(res.status, 200);
    assert.equal(res.body.ok, true);
    assert.equal(sent.length, 1);
    assert.equal(sent[0].to, "dest@example.com");
    assert.equal(sent[0].from, "from@example.com");
    assert.match(sent[0].text, /orbital opacity flickers/);
  } finally {
    await closeServer(server);
  }
});

test("POST /api/report-bug returns 500 when sendMail throws", async () => {
  const transporter = {
    async sendMail() {
      throw new Error("smtp unavailable");
    }
  };

  const app = createApp({
    config: {
      reportToEmail: "dest@example.com",
      smtpFrom: "from@example.com",
      oauthUser: "oauth-user@example.com"
    },
    transporter
  });

  const server = await startServer(app);
  try {
    const res = await postJson(server, "/api/report-bug", {
      selectedElement: "O",
      message: "test"
    });
    assert.equal(res.status, 500);
    assert.equal(res.body.ok, false);
  } finally {
    await closeServer(server);
  }
});
