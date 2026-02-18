import { NextResponse, type NextRequest } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/schemas";
import { env } from "@/lib/env";
import { checkRateLimit } from "@/lib/rate-limit";
import { getRequestIp } from "@/lib/api";

export async function POST(request: NextRequest) {
  const ip = getRequestIp(request);
  const limit = await checkRateLimit(`contact:${ip}`, 5, 60_000);
  if (!limit.success) {
    return NextResponse.json({ error: "Previse zahteva" }, { status: 429 });
  }

  const payload = await request.json();
  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ error: "Neispravni podaci" }, { status: 400 });
  }

  if (env.RESEND_API_KEY && env.CONTACT_RECEIVER_EMAIL) {
    const resend = new Resend(env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Kontakt forma <onboarding@resend.dev>",
      to: env.CONTACT_RECEIVER_EMAIL,
      subject: `Nova poruka od: ${parsed.data.name}`,
      text: `Email: ${parsed.data.email}\n\nPoruka:\n${parsed.data.message}`,
    });
  }

  return NextResponse.json({ ok: true });
}
