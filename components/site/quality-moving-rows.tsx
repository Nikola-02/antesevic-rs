"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const rowOne = [
  "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=1000&q=80",
];

const rowTwo = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1523263685509-57c1d050d19b?auto=format&fit=crop&w=1000&q=80",
];

function Row({ images, reverse = false }: { images: string[]; reverse?: boolean }) {
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex w-max gap-3"
        animate={{ x: reverse ? [0, -420] : [-420, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        {[...images, ...images].map((src, index) => (
          <div key={`${src}-${index}`} className="relative h-52 w-52 overflow-hidden sm:h-64 sm:w-64 md:h-72 md:w-72">
            <Image src={src} alt={`Kvalitet kadar ${index + 1}`} fill className="object-cover" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function QualityMovingRows() {
  return (
    <section className="bg-[#1e1e1f] px-4 py-14 text-white sm:px-6 md:px-10 md:py-20">
      <div className="mx-auto mb-10 grid w-full max-w-8xl gap-6 md:grid-cols-[1.2fr_0.8fr]">
        <h3 className="font-serif text-[clamp(2rem,5vw,4.6rem)] leading-[0.92] text-white/90">
          Kvalitet se vidi
          <br />
          ne samo kroz vreme
          <br />
          vec i kroz detalje.
        </h3>
        <p className="max-w-sm justify-self-start self-end text-sm uppercase tracking-[0.08em] text-white/70 md:justify-self-end">
          Svaki kadar nosi meru, emociju i jasan vizuelni identitet.
        </p>
      </div>

      <div className="space-y-3">
        <Row images={rowOne} />
        <Row images={rowTwo} reverse />
      </div>
    </section>
  );
}
