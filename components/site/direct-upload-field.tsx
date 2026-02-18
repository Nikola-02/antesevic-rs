"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { convertImageToWebP } from "@/lib/image-processing";

type UploadFolder = "gallery" | "video" | "avatars";

type DirectUploadFieldProps = {
  label: string;
  folder: UploadFolder;
  accept: string;
  onUploaded: (url: string) => void;
};

export function DirectUploadField({
  label,
  folder,
  accept,
  onUploaded,
}: DirectUploadFieldProps) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function onFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    let file = event.target.files?.[0];
    if (!file) return;
    setBusy(true);
    setError("");

    try {
      if (folder !== "video") {
        file = await convertImageToWebP(file, 2500);
      }

      const preResponse = await fetch("/api/generate-upload-url", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contentType: file.type,
          fileName: file.name,
          folder,
          fileSize: file.size,
        }),
      });

      if (!preResponse.ok) {
        throw new Error("Nije moguce pripremiti upload.");
      }

      const payload = (await preResponse.json()) as { signedUrl: string; publicUrl: string };
      const uploadResponse = await fetch(payload.signedUrl, {
        method: "PUT",
        headers: { "Content-Type": file.type },
        body: file,
      });

      if (!uploadResponse.ok) {
        throw new Error("Otpremanje nije uspelo.");
      }

      onUploaded(payload.publicUrl);
    } catch (uploadError) {
      setError(uploadError instanceof Error ? uploadError.message : "Otpremanje nije uspelo.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="grid gap-2">
      <label className="text-sm">{label}</label>
      <Input type="file" accept={accept} onChange={onFileChange} />
      {busy ? <p className="text-sm text-muted">Otpremanje...</p> : null}
      {error ? <p className="text-sm text-red-700">{error}</p> : null}
    </div>
  );
}
