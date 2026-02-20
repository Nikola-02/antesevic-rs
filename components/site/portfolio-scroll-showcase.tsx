"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const images = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=1200&q=80",
];

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
          <div className="h-full w-screen px-8 py-8 xl:px-10">
            <div className="mb-6 border-b border-black/10 pb-4">
              <p className="font-serif text-[clamp(2rem,3.1vw,3.2rem)] leading-none tracking-[0.01em] text-black/80">
                Moj portfolio
              </p>
            </div>

            <div className="grid h-[74vh] grid-cols-3 gap-3">
              <div className="self-start pt-4 pr-4 xl:pr-6">
                <p className="text-[11px] uppercase tracking-[0.24em] text-black/60">Editorial izbor</p>
                <h3 className="mt-4 font-serif text-[clamp(1.8rem,2.4vw,2.7rem)] leading-[0.95] text-black/85">
                  Pogledaj kolekcije
                  <br />i celu pricu.
                </h3>
                <p className="mt-5 max-w-[280px] text-[12px] uppercase tracking-[0.07em] leading-relaxed text-black/60 xl:max-w-[300px] xl:text-[13px]">
                  Dok skrolujes, smenjuju se kadrovi. Klikom ulazis u kompletan portfolio.
                </p>
                <Link href="/portfolio" className="mt-7 inline-block">
                  <Button variant="ghost">Otvori portfolio</Button>
                </Link>
              </div>
              <div className="relative overflow-hidden">
                <Image src={images[0]} alt="Portfolio kadar 1" fill className="object-cover" />
              </div>
              <div className="relative overflow-hidden">
                <Image src={images[1]} alt="Portfolio kadar 2" fill className="object-cover" />
              </div>
            </div>
          </div>

          <div className="flex h-full w-screen items-center px-8 py-8 xl:px-10">
            <div className="grid h-[74vh] w-full grid-cols-3 gap-3">
              {[images[1], images[2], images[3]].map((src, i) => (
                <div key={src} className="relative overflow-hidden">
                  <Image src={src} alt={`Portfolio kadar ${i + 3}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div className="flex h-full w-screen items-center px-8 py-8 xl:px-10">
            <div className="grid h-[74vh] w-full grid-cols-3 gap-3">
              {[images[3], images[4], images[5]].map((src, i) => (
                <div key={src} className="relative overflow-hidden">
                  <Image src={src} alt={`Portfolio kadar ${i + 5}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
