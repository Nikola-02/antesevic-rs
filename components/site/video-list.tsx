"use client";

import { useState } from "react";
import Image from "next/image";
import { Modal } from "@/components/ui/modal";
import type { Video } from "@/types/database";

export function VideoList({ videos }: { videos: Video[] }) {
  const [video, setVideo] = useState<Video | null>(null);

  return (
    <>
      <div className="space-y-8">
        {videos.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setVideo(item)}
            className="grid w-full gap-6 border-b border-border pb-8 text-left md:grid-cols-[1fr_360px]"
          >
            <div className="order-2 md:order-1">
              <h2 className="font-serif text-2xl sm:text-3xl">{item.title}</h2>
              <p className="mt-3 max-w-2xl text-muted">{item.description}</p>
            </div>
            <div className="relative order-1 h-52 w-full overflow-hidden sm:h-56 md:order-2">
              <Image src={item.thumbnail_url} alt={item.title} fill className="object-cover" />
            </div>
          </button>
        ))}
      </div>
      <Modal open={Boolean(video)} onClose={() => setVideo(null)} className="max-w-5xl p-3">
        {video ? (
          <div className="space-y-3">
            <h3 className="font-serif text-2xl">{video.title}</h3>
            <video
              controls
              autoPlay={false}
              className="h-auto max-h-[75vh] w-full max-w-full bg-black"
              src={video.video_url}
            />
          </div>
        ) : null}
      </Modal>
    </>
  );
}
