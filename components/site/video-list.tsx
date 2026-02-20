"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { Modal } from "@/components/ui/modal";
import type { Video } from "@/types/database";

export function VideoList({ videos }: { videos: Video[] }) {
  const [video, setVideo] = useState<Video | null>(null);

  return (
    <>
      <div className="space-y-8">
        {videos.map((item) => (
          <div key={item.id} className="relative">
            <button
              type="button"
              onClick={() => setVideo(item)}
              className="group grid w-full gap-6 rounded-sm border border-transparent p-4 text-left transition duration-300 hover:border-black/15 hover:bg-black/[0.03] hover:shadow-[0_12px_35px_rgba(0,0,0,0.12)] md:grid-cols-[1fr_360px]"
            >
              <div className="order-2 md:order-1">
                <h2 className="font-serif text-2xl transition duration-300 group-hover:translate-x-1 sm:text-3xl">
                  {item.title}
                </h2>
                <p className="mt-3 max-w-2xl text-muted">{item.description}</p>
                <p className="mt-4 text-[11px] uppercase tracking-[0.16em] text-black/60">
                  Klikni bilo gde za reprodukciju
                </p>
              </div>
              <div className="relative order-1 h-52 w-full overflow-hidden sm:h-56 md:order-2">
                <Image
                  src={item.thumbnail_url}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-black/20 transition duration-300 group-hover:bg-black/35" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="inline-flex items-center gap-2 border border-white/60 bg-black/35 px-4 py-2 text-xs uppercase tracking-[0.14em] text-white transition duration-300 group-hover:bg-black/55">
                    <Play size={14} />
                    Pusti video
                  </span>
                </div>
              </div>
            </button>
            <div className="pointer-events-none mt-6 h-px w-full bg-gradient-to-r from-transparent via-black/20 to-transparent" />
          </div>
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
