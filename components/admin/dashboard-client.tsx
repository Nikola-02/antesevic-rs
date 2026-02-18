"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Gallery, Review, Video } from "@/types/database";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DirectUploadField } from "@/components/site/direct-upload-field";
import { readCsrfToken } from "@/lib/client-security";

type DashboardClientProps = {
  initialGalleries: Gallery[];
  initialVideos: Video[];
  pendingReviews: Review[];
};

export function DashboardClient({
  initialGalleries,
  initialVideos,
  pendingReviews,
}: DashboardClientProps) {
  const router = useRouter();
  const [galleryTitle, setGalleryTitle] = useState("");
  const [galleryDate, setGalleryDate] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [videoTitle, setVideoTitle] = useState("");
  const [videoDescription, setVideoDescription] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");

  async function createGallery() {
    const csrf = readCsrfToken();
    await fetch("/api/admin/galleries", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-csrf-token": csrf },
      body: JSON.stringify({ title: galleryTitle, date: galleryDate, coverImage }),
    });
    router.refresh();
  }

  async function deleteGallery(id: string) {
    const csrf = readCsrfToken();
    await fetch(`/api/admin/galleries/${id}`, {
      method: "DELETE",
      headers: { "x-csrf-token": csrf },
    });
    router.refresh();
  }

  async function createVideo() {
    const csrf = readCsrfToken();
    await fetch("/api/admin/videos", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-csrf-token": csrf },
      body: JSON.stringify({
        title: videoTitle,
        description: videoDescription,
        videoUrl,
        thumbnailUrl,
      }),
    });
    router.refresh();
  }

  async function deleteVideo(id: string) {
    const csrf = readCsrfToken();
    await fetch(`/api/admin/videos/${id}`, {
      method: "DELETE",
      headers: { "x-csrf-token": csrf },
    });
    router.refresh();
  }

  async function approveReview(id: string) {
    const csrf = readCsrfToken();
    await fetch(`/api/admin/reviews/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", "x-csrf-token": csrf },
      body: JSON.stringify({ status: "approved" }),
    });
    router.refresh();
  }

  async function deleteReview(id: string) {
    const csrf = readCsrfToken();
    await fetch(`/api/admin/reviews/${id}`, {
      method: "DELETE",
      headers: { "x-csrf-token": csrf },
    });
    router.refresh();
  }

  return (
    <div className="grid gap-12">
      <section className="grid gap-4">
        <h2 className="font-serif text-3xl">Galerije</h2>
        <div className="grid gap-3 md:grid-cols-3">
          <Input placeholder="Naziv galerije" onChange={(e) => setGalleryTitle(e.target.value)} />
          <Input placeholder="Datum" type="date" onChange={(e) => setGalleryDate(e.target.value)} />
          <Input placeholder="URL naslovne fotografije" value={coverImage} onChange={(e) => setCoverImage(e.target.value)} />
        </div>
        <DirectUploadField
          label="Otpremi fotografiju galerije"
          folder="gallery"
          accept="image/webp,image/jpeg,image/png"
          onUploaded={setCoverImage}
        />
        <Button className="w-fit" onClick={createGallery}>
          Kreiraj galeriju
        </Button>
        <div className="grid gap-2">
          {initialGalleries.map((gallery) => (
            <div key={gallery.id} className="flex items-center justify-between border p-3">
              <span>
                {gallery.title} - {gallery.date}
              </span>
              <Button variant="ghost" onClick={() => deleteGallery(gallery.id)}>
                Obrisi
              </Button>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4">
        <h2 className="font-serif text-3xl">Video zapisi</h2>
        <Input placeholder="Naziv videa" onChange={(e) => setVideoTitle(e.target.value)} />
        <Textarea
          placeholder="Opis"
          rows={4}
          onChange={(e) => setVideoDescription(e.target.value)}
        />
        <Input placeholder="Video URL" value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} />
        <Input
          placeholder="URL thumbnail slike"
          value={thumbnailUrl}
          onChange={(e) => setThumbnailUrl(e.target.value)}
        />
        <DirectUploadField
          label="Otpremi video"
          folder="video"
          accept="video/mp4"
          onUploaded={setVideoUrl}
        />
        <DirectUploadField
          label="Otpremi thumbnail"
          folder="gallery"
          accept="image/webp,image/jpeg,image/png"
          onUploaded={setThumbnailUrl}
        />
        <Button className="w-fit" onClick={createVideo}>
          Kreiraj video
        </Button>
        <div className="grid gap-2">
          {initialVideos.map((video) => (
            <div key={video.id} className="flex items-center justify-between border p-3">
              <span>{video.title}</span>
              <Button variant="ghost" onClick={() => deleteVideo(video.id)}>
                Obrisi
              </Button>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4">
        <h2 className="font-serif text-3xl">Moderacija recenzija</h2>
        {pendingReviews.map((review) => (
          <div key={review.id} className="grid gap-2 border p-4">
            <strong>{review.name}</strong>
            <p>{review.description}</p>
            <div className="flex gap-3">
              <Button onClick={() => approveReview(review.id)}>Odobri</Button>
              <Button variant="ghost" onClick={() => deleteReview(review.id)}>
                Obrisi
              </Button>
            </div>
          </div>
        ))}
        {pendingReviews.length === 0 ? (
          <p className="text-muted">Nema recenzija na cekanju.</p>
        ) : null}
      </section>
    </div>
  );
}
