"use client";

import { useState } from "react";
import Image from "next/image";
import type { Review } from "@/types/database";

export function ReviewCard({ review }: { review: Review }) {
  const [expanded, setExpanded] = useState(false);
  const needsExpand = review.description.length > 240;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden bg-white px-6 pb-6 pt-7 sm:px-7 sm:pb-7">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,0,0,0.05),_transparent_56%)] opacity-70 transition duration-500 group-hover:opacity-100" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-black/35 to-transparent" />

      <p className="relative mb-3 text-4xl leading-none text-black/30">“</p>

      <p
        className={
          expanded
            ? "relative flex-1 text-[15px] leading-relaxed text-black/90"
            : "relative flex-1 overflow-hidden text-[15px] leading-relaxed text-black/90"
        }
        style={
          expanded
            ? undefined
            : {
                display: "-webkit-box",
                WebkitLineClamp: 5,
                WebkitBoxOrient: "vertical",
              }
        }
      >
        {review.description}
      </p>

      <div className="relative mt-6 flex items-center justify-between border-t border-black/10 pt-3">
        <div>
          <p className="font-serif text-xl leading-tight">{review.name}</p>
          <p className="text-[10px] uppercase tracking-[0.18em] text-muted">Klijent</p>
        </div>
        <div className="h-12 w-12 overflow-hidden rounded-full ring-1 ring-black/10">
          <Image src={review.avatar_url} alt={review.name} width={48} height={48} className="h-full w-full object-cover" />
        </div>
      </div>

      {needsExpand ? (
        <button
          className="relative mt-4 text-xs uppercase tracking-[0.14em] text-muted transition hover:text-black"
          type="button"
          onClick={() => setExpanded((value) => !value)}
        >
          {expanded ? "Sakrij" : "Procitaj vise"}
        </button>
      ) : null}
    </article>
  );
}
