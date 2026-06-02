import { NextResponse, type NextRequest } from "next/server";
import { Resend } from "resend";
import {
  buildContactEmailHtml,
  buildContactEmailSubject,
  buildContactEmailText,
} from "@/lib/contact-email";
import { contactSchema } from "@/lib/schemas";
import { env } from "@/lib/env";
import { checkRateLimit } from "@/lib/rate-limit";
import { getRequestIp } from "@/lib/api";
import { siteConfig } from "@/lib/site-config";

export async function POST(request: NextRequest) {
  const ip = getRequestIp(request);
  const limit = await checkRateLimit(`contact:${ip}`, 5, 60_000);
  if (!limit.success) {
    return NextResponse.json({ error: "Previše zahteva" }, { status: 429 });
  }

  const payload = await request.json();
  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ error: "Neispravni podaci" }, { status: 400 });
  }

  if (!env.RESEND_API_KEY) {
    return NextResponse.json({ error: "Email servis nije konfigurisan" }, { status: 503 });
  }

  const receiver = env.CONTACT_RECEIVER_EMAIL ?? siteConfig.email;
  const from = env.RESEND_FROM_EMAIL ?? "Antesevic Weddings <onboarding@resend.dev>";

  try {
    const resend = new Resend(env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from,
      to: receiver,
      replyTo: parsed.data.email,
      subject: buildContactEmailSubject(parsed.data.name),
      text: buildContactEmailText(parsed.data),
      html: buildContactEmailHtml(parsed.data),
    });

    if (error) {
      console.error("Resend contact error:", error);
      return NextResponse.json({ error: "Slanje emaila nije uspelo" }, { status: 502 });
    }
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json({ error: "Slanje emaila nije uspelo" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
