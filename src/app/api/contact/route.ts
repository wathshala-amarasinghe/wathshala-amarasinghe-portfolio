import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const emailUser = process.env.EMAIL_USER;
    const emailPassword = process.env.EMAIL_PASSWORD;
    const fromAddress = process.env.EMAIL_FROM_ADDRESS;
    const toAddress = process.env.EMAIL_TO_ADDRESS;

    console.log("CONTACT_EMAIL_CONFIG", {
      hasEmailUser: Boolean(process.env.EMAIL_USER),
      hasEmailPassword: Boolean(process.env.EMAIL_PASSWORD),
      hasFromAddress: Boolean(process.env.EMAIL_FROM_ADDRESS),
      hasToAddress: Boolean(process.env.EMAIL_TO_ADDRESS),
    });

    if (!emailUser || !emailPassword || !fromAddress || !toAddress) {
      console.error("Required email environment variables are missing.");

      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
    });

    await transporter.sendMail({
      from: `"Wathshala Portfolio" <${fromAddress}>`,
      to: toAddress,
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    return NextResponse.json(
      { message: "Message sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("CONTACT_MAIL_ERROR", {
      message: error instanceof Error ? error.message : String(error),
      code:
        typeof error === "object" && error !== null && "code" in error
          ? (error as any).code
          : undefined,
    });

    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
