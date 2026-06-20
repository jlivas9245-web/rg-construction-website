import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

// Resend's SDK uses Node APIs — keep this route on the Node.js runtime.
export const runtime = "nodejs";

// Where estimate / contact requests are delivered. Override with env if needed.
const TO_EMAIL = process.env.ESTIMATE_TO_EMAIL || "rgconstructionserv@gmail.com";
// Sender address. Defaults to the verified rgconstructiontx.com domain so mail
// is DKIM/SPF-signed for best deliverability. Override with RESEND_FROM_EMAIL.
const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ||
  "RG Construction <estimates@rgconstructiontx.com>";

/**
 * Health check — GET /api/estimate
 * Reports whether the email system is configured, WITHOUT exposing the secret
 * key. Safe to hit on the live site to confirm setup.
 */
export async function GET() {
  const hasKey = Boolean(process.env.RESEND_API_KEY);
  return NextResponse.json({
    configured: hasKey,
    status: hasKey ? "ready" : "missing RESEND_API_KEY",
    to: TO_EMAIL,
    from: FROM_EMAIL,
  });
}

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

// ---- Customer auto-reply (confirmation) templates ----
function customerSubject(isContact: boolean) {
  return isContact
    ? `${site.name} - Message Received`
    : `${site.name} - Estimate Request Received`;
}

function customerHtml(name: string, isContact: boolean) {
  const headline = isContact ? "Message Received" : "Estimate Request Received";
  const intro = isContact
    ? "Thank you for contacting RG Construction. We've received your message and a member of our team will personally review it."
    : "Thank you for requesting a free estimate from RG Construction. We've received your request and a member of our team will personally review the details of your project.";

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light">
<meta name="x-apple-disable-message-reformatting">
<title>${headline}</title>
</head>
<body style="margin:0;padding:0;background-color:#eef4ff;">
  <!-- Preview text (hidden) -->
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">We received your request and will contact you within 24 hours.</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#eef4ff;">
    <tr>
      <td align="center" style="padding:24px 12px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;background-color:#ffffff;border:1px solid #e3e8f2;border-radius:14px;overflow:hidden;font-family:Arial,Helvetica,sans-serif;">
          <!-- Header -->
          <tr>
            <td style="background-color:#1f41b0;background-image:linear-gradient(120deg,#1f41b0,#122047);padding:28px 32px;">
              <div style="color:#ffffff;font-size:24px;font-weight:bold;letter-spacing:3px;">RG CONSTRUCTION</div>
              <div style="color:#bcd4ff;font-size:11px;letter-spacing:2px;text-transform:uppercase;margin-top:6px;">General Contractor &middot; East Texas</div>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:32px;color:#171d2b;font-size:16px;line-height:1.6;">
              <h1 style="margin:0 0 18px;font-size:22px;color:#122047;font-weight:bold;">${headline}</h1>
              <p style="margin:0 0 16px;">Hi ${escapeHtml(name)},</p>
              <p style="margin:0 0 20px;">${intro}</p>

              <!-- 24-hour callout -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 24px;">
                <tr>
                  <td style="background-color:#eef4ff;border-left:4px solid #2451cf;border-radius:8px;padding:16px 20px;color:#1b336f;font-size:16px;font-weight:bold;">
                    &#9200; We will contact you within 24 hours.
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 24px;">Need to reach us sooner? We're happy to talk through your project right away.</p>

              <!-- Call button -->
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 28px;">
                <tr>
                  <td align="center" bgcolor="#2451cf" style="border-radius:8px;">
                    <a href="tel:${site.phoneHref}" style="display:inline-block;padding:14px 32px;font-size:16px;font-weight:bold;color:#ffffff;text-decoration:none;border-radius:8px;">
                      &#128222; Call ${site.phoneDisplay}
                    </a>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 4px;">We appreciate the opportunity to earn your business.</p>
              <p style="margin:0;color:#5c6a86;font-size:14px;">&mdash; The ${site.name} Team</p>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background-color:#f4f6fb;border-top:1px solid #e3e8f2;padding:20px 32px;color:#7d8ba6;font-size:12px;line-height:1.5;">
              <strong style="color:#5c6a86;">${site.legalName}</strong><br>
              Serving ${site.serviceAreaLabel}<br>
              <a href="tel:${site.phoneHref}" style="color:#2451cf;text-decoration:none;">${site.phoneDisplay}</a> &middot;
              <a href="mailto:${site.email}" style="color:#2451cf;text-decoration:none;">${site.email}</a>
              <div style="margin-top:12px;color:#aab6cc;">This is an automated confirmation — please do not reply to this message.</div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function customerText(name: string, isContact: boolean) {
  const headline = isContact ? "Message Received" : "Estimate Request Received";
  const intro = isContact
    ? "Thank you for contacting RG Construction. We've received your message and a member of our team will personally review it."
    : "Thank you for requesting a free estimate from RG Construction. We've received your request and a member of our team will personally review the details of your project.";
  return [
    `RG CONSTRUCTION — ${headline}`,
    "",
    `Hi ${name},`,
    "",
    intro,
    "",
    ">> We will contact you within 24 hours. <<",
    "",
    `Need to reach us sooner? Call ${site.phoneDisplay}.`,
    "",
    "We appreciate the opportunity to earn your business.",
    "",
    `— The ${site.name} Team`,
    `${site.legalName}`,
    `Serving ${site.serviceAreaLabel}`,
    `${site.phoneDisplay} · ${site.email}`,
    "",
    "This is an automated confirmation — please do not reply to this message.",
  ].join("\n");
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

    // Auto-reply confirmation to the customer. Non-fatal: if it fails we still
    // report success because the lead reached the business inbox.
    try {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: [email],
        replyTo: TO_EMAIL,
        subject: customerSubject(isContact),
        html: customerHtml(name, isContact),
        text: customerText(name, isContact),
      });
    } catch (replyErr) {
      console.error("Auto-reply failed (lead still delivered):", replyErr);
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
