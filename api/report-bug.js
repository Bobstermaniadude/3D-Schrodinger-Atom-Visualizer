import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message, selectedElement } = req.body || {};
    const trimmedMessage = String(message || "").trim();

    if (!trimmedMessage) {
      return res.status(400).json({ error: "Message required" });
    }

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.REPORT_TO_EMAIL,
      subject: "Bug Report",
      text: `Element: ${selectedElement || "(none)"}\n\n${trimmedMessage}`
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
