import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  inquiry: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactPayload = await req.json();
    const { name, email, inquiry, message } = body;

    // Basic validation
    if (!name || !email || !inquiry || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    // Simple email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "hello@aibusinesscontrol.com";

    if (!RESEND_API_KEY) {
      // In dev, just log and return success
      console.log("[Contact Form]", { name, email, inquiry, message });
      return NextResponse.json({ ok: true });
    }

    // Send via Resend
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Website Contact <noreply@aibusinesscontrol.com>",
        to: CONTACT_EMAIL,
        reply_to: email,
        subject: `[${inquiry}] New message from ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1F1F1F;">
            <h2 style="color: #C2692A;">New message via aibusinesscontrol.com</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Inquiry type:</strong> ${inquiry}</p>
            <hr style="border: none; border-top: 1px solid #F5DBC5; margin: 20px 0;" />
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const err = await res.json();
      console.error("[Resend error]", err);
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[Contact API error]", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
