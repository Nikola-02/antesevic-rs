"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { LocalImage } from "@/components/site/local-image";
import { useLocale } from "@/lib/i18n/locale-context";
import { homeImages } from "@/lib/home-images";

const images = homeImages.showcase;

function ShowcaseImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative min-h-0 min-w-0 flex-1 overflow-hidden">
      <LocalImage
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(min-width: 1280px) 40vw, 70vw"
      />
    </div>
  );
}

export function PortfolioScrollShowcase() {
  const { t } = useLocale();
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.6667%"]);

  return (
    <section ref={sectionRef} className="relative hidden h-[230vh] bg-[#f2f2f0] lg:block">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div style={{ x }} className="flex h-full w-[300vw]">
          <div className="flex h-full w-screen shrink-0 flex-col px-8 py-8 xl:px-10">
            <div className="flex h-[74vh] gap-3">
              <ShowcaseImage src={images[0]} alt={t.home.showcaseAlts[0]} />
              <ShowcaseImage src={images[1]} alt={t.home.showcaseAlts[1]} />
              <ShowcaseImage src={images[2]} alt={t.home.showcaseAlts[2]} />
            </div>
          </div>

          <div className="flex h-full w-screen shrink-0 items-center px-8 py-8 xl:px-10">
            <div className="flex h-[74vh] w-full gap-3">
              {[images[3], images[4], images[5]].map((src, i) => (
                <ShowcaseImage key={src} src={src} alt={t.home.showcaseAlts[i + 3]} />
              ))}
            </div>
          </div>

          <div className="flex h-full w-screen shrink-0 items-center px-8 py-8 xl:px-10">
            <div className="flex h-[74vh] w-full gap-3">
              {[images[6], images[7]].map((src, i) => (
                <ShowcaseImage key={src} src={src} alt={t.home.showcaseAlts[i + 6]} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
