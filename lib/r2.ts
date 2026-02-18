import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { env, hasR2Config } from "@/lib/env";
import { sanitizeFilename } from "@/lib/utils";

export function createR2Client() {
  if (!hasR2Config()) {
    return null;
  }

  return new S3Client({
    region: "auto",
    endpoint: env.R2_ENDPOINT!,
    credentials: {
      accessKeyId: env.R2_ACCESS_KEY_ID!,
      secretAccessKey: env.R2_SECRET_ACCESS_KEY!,
    },
  });
}

export async function createUploadUrl(params: {
  folder: "gallery" | "video" | "avatars";
  fileName: string;
  contentType: string;
  maxFileSize: number;
}) {
  const client = createR2Client();
  if (!client) {
    throw new Error("R2 env vars are missing.");
  }

  const key = `${params.folder}/${Date.now()}-${sanitizeFilename(params.fileName)}`;
  const command = new PutObjectCommand({
    Bucket: env.R2_BUCKET!,
    Key: key,
    ContentType: params.contentType,
  });

  const signedUrl = await getSignedUrl(client, command, { expiresIn: 60 });
  const publicUrl = `${env.R2_ENDPOINT}/${env.R2_BUCKET}/${key}`;

  return {
    signedUrl,
    key,
    publicUrl,
    maxFileSize: params.maxFileSize,
  };
}
