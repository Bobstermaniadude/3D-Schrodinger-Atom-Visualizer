require("dotenv").config();
const path = require("path");
const express = require("express");
const nodemailer = require("nodemailer");

function getConfig(env = process.env) {
  return {
    port: Number(env.PORT || 3000),
    reportToEmail: env.REPORT_TO_EMAIL,
    smtpHost: env.SMTP_HOST || "smtp.gmail.com",
    smtpPort: Number(env.SMTP_PORT || 587),
    smtpSecure: String(env.SMTP_SECURE || "false").toLowerCase() === "true",
    smtpFrom: env.SMTP_FROM || env.OAUTH_USER,
    oauthUser: env.OAUTH_USER,
    oauthClientId: env.OAUTH_CLIENT_ID,
    oauthClientSecret: env.OAUTH_CLIENT_SECRET,
    oauthRefreshToken: env.OAUTH_REFRESH_TOKEN,
    oauthAccessToken: env.OAUTH_ACCESS_TOKEN
  };
}

function hasRequiredOAuthConfig(config) {
  return Boolean(
    config.reportToEmail &&
      config.oauthUser &&
      config.oauthClientId &&
      config.oauthClientSecret &&
      config.oauthRefreshToken
  );
}

function createTransporter(config, mailer = nodemailer) {
  if (!hasRequiredOAuthConfig(config)) {
    return null;
  }

  const auth = {
    type: "OAuth2",
    user: config.oauthUser,
    clientId: config.oauthClientId,
    clientSecret: config.oauthClientSecret,
    refreshToken: config.oauthRefreshToken
  };

  if (config.oauthAccessToken) {
    auth.accessToken = config.oauthAccessToken;
  }

  return mailer.createTransport({
    host: config.smtpHost,
    port: config.smtpPort,
    secure: config.smtpSecure,
    auth
  });
}

function createApp(options = {}) {
  const app = express();
  const config = options.config || getConfig();
  const transporter = options.transporter || createTransporter(config, options.mailer || nodemailer);

  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    if (req.method === "OPTIONS") {
      return res.sendStatus(204);
    }
    next();
  });

  app.use(express.json({ limit: "64kb" }));
  app.use(express.static(path.join(__dirname)));

  app.post("/api/report-bug", async (req, res) => {
    try {
      if (!transporter) {
        return res.status(500).json({
          ok: false,
          error: "Server OAuth config is missing. Fill .env first."
        });
      }

      const selectedElement = String(req.body?.selectedElement || "(none)").slice(0, 80);
      const message = String(req.body?.message || "").trim().slice(0, 4000);

      if (!message) {
        return res.status(400).json({
          ok: false,
          error: "Bug report message is required."
        });
      }

      const timestamp = new Date().toISOString();
      const subject = "Atom Visualizer Bug Report";
      const text = [
        "Bug report from Schrodinger Atom Visualizer",
        "",
        `Selected element: ${selectedElement}`,
        `Timestamp (UTC): ${timestamp}`,
        "",
        "Issue details:",
        message
      ].join("\n");

      await transporter.sendMail({
        from: config.smtpFrom || config.oauthUser,
        to: config.reportToEmail,
        subject,
        text
      });

      return res.json({ ok: true });
    } catch (err) {
      console.error("Failed to send bug report:", err);
      return res.status(500).json({
        ok: false,
        error: "Failed to send report email."
      });
    }
  });

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
  });

  return app;
}

if (require.main === module) {
  const config = getConfig();
  const app = createApp({ config });
  app.listen(config.port, () => {
    console.log(`Bug report backend running at http://localhost:${config.port}`);
  });
}

module.exports = {
  createApp,
  createTransporter,
  getConfig,
  hasRequiredOAuthConfig
};
