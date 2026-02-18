"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Modal } from "@/components/ui/modal";

type PortfolioLightboxProps = {
  images: string[];
};

export function PortfolioLightbox({ images }: PortfolioLightboxProps) {
  const [index, setIndex] = useState<number | null>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (index === null) return;
    const handler = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        setIndex((value) => (value === null ? 0 : (value + 1) % images.length));
      }
      if (event.key === "ArrowLeft") {
        setIndex((value) =>
          value === null ? 0 : (value - 1 + images.length) % images.length,
        );
      }
      if (event.key === "Escape") {
        setIndex(null);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [images.length, index]);

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 md:columns-3">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            className="relative mb-4 block w-full break-inside-avoid overflow-hidden"
            onClick={() => setIndex(i)}
          >
            <Image
              src={src}
              alt="Fotografija iz galerije"
              width={900}
              height={1100}
              className="h-auto w-full object-cover transition duration-500 hover:scale-[1.02]"
            />
          </button>
        ))}
      </div>
      <Modal
        open={index !== null}
        onClose={() => setIndex(null)}
        className="max-w-6xl p-2 pt-14 sm:p-3 sm:pt-14"
      >
        {index !== null ? (
          <div
            className="relative h-[70vh] touch-pan-y"
            onTouchStart={(event) => {
              const touch = event.touches[0];
              touchStart.current = { x: touch.clientX, y: touch.clientY };
            }}
            onTouchEnd={(event) => {
              if (!touchStart.current) return;
              const touch = event.changedTouches[0];
              const dx = touch.clientX - touchStart.current.x;
              const dy = touch.clientY - touchStart.current.y;
              const absX = Math.abs(dx);
              const absY = Math.abs(dy);

              if (absX > 40 && absX > absY) {
                if (dx < 0) {
                  setIndex((value) => (value === null ? 0 : (value + 1) % images.length));
                } else {
                  setIndex((value) =>
                    value === null ? 0 : (value - 1 + images.length) % images.length,
                  );
                }
              } else if (dy > 90 && absY > absX) {
                setIndex(null);
              }
              touchStart.current = null;
            }}
          >
            <button
              type="button"
              className="absolute left-2 top-1/2 z-20 hidden -translate-y-1/2 bg-black/70 p-3 text-white md:block"
              onClick={() =>
                setIndex((value) =>
                  value === null ? 0 : (value - 1 + images.length) % images.length,
                )
              }
            >
              <ChevronLeft />
            </button>
            <Image src={images[index]} alt="Odabrana fotografija" fill className="object-contain" />
            <button
              type="button"
              className="absolute right-2 top-1/2 z-20 hidden -translate-y-1/2 bg-black/70 p-3 text-white md:block"
              onClick={() =>
                setIndex((value) => (value === null ? 0 : (value + 1) % images.length))
              }
            >
              <ChevronRight />
            </button>
            <p className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/60 px-3 py-1 text-xs text-white md:hidden">
              Prevuci levo/desno za sledecu, prevuci nadole za zatvaranje
            </p>
          </div>
        ) : null}
      </Modal>
    </>
  );
}
