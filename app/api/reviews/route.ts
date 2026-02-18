import { NextResponse, type NextRequest } from "next/server";
import { createReviewSchema } from "@/lib/schemas";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { checkRateLimit } from "@/lib/rate-limit";
import { getRequestIp } from "@/lib/api";

export async function POST(request: NextRequest) {
  const ip = getRequestIp(request);
  const limit = await checkRateLimit(`reviews:${ip}`, 3, 60_000);
  if (!limit.success) {
    return NextResponse.json({ error: "Previse zahteva" }, { status: 429 });
  }

  const body = await request.json();
  const parsed = createReviewSchema.safeParse(body);
  if (!parsed.success || parsed.data.honeypot) {
    return NextResponse.json({ error: "Neispravni podaci" }, { status: 400 });
  }

  const admin = createSupabaseAdminClient();
  if (!admin) {
    return NextResponse.json({ error: "Server nije konfigurisan" }, { status: 500 });
  }

  const { error } = await admin.from("reviews").insert({
    name: parsed.data.name,
    social_link: null,
    description: parsed.data.description,
    avatar_url: parsed.data.avatarUrl,
    status: "pending",
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
