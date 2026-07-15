import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// nodemailer needs the Node runtime (net/tls), not Edge.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Contact form endpoint - sends the enquiry over SMTP (Google Workspace Gmail).
 *
 * Credentials are read from server-only env vars and NEVER hardcoded or logged:
 *   SMTP_HOST (default smtp.gmail.com), SMTP_PORT (default 465), SMTP_USER, SMTP_PASS
 *   (a Google App Password), CONTACT_TO (inbox), CONTACT_FROM (defaults to SMTP_USER).
 * When SMTP is not configured the route returns 503 so the client shows its honest
 * "email or WhatsApp us" fallback rather than faking a send.
 *
 * Spam is gated by an invisible Google reCAPTCHA v3 score (RECAPTCHA_SECRET_KEY) plus a
 * honeypot. reCAPTCHA is only enforced when the secret is set (graceful otherwise).
 */
const SMTP_HOST = process.env.SMTP_HOST || "smtp.gmail.com";
const SMTP_PORT = Number(process.env.SMTP_PORT || 465);
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const CONTACT_TO = process.env.CONTACT_TO || SMTP_USER;
const CONTACT_FROM = process.env.CONTACT_FROM || SMTP_USER;

const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET_KEY;
const RECAPTCHA_MIN_SCORE = 0.5;
const RECAPTCHA_ACTION = "contact_submit";

const isEmail = (v: string) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v);
const clip = (v: unknown, max = 5000) => String(v ?? "").trim().slice(0, max);

// Verify a reCAPTCHA v3 token via Google's siteverify (form-urlencoded, per the API).
// Skipped when no secret is configured so local/preview still works. Never logs the secret.
async function recaptchaOk(token: unknown): Promise<boolean> {
  if (!RECAPTCHA_SECRET) return true;
  if (typeof token !== "string" || !token) return false;
  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret: RECAPTCHA_SECRET, response: token }),
    });
    const r = (await res.json()) as { success?: boolean; score?: number; action?: string };
    return r.success === true && (r.score ?? 0) >= RECAPTCHA_MIN_SCORE && r.action === RECAPTCHA_ACTION;
  } catch {
    return false;
  }
}

export async function POST(req: Request) {
  if (!SMTP_USER || !SMTP_PASS) {
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  // Honeypot: a hidden field only a bot fills. Accept silently (so the bot sees success)
  // but send nothing - never a client-side silent-drop that could bury a real lead.
  if (clip(data.company_website)) {
    return NextResponse.json({ ok: true });
  }

  // Invisible reCAPTCHA v3 score gate (only enforced when a secret is configured).
  if (!(await recaptchaOk(data.token))) {
    return NextResponse.json({ ok: false, error: "captcha_failed" }, { status: 400 });
  }

  const name = clip(data.name, 200);
  const email = clip(data.email, 320);
  const message = clip(data.message);
  if (!name || !email || !message || !isEmail(email)) {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 422 });
  }

  const detail: Record<string, string> = {
    Phone: clip(data.phone, 60),
    Company: clip(data.company, 200),
    "Project type": clip(data.project_type, 120),
    Budget: clip(data.budget, 60),
    Timeline: clip(data.timeline, 60),
  };
  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    ...Object.entries(detail).filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`),
    "",
    message,
  ];
  const subject = `New project enquiry - ${detail["Project type"] || "General"}`;

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  try {
    await transporter.sendMail({
      from: `"Intention InfoService website" <${CONTACT_FROM}>`,
      to: CONTACT_TO,
      replyTo: `"${name}" <${email}>`,
      subject,
      text: lines.join("\n"),
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }
}
