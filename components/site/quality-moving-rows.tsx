"use client";

import Image from "next/image";

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
    <div className="row-pause overflow-hidden">
      <div className={`marquee-track ${reverse ? "marquee-right" : "marquee-left"}`}>
        {[...images, ...images].map((src, index) => (
          <div
            key={`${src}-${index}`}
            className="group/item relative h-[200px] w-[70vw] overflow-hidden sm:h-[250px] sm:w-[48vw] md:h-[300px] md:w-[34vw] lg:h-[340px] lg:w-[24vw]"
          >
            <Image
              src={src}
              alt={`Kvalitet kadar ${index + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover/item:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function QualityMovingRows() {
  return (
    <section className="bg-[#1e1e1f] py-14 text-white md:py-20">
      <div className="mx-auto mb-10 grid w-full max-w-8xl gap-6 px-4 sm:px-6 md:grid-cols-[1.2fr_0.8fr] md:px-10">
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
