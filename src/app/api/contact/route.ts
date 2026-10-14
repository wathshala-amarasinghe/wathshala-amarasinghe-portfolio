import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { siteConfig } from "@/lib/site-config";
import {
  CONTACT_BODY_LIMIT_BYTES,
  escapeHtml,
  validateContactSubmission,
} from "@/lib/contact";

export const runtime = "nodejs";

const DEFAULT_CONTACT_TO_ADDRESS = "wathshaladulashan@gmail.com";

function jsonResponse(
  body: { success?: boolean; error?: string },
  status = 200
) {
  return NextResponse.json(body, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

function hasAllowedOrigin(req: NextRequest): boolean {
  const originHeader = req.headers.get("origin");

  if (!originHeader) {
    return true;
  }

  try {
    const origin = new URL(originHeader).origin;
    return (
      origin === new URL(siteConfig.url).origin || origin === req.nextUrl.origin
    );
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  if (!hasAllowedOrigin(req)) {
    return jsonResponse({ error: "Request origin is not allowed." }, 403);
  }

  const contentType = req.headers.get("content-type")?.toLowerCase() ?? "";
  if (!contentType.startsWith("application/json")) {
    return jsonResponse(
      { error: "Content-Type must be application/json." },
      415
    );
  }

  const contentLength = req.headers.get("content-length");
  if (contentLength) {
    const declaredBytes = Number(contentLength);
    if (!Number.isFinite(declaredBytes) || declaredBytes < 0) {
      return jsonResponse({ error: "Invalid Content-Length header." }, 400);
    }
    if (declaredBytes > CONTACT_BODY_LIMIT_BYTES) {
      return jsonResponse({ error: "Request body is too large." }, 413);
    }
  }

  let rawBody: string;
  try {
    rawBody = await req.text();
  } catch {
    return jsonResponse({ error: "Unable to read request body." }, 400);
  }

  if (new TextEncoder().encode(rawBody).byteLength > CONTACT_BODY_LIMIT_BYTES) {
    return jsonResponse({ error: "Request body is too large." }, 413);
  }

  let requestBody: unknown;
  try {
    requestBody = JSON.parse(rawBody) as unknown;
  } catch {
    return jsonResponse({ error: "Request body must be valid JSON." }, 400);
  }

  const validation = validateContactSubmission(requestBody);
  if (!validation.success) {
    return jsonResponse({ error: validation.error }, 400);
  }

  const { user_name, user_email, message } = validation.data;

  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, "");
  const contactToAddress =
    process.env.CONTACT_TO_ADDRESS?.trim() ?? DEFAULT_CONTACT_TO_ADDRESS;

  if (!gmailUser || !gmailPass) {
    console.error("Contact email service is missing required credentials.");
    return jsonResponse(
      { error: "Email service is temporarily unavailable." },
      503
    );
  }

  const safeName = escapeHtml(user_name);
  const safeEmail = escapeHtml(user_email);
  const safeMessage = escapeHtml(message).replace(/\r?\n/g, "<br />");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailPass,
    },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  });

  try {
    const delivery = await transporter.sendMail({
      from: `"Portfolio Contact" <${gmailUser}>`,
      to: contactToAddress,
      replyTo: user_email,
      subject: `New message from ${user_name} — Portfolio`,
      html: `
        <div style="font-family:system-ui,sans-serif;background:#08090D;color:#E2E8F0;padding:40px 20px;">
          <div style="max-width:600px;margin:0 auto;background:#101218;border:2px solid rgba(255,255,255,0.05);border-radius:24px;padding:40px;">
            <h2 style="color:#ffffff;margin-top:0;">New Portfolio Contact</h2>
            <hr style="border-color:rgba(255,255,255,0.1);margin:20px 0;" />
            <p style="color:#94A3B8;margin:0 0 8px;"><strong style="color:#fff;">Name:</strong> ${safeName}</p>
            <p style="color:#94A3B8;margin:0 0 8px;"><strong style="color:#fff;">Email:</strong> ${safeEmail}</p>
            <p style="color:#94A3B8;margin:16px 0 8px;"><strong style="color:#fff;">Message:</strong></p>
            <p style="color:#E2E8F0;background:rgba(255,255,255,0.05);padding:16px;border-radius:12px;border-left:4px solid #A995FF;">${safeMessage}</p>
          </div>
        </div>
      `,
      text: `New Portfolio Contact\n\nName: ${user_name}\nEmail: ${user_email}\n\nMessage:\n${message}`,
    });

    if (!Array.isArray(delivery.accepted) || delivery.accepted.length === 0) {
      throw new Error("RecipientNotAccepted");
    }

    console.info(`Contact email accepted by Gmail (${delivery.messageId}).`);

    return jsonResponse({ success: true });
  } catch (error: unknown) {
    const errorName = error instanceof Error ? error.name : "UnknownError";
    console.error(`Contact email delivery failed (${errorName}).`);
    return jsonResponse(
      { error: "Message could not be sent. Please try again later." },
      502
    );
  }
}
