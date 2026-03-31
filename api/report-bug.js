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

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.REPORT_TO_EMAIL,
      subject: "Bug Report",
      text: `Element: ${selectedElement || "(none)"}\n\n${trimmedMessage}`
    });

    if (error) {
      console.error("Resend API Error:", error);
      return res.status(500).json({ error: error.message || "Failed to send email" });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
