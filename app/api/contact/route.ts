import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // ── Validation ──────────────────────────────────────────────────────────
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // ── Transport ────────────────────────────────────────────────────────────
    // Configure via environment variables in .env.local:
    //   SMTP_HOST=smtp.gmail.com
    //   SMTP_PORT=587
    //   SMTP_USER=your-address@gmail.com
    //   SMTP_PASS=your-app-password
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST ?? "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT ?? "587"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // ── Send ─────────────────────────────────────────────────────────────────
    await transporter.sendMail({
      from: `"El Porvenir Website" <${process.env.SMTP_USER}>`,
      to: "info@elporvenirbiogrowers.com",
      replyTo: email,
      subject: `Contacto — ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;color:#232322">
          <p style="font-size:11px;letter-spacing:0.3em;text-transform:uppercase;color:#5a6346;margin-bottom:32px">
            El Porvenir Bio Growers — New message
          </p>
          <table style="width:100%;border-collapse:collapse;margin-bottom:32px">
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #e8e8e8;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#999;width:100px">Name</td>
              <td style="padding:12px 0;border-bottom:1px solid #e8e8e8;font-size:15px">${name}</td>
            </tr>
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #e8e8e8;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#999">Email</td>
              <td style="padding:12px 0;border-bottom:1px solid #e8e8e8;font-size:15px"><a href="mailto:${email}" style="color:#5a6346">${email}</a></td>
            </tr>
          </table>
          <p style="font-size:15px;line-height:1.7;white-space:pre-wrap">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] send error:", err);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}
