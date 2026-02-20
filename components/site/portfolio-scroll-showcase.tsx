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

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"]);

  return (
    <section ref={sectionRef} className="relative hidden h-[260vh] bg-[#f2f2f0] md:block">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div style={{ x }} className="flex h-full w-[300vw]">
          <div className="grid h-full w-screen grid-cols-[0.38fr_0.62fr] items-center gap-8 px-10">
            <div className="max-w-md">
              <p className="text-xs uppercase tracking-[0.2em] text-black/70">Moj portfolio</p>
              <h3 className="mt-4 font-serif text-6xl leading-[0.92] text-black/85">
                Pogledaj kolekcije
                <br />
                i celu pricu.
              </h3>
              <p className="mt-5 text-sm uppercase tracking-[0.08em] text-black/65">
                Dok skrolujes, kadrovi se smenjuju. Klikom ulazis u pun portfolio.
              </p>
              <Link href="/portfolio" className="mt-8 inline-block">
                <Button variant="ghost">Otvori portfolio</Button>
              </Link>
            </div>
            <div className="grid h-[76vh] grid-cols-2 gap-4">
              <div className="relative mt-14 overflow-hidden">
                <Image src={images[0]} alt="Portfolio kadar 1" fill className="object-cover" />
              </div>
              <div className="relative mb-14 overflow-hidden">
                <Image src={images[1]} alt="Portfolio kadar 2" fill className="object-cover" />
              </div>
            </div>
          </div>

          <div className="grid h-full w-screen grid-cols-3 gap-4 p-10">
            {images.slice(2, 5).map((src, i) => (
              <div key={src} className={`relative overflow-hidden ${i === 0 ? "mt-16" : "mb-16"}`}>
                <Image src={src} alt={`Portfolio kadar ${i + 3}`} fill className="object-cover" />
              </div>
            ))}
          </div>

          <div className="grid h-full w-screen grid-cols-3 gap-4 p-10">
            {images.slice(3).map((src, i) => (
              <div key={src} className={`relative overflow-hidden ${i % 2 === 0 ? "mt-8" : "mb-8"}`}>
                <Image src={src} alt={`Portfolio kadar ${i + 4}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
