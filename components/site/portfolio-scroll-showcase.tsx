"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { LocalImage } from "@/components/site/local-image";
import { useLocale } from "@/lib/i18n/locale-context";
import { homeImages } from "@/lib/home-images";

const images = homeImages.showcase;
const PANEL_COUNT = 3;
const SECTION_HEIGHT_VH = 100 + (PANEL_COUNT - 1) * 140;
/** Matches sticky navbar height — keeps images fully visible below it */
const NAV_OFFSET_PX = 78;
/** Pin horizontal scroll slightly before the section reaches the nav */
const SCROLL_PIN_START_PX = NAV_OFFSET_PX + 16;

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
    offset: [`start ${SCROLL_PIN_START_PX}px`, "end start"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 0.32, 0.64, 0.82, 1],
    ["0%", "-33.3333%", "-66.6667%", "-66.6667%", "-66.6667%"],
  );

  return (
    <section
      ref={sectionRef}
      className="relative hidden bg-[#f2f2f0] lg:block"
      style={{ height: `${SECTION_HEIGHT_VH}vh` }}
    >
      <div
        className="sticky overflow-hidden"
        style={{
          top: `${NAV_OFFSET_PX}px`,
          height: `calc(100svh - ${NAV_OFFSET_PX}px)`,
        }}
      >
        <motion.div style={{ x }} className="flex h-full w-[300vw]">
          <div className="flex h-full w-screen shrink-0 flex-col px-8 py-6 xl:px-10">
            <div className="flex min-h-0 flex-1 gap-3">
              <ShowcaseImage src={images[0]} alt={t.home.showcaseAlts[0]} />
              <ShowcaseImage src={images[1]} alt={t.home.showcaseAlts[1]} />
              <ShowcaseImage src={images[2]} alt={t.home.showcaseAlts[2]} />
            </div>
          </div>

          <div className="flex h-full w-screen shrink-0 flex-col px-8 py-6 xl:px-10">
            <div className="flex min-h-0 flex-1 gap-3">
              {[images[3], images[4], images[5]].map((src, i) => (
                <ShowcaseImage key={src} src={src} alt={t.home.showcaseAlts[i + 3]} />
              ))}
            </div>
          </div>

          <div className="flex h-full w-screen shrink-0 flex-col px-8 py-6 xl:px-10">
            <div className="flex min-h-0 flex-1 gap-3">
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
