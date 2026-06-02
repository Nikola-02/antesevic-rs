import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/site/contact-form";
import { aboutImages } from "@/lib/about-images";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "O meni",
  description:
    "Filip Antesevic — wedding fotograf iz Srbije. Dokumentarni pristup sa editorial estetikom, za parove koji cene prirodnost, emociju i jednostavnost.",
  path: "/about",
  keywords: ["o meni", "Filip Antesevic", "wedding fotograf Srbija", "wedding fotograf Evropa"],
});

export default function AboutPage() {
  return (
    <div className="bg-[#efefed]">
      <section className="px-4 pt-12 sm:px-6 md:px-10 md:pt-16">
        <div className="mx-auto grid w-full max-w-8xl gap-6 lg:grid-cols-[1fr_1.05fr]">
          <div className="relative min-h-[420px] overflow-hidden sm:min-h-[520px] md:min-h-[640px]">
            <Image
              src={aboutImages.hero}
              alt="Editorial wedding portret — Antesevic"
              fill
              priority
              className="object-cover object-[center_17%] grayscale"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-end px-1 pb-2 sm:px-0 lg:pb-8">
            <p className="text-xs uppercase tracking-[0.22em] text-black/60">About me</p>
            <h1 className="mt-4 font-serif text-[clamp(2.3rem,6vw,5.2rem)] leading-[0.92] text-black/85">
              Hi, I&apos;m Filip.
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-black/65 sm:text-base">
              Weddings are my greatest passion in this work.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-black/65 sm:text-base">
              I approach every wedding with the same sense of presence, as if it were part of my
              own story — with care, calmness, and a focus on what is truly unfolding in the
              moment.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 md:px-10 md:py-20">
        <div className="mx-auto grid w-full max-w-8xl gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div className="max-w-xl md:max-w-none">
            <p className="text-sm leading-relaxed text-black/65 sm:text-base">
              My approach blends documentary storytelling with an editorial aesthetic, aiming to
              create images that are honest, elegant, and timeless.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-black/65 sm:text-base">
              I work with couples who value naturalness, emotion, and simplicity, and who believe
              that the most beautiful moments do not need to be staged to be perfect.
            </p>
            <p className="mt-8 text-[11px] uppercase tracking-[0.14em] text-black/70 sm:text-xs">
              Based in Serbia, available for weddings throughout Europe.
            </p>
          </div>
          <div className="relative h-[360px] overflow-hidden sm:h-[480px] md:h-[560px]">
            <Image
              src={aboutImages.accent}
              alt="Emotivan trenutak para na venchanju"
              fill
              className="object-cover object-[center_40%]"
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </div>
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-6 md:px-10 md:pb-20">
        <div className="mx-auto grid w-full max-w-8xl gap-5 md:grid-cols-3">
          <div className="relative h-[280px] overflow-hidden sm:h-[360px] md:h-[420px]">
            <Image
              src={aboutImages.gallery[0]}
              alt="Dokumentarni trenutak sa venchanja"
              fill
              className="object-cover object-[center_46%]"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative h-[320px] overflow-hidden sm:h-[440px] md:h-[520px]">
            <Image
              src={aboutImages.gallery[1]}
              alt="Crno-beli portret para"
              fill
              className="object-cover grayscale"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative h-[280px] overflow-hidden sm:h-[360px] md:h-[420px]">
            <Image
              src={aboutImages.gallery[2]}
              alt="Editorial wedding kadar"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-black px-4 py-16 text-white sm:px-6 md:px-10 md:py-20">
        <div className="mx-auto grid w-full max-w-8xl gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <h2 className="font-serif text-[clamp(2rem,5vw,4.4rem)] leading-[0.92] text-white/90">
            Honest,
            <br />
            elegant,
            <br />
            and timeless.
          </h2>
          <p className="max-w-md self-end text-sm leading-relaxed text-white/75 md:justify-self-end">
            Documentary storytelling with an editorial eye — for couples who trust what unfolds
            naturally in the moment.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-14 sm:px-6 md:px-10 md:py-20">
        <div className="absolute inset-0">
          <Image
            src={aboutImages.contactBackground}
            alt="Par na zalasku sunca — pozadina kontakt sekcije"
            fill
            className="object-cover object-[center_35%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative mx-auto w-full max-w-3xl bg-white/20 p-6 backdrop-blur-md sm:p-8 md:p-10">
          <h2 className="mb-2 font-serif text-4xl text-white">Kontakt</h2>
          <p className="mb-8 text-xs uppercase tracking-[0.1em] text-white/80">
            Recite mi nesto o vasem danu — odgovaram u najkracem roku.
          </p>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
