"use client";

import { FadeIn } from "@/components/site/fade-in";
import { LocalImage } from "@/components/site/local-image";
import { useLocale } from "@/lib/i18n/locale-context";
import { homeImages } from "@/lib/home-images";
import { cn } from "@/lib/utils";

const rowOne = homeImages.gallery.slice(0, 6);
const rowTwo = homeImages.gallery.slice(6);

const galleryObjectPosition: Record<string, string> = {
  "/images/home/wedding-soft-light-portrait.webp": "object-top",
  "/images/home/wedding-joyful-celebration.webp": "object-[center_18%]",
  "/images/home/wedding-outdoor-wide-shot.webp": "object-[center_22%]",
};

function Row({ images, reverse = false, altLabel }: { images: string[]; reverse?: boolean; altLabel: string }) {
  return (
    <div className="row-pause overflow-hidden">
      <div className={`marquee-track ${reverse ? "marquee-right" : "marquee-left"}`}>
        {[...images, ...images].map((src, index) => (
          <div
            key={`${src}-${index}`}
            className="group/item relative w-[55vw] shrink-0 max-md:h-auto md:h-[300px] md:w-[34vw] lg:h-[340px] lg:w-[24vw]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`${altLabel} ${(index % images.length) + 1}`}
              loading="lazy"
              decoding="async"
              className="block h-auto w-full transition-transform duration-500 max-md:group-hover/item:scale-105 md:hidden"
            />
            <div className="relative hidden h-full w-full md:block">
              <LocalImage
                src={src}
                alt={`${altLabel} ${(index % images.length) + 1}`}
                fill
                sizes="(min-width: 1024px) 24vw, 34vw"
                className={cn(
                  "object-cover transition-transform duration-500 group-hover/item:scale-110",
                  galleryObjectPosition[src] ?? "object-center",
                )}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function QualityMovingRows() {
  const { t } = useLocale();

  return (
    <section className="overflow-x-clip bg-[#1e1e1f] py-14 text-white md:py-20">
      <div className="mx-auto mb-10 w-full max-w-3xl px-4 sm:px-6 md:px-10">
        <FadeIn direction="up" distance={34} blur={10} duration={0.85}>
          <p className="text-sm leading-relaxed text-white/80 sm:text-base md:text-lg">
            {t.home.approachBody}
          </p>
        </FadeIn>
      </div>

      <div className="space-y-3">
        <Row images={rowOne} altLabel={t.home.qualityAlt} />
        <Row images={rowTwo} reverse altLabel={t.home.qualityAlt} />
      </div>
    </section>
  );
}
