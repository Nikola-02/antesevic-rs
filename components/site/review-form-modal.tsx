"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { createReviewSchema } from "@/lib/schemas";
import { Modal } from "@/components/ui/modal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { convertImageToWebP } from "@/lib/image-processing";

type FormValues = z.input<typeof createReviewSchema>;

export function ReviewFormModal() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [preview, setPreview] = useState("");
  const [uploading, setUploading] = useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(createReviewSchema),
    defaultValues: {
      name: "",
      description: "",
      avatarUrl: "",
      honeypot: "",
    },
  });

  async function handleAvatarUpload(file: File) {
    setUploading(true);
    try {
      const optimized = await convertImageToWebP(file, 1200);
      const uploadUrlResponse = await fetch("/api/generate-upload-url", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contentType: optimized.type,
          fileName: optimized.name,
          folder: "avatars",
          fileSize: optimized.size,
        }),
      });

      if (!uploadUrlResponse.ok) {
        throw new Error("Otpremanje slike nije uspelo.");
      }

      const payload = (await uploadUrlResponse.json()) as {
        signedUrl: string;
        publicUrl: string;
      };

      const uploadResult = await fetch(payload.signedUrl, {
        method: "PUT",
        headers: { "Content-Type": optimized.type },
        body: optimized,
      });

      if (!uploadResult.ok) {
        throw new Error("Otpremanje slike nije uspelo.");
      }

      form.setValue("avatarUrl", payload.publicUrl, { shouldValidate: true });
      setPreview(payload.publicUrl);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Doslo je do greske pri upload-u.");
    } finally {
      setUploading(false);
    }
  }

  const onSubmit = form.handleSubmit(async (values) => {
    if (!values.avatarUrl) {
      setStatus("Molimo izaberi profilnu fotografiju.");
      return;
    }

    const response = await fetch("/api/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      setStatus("Recenzija nije poslata. Pokusaj ponovo.");
      return;
    }

    setStatus("Recenzija je poslata i ceka odobrenje.");
    setPreview("");
    form.reset();
  });

  return (
    <>
      <Button variant="ghost" onClick={() => setOpen(true)}>
        Ostavi recenziju
      </Button>
      <Modal open={open} onClose={() => setOpen(false)} className="max-w-3xl p-0">
        <div className="grid overflow-hidden md:grid-cols-[320px_1fr]">
          <div className="bg-black p-8 text-white">
            <h3 className="font-serif text-4xl leading-tight">Podeli utisak</h3>
            <p className="mt-4 text-sm text-white/80">
              Hvala ti na poverenju. Tvoja recenzija pomaze drugim klijentima.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4">
              <div className="relative h-28 w-28 overflow-hidden rounded-full border border-white/40 bg-white/10">
                {preview ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={preview} alt="Pregled profilne slike" className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-xs text-white/70">
                    Profilna
                  </div>
                )}
              </div>
              <label className="cursor-pointer rounded-full border border-white/40 px-5 py-2 text-sm hover:bg-white hover:text-black">
                {uploading ? "Otpremanje..." : "Izaberi fotografiju"}
                <input
                  type="file"
                  accept="image/webp,image/jpeg,image/png"
                  className="hidden"
                  onChange={(event) => {
                    const file = event.target.files?.[0];
                    if (!file) return;
                    void handleAvatarUpload(file);
                  }}
                />
              </label>
            </div>
          </div>

          <form onSubmit={onSubmit} className="grid gap-4 p-8">
            <Input placeholder="Ime i prezime" {...form.register("name")} />
            <Textarea placeholder="Tvoj utisak" rows={6} {...form.register("description")} />
            <input
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              {...form.register("honeypot")}
            />
            <Button type="submit" className="w-fit" disabled={uploading}>
              Posalji recenziju
            </Button>
            {status ? <p className="text-sm text-muted">{status}</p> : null}
          </form>
        </div>
      </Modal>
    </>
  );
}
