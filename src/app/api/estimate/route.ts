import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

// Resend's SDK uses Node APIs — keep this route on the Node.js runtime.
export const runtime = "nodejs";

// Where estimate / contact requests are delivered. Override with env if needed.
const TO_EMAIL = process.env.ESTIMATE_TO_EMAIL || "rgconstructionserv@gmail.com";
// Must be an address on a domain you've verified in Resend. For quick testing
// Resend allows "onboarding@resend.dev".
const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || "RG Construction <onboarding@resend.dev>";

type LeadPayload = {
  name?: string;
  phone?: string;
  email?: string;
  city?: string;
  service?: string;
  budget?: string;
  message?: string;
  variant?: "quote" | "contact";
  // Honeypot — bots fill this, humans never see it.
  company?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, value?: string) {
  if (!value) return "";
  return `<tr>
    <td style="padding:8px 12px;background:#f4f6fb;font-weight:600;color:#1b336f;border:1px solid #e8ecf4;white-space:nowrap;vertical-align:top">${label}</td>
    <td style="padding:8px 12px;color:#171d2b;border:1px solid #e8ecf4">${escapeHtml(value).replace(/\n/g, "<br>")}</td>
  </tr>`;
}

export async function POST(request: Request) {
  let data: LeadPayload;
  try {
    data = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Silently accept honeypot hits so bots think they succeeded.
  if (data.company && data.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = data.name?.trim();
  const phone = data.phone?.trim();
  const email = data.email?.trim();
  const isContact = data.variant === "contact";

  if (!name || !phone || !email) {
    return NextResponse.json(
      { error: "Name, phone and email are required." },
      { status: 400 },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set — cannot send estimate email.");
    return NextResponse.json(
      { error: "Email service is not configured. Please call us instead." },
      { status: 500 },
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const heading = isContact
    ? "New Contact Message"
    : "New Free Estimate Request";
  const subject = `${heading} — ${name}`;

  const html = `<!doctype html>
  <html>
    <body style="margin:0;background:#eef4ff;font-family:Arial,Helvetica,sans-serif">
      <div style="max-width:600px;margin:0 auto;padding:24px">
        <div style="background:linear-gradient(120deg,#1f41b0,#122047);border-radius:12px 12px 0 0;padding:24px 28px">
          <h1 style="margin:0;color:#ffffff;font-size:20px;letter-spacing:1px;text-transform:uppercase">${heading}</h1>
          <p style="margin:6px 0 0;color:#bcd4ff;font-size:13px">${site.name} · ${site.url.replace(/^https?:\/\//, "")}</p>
        </div>
        <div style="background:#ffffff;border:1px solid #e8ecf4;border-top:0;border-radius:0 0 12px 12px;padding:24px 28px">
          <table style="width:100%;border-collapse:collapse;font-size:14px">
            ${row("Name", name)}
            ${row("Phone", phone)}
            ${row("Email", email)}
            ${row("City / Location", data.city?.trim())}
            ${row("Service Needed", data.service?.trim())}
            ${row("Estimated Budget", data.budget?.trim())}
            ${row("Project Details", data.message?.trim())}
          </table>
          <p style="margin:20px 0 0;color:#5c6a86;font-size:12px">
            Reply directly to this email to respond to ${escapeHtml(name)}.
          </p>
        </div>
      </div>
    </body>
  </html>`;

  const text = [
    heading,
    "",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    data.city ? `City: ${data.city}` : "",
    data.service ? `Service: ${data.service}` : "",
    data.budget ? `Budget: ${data.budget}` : "",
    data.message ? `\nProject Details:\n${data.message}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject,
      html,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Could not send your request. Please call us instead." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Unexpected error sending estimate email:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please call us instead." },
      { status: 500 },
    );
  }
}
