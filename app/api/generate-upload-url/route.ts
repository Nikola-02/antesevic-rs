import { NextResponse, type NextRequest } from "next/server";
import { uploadRequestSchema } from "@/lib/schemas";
import { createUploadUrl } from "@/lib/r2";
import { checkRateLimit } from "@/lib/rate-limit";
import { getRequestIp } from "@/lib/api";
import { env } from "@/lib/env";

const MB = 1024 * 1024;

export async function POST(request: NextRequest) {
  const ip = getRequestIp(request);
  const limit = await checkRateLimit(`upload:${ip}`, 30, 60_000);
  if (!limit.success) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const payload = await request.json();
  const parsed = uploadRequestSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid upload payload" }, { status: 400 });
  }

  const { contentType, folder, fileName, fileSize } = parsed.data;

  if (folder === "video") {
    if (contentType !== "video/mp4" || fileSize > 500 * MB) {
      return NextResponse.json({ error: "Invalid video upload" }, { status: 400 });
    }
  } else if (contentType !== "image/webp" || fileSize > 5 * MB) {
    return NextResponse.json(
      { error: "Images must be WebP and smaller than 5MB." },
      { status: 400 },
    );
  }

  const simulatedStorageUsageGb = Number(process.env.SIMULATED_STORAGE_GB ?? 120);
  if (simulatedStorageUsageGb >= env.STORAGE_BLOCK_GB) {
    return NextResponse.json(
      { error: "Storage limit reached. Uploads are temporarily blocked." },
      { status: 403 },
    );
  }

  const response = await createUploadUrl({
    folder,
    fileName,
    contentType,
    maxFileSize: folder === "video" ? 500 * MB : 5 * MB,
  });

  return NextResponse.json(response);
}
