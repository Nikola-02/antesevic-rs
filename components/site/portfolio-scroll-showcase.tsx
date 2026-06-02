"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "@/components/site/fade-in";
import { homeImages } from "@/lib/home-images";

const images = homeImages.showcase;

const showcaseAlt = [
  "Venchanje u zlatnom svecu",
  "Romanticni portret para u zalasku sunca",
  "Editorial fashion kadar sa venchanja",
  "Elegantan trenutak sa proslave",
  "Crno-beli portret para",
  "Detaljni portret mlade",
  "Klasican portret mladozenje",
  "Emotivno zagrljaj para",
];

function ShowcaseImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative min-h-0 min-w-0 flex-1 overflow-hidden">
      <Image src={src} alt={alt} fill className="object-cover" sizes="33vw" />
    </div>
  );
}

export function PortfolioScrollShowcase() {
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
            <div className="mb-6 border-b border-black/10 pb-4">
              <p className="font-serif text-[clamp(2rem,3.1vw,3.2rem)] leading-none tracking-[0.01em] text-black/80">
                Izabrani kadrovi
              </p>
            </div>

            <div className="flex h-[74vh] gap-3">
              <div className="w-[min(100%,320px)] shrink-0 self-start pt-4 xl:w-[340px]">
                <FadeIn direction="left" distance={20} blur={6} duration={0.55}>
                  <p className="text-[11px] uppercase tracking-[0.24em] text-black/60">Editorial izbor</p>
                </FadeIn>
                <FadeIn direction="right" delay={0.08} distance={24} blur={8} duration={0.62}>
                  <h3 className="mt-4 font-serif text-[clamp(1.8rem,2.4vw,2.7rem)] leading-[0.95] text-black/85">
                    Trenuci koji
                    <br />
                    ostaju u secanju.
                  </h3>
                </FadeIn>
                <FadeIn direction="left" delay={0.14} distance={20} blur={6} duration={0.6}>
                  <p className="mt-5 max-w-[280px] text-[12px] uppercase tracking-[0.07em] leading-relaxed text-black/60 xl:max-w-[300px] xl:text-[13px]">
                    Dok skrolujes, smenjuju se kadrovi koji najbolje pokazuju emociju, stil i atmosferu svakog dana.
                  </p>
                </FadeIn>
              </div>
              <ShowcaseImage src={images[0]} alt={showcaseAlt[0]} />
              <ShowcaseImage src={images[1]} alt={showcaseAlt[1]} />
            </div>
          </div>

          <div className="flex h-full w-screen shrink-0 items-center px-8 py-8 xl:px-10">
            <div className="flex h-[74vh] w-full gap-3">
              {[images[2], images[3], images[4]].map((src, i) => (
                <ShowcaseImage key={src} src={src} alt={showcaseAlt[i + 2]} />
              ))}
            </div>
          </div>

          <div className="flex h-full w-screen shrink-0 items-center px-8 py-8 xl:px-10">
            <div className="flex h-[74vh] w-full gap-3">
              {[images[5], images[6], images[7]].map((src, i) => (
                <ShowcaseImage key={src} src={src} alt={showcaseAlt[i + 5]} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
