import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { user_name, user_email, message } = body as {
      user_name: string;
      user_email: string;
      message: string;
    };

    if (!user_name?.trim() || !user_email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;

    if (!gmailUser || !gmailPass) {
      console.error("GMAIL_USER or GMAIL_APP_PASSWORD env vars are missing.");
      return NextResponse.json(
        { error: "Email service is not configured on the server." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${gmailUser}>`,
      to: "wathshaladulashan@gmail.com",
      replyTo: user_email,
      subject: `New message from ${user_name} — Portfolio`,
      html: `
        <div style="font-family:system-ui,sans-serif;background:#08090D;color:#E2E8F0;padding:40px 20px;">
          <div style="max-width:600px;margin:0 auto;background:#101218;border:2px solid rgba(255,255,255,0.05);border-radius:24px;padding:40px;">
            <h2 style="color:#ffffff;margin-top:0;">New Portfolio Contact</h2>
            <hr style="border-color:rgba(255,255,255,0.1);margin:20px 0;" />
            <p style="color:#94A3B8;margin:0 0 8px;"><strong style="color:#fff;">Name:</strong> ${user_name}</p>
            <p style="color:#94A3B8;margin:0 0 8px;"><strong style="color:#fff;">Email:</strong> ${user_email}</p>
            <p style="color:#94A3B8;margin:16px 0 8px;"><strong style="color:#fff;">Message:</strong></p>
            <p style="color:#E2E8F0;background:rgba(255,255,255,0.05);padding:16px;border-radius:12px;border-left:4px solid #6B191F;">${message.replace(/\n/g, "<br/>")}</p>
            <hr style="border-color:rgba(255,255,255,0.1);margin:32px 0 16px;" />
            <p style="color:#94A3B8;margin:0;">
              Best regards,<br/>
              <strong style="color:#6B191F;font-size:18px;">Wathshala Amarasinghe</strong><br/>
              <span style="font-size:14px;">UI/UX Engineer</span>
            </p>
          </div>
        </div>
      `,
      text: `New Portfolio Contact\n\nName: ${user_name}\nEmail: ${user_email}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    console.error("Nodemailer error:", errorMsg);
    return NextResponse.json(
      { error: "Failed to send email. Please check server logs." },
      { status: 500 }
    );
  }
}
