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
    const emailPassword = process.env.EMAIL_PASS;
    // We can just use EMAIL_USER for from and to address to keep your .env simple!
    const fromAddress = process.env.EMAIL_USER;
    const toAddress = process.env.EMAIL_USER;

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
    const mailError = error as {
      message?: string;
      code?: string;
      command?: string;
      responseCode?: number;
    };

    console.error("Contact email error:", {
      message: mailError.message,
      code: mailError.code,
      command: mailError.command,
      responseCode: mailError.responseCode,
    });

    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
