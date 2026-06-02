"use client";

import Image from "next/image";
import { FadeIn } from "@/components/site/fade-in";
import { homeImages } from "@/lib/home-images";
import { cn } from "@/lib/utils";

const rowOne = homeImages.gallery.slice(0, 6);
const rowTwo = homeImages.gallery.slice(6);

const galleryObjectPosition: Record<string, string> = {
  "/images/home/wedding-soft-light-portrait.webp": "object-top",
  "/images/home/wedding-joyful-celebration.webp": "object-[center_18%]",
  "/images/home/wedding-outdoor-wide-shot.webp": "object-[center_22%]",
};

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
              alt={`Kvalitet kadar ${(index % images.length) + 1}`}
              fill
              className={cn(
                "object-cover transition-transform duration-500 group-hover/item:scale-110",
                galleryObjectPosition[src] ?? "object-center",
              )}
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
        <FadeIn direction="left" distance={46} blur={12} duration={0.85}>
          <h3 className="font-serif text-[clamp(2rem,5vw,4.6rem)] leading-[0.92] text-white/90">
            Kvalitet se vidi
            <br />
            ne samo kroz vreme
            <br />
            vec i kroz detalje.
          </h3>
        </FadeIn>
        <FadeIn
          direction="right"
          delay={0.14}
          distance={34}
          blur={10}
          duration={0.78}
          className="max-w-sm justify-self-start self-end text-sm uppercase tracking-[0.08em] text-white/70 md:justify-self-end"
        >
          <p>Svaki kadar nosi meru, emociju i jasan vizuelni identitet.</p>
        </FadeIn>
      </div>

      <div className="space-y-3">
        <Row images={rowOne} />
        <Row images={rowTwo} reverse />
      </div>
    </section>
  );
}
