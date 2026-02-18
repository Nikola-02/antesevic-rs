"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type BeforeAfterSliderProps = {
  beforeImage: string;
  afterImage: string;
};

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const updatePosition = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const percent = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, percent)));
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden border border-border select-none touch-pan-y"
      onPointerDown={(event) => updatePosition(event.clientX)}
      onPointerMove={(event) => {
        if (event.buttons === 1) {
          updatePosition(event.clientX);
        }
      }}
    >
      <div className="relative h-[320px] w-full sm:h-[420px] md:h-[540px]">
        <Image src={beforeImage} alt="Fotografija pre obrade" fill className="object-cover" />
        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <div className="relative h-full w-full">
            <Image src={afterImage} alt="Fotografija posle obrade" fill className="object-cover" />
          </div>
        </div>
        <div
          className="absolute inset-y-0 z-20 w-px bg-white"
          style={{ left: `${position}%` }}
        />
        <button
          type="button"
          className="absolute top-1/2 z-20 h-11 w-11 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/70 bg-black/50 text-white"
          style={{ left: `${position}%` }}
          aria-label="Drag slider handle"
        >
          ↔
        </button>
        <span className="absolute left-4 top-4 z-20 bg-black/70 px-2 py-1 text-xs text-white">
          PRE
        </span>
        <span className="absolute right-4 top-4 z-20 bg-black/70 px-2 py-1 text-xs text-white">
          POSLE
        </span>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        className="absolute inset-x-3 bottom-3 z-30 h-11"
        aria-label="Poredjenje fotografija pre i posle obrade"
      />
    </div>
  );
}
