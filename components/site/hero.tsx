"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative h-[90vh] overflow-hidden">
      <motion.div
        initial={{ scale: 1.02 }}
        animate={{ scale: 1.08 }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1900&q=80"
          alt="Naslovna fotografija"
          fill
          priority
          className="object-cover grayscale"
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/20" />
      <div className="section-spacing relative z-10 flex h-full items-end">
        <div className="max-w-2xl text-white">
          <h1 className="font-serif text-[clamp(2rem,9vw,4.75rem)] leading-[1.05]">
            Elegantni kadrovi. Bezvremenski tonovi.
          </h1>
          <p className="mt-4 max-w-lg text-sm md:text-base">
            Minimalna vizuelna prica u crno-beloj estetici i prirodnom kontrastu.
          </p>
          <Link href="/portfolio" className="mt-8 inline-block">
            <Button variant="inverse">Pogledaj portfolio</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
