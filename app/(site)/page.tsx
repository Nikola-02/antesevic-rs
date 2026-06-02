import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/site/fade-in";
import { ContactForm } from "@/components/site/contact-form";
import { PortfolioScrollShowcase } from "@/components/site/portfolio-scroll-showcase";
import { QualityMovingRows } from "@/components/site/quality-moving-rows";
import { homeImages } from "@/lib/home-images";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export const metadata: Metadata = createPageMetadata({
  title: siteConfig.title,
  description: siteConfig.description,
  path: "/",
  keywords: ["wedding fotografija", "početna"],
});

const priorityAlt = [
  "Emotivan trenutak na venchanju",
  "Portret para na otvorenom",
  "Elegantan portret mlade i mladozenje",
  "Proslava i ples na venchanju",
  "Umetnicki detalj sa venchanja",
  "Intiman romantican trenutak para",
];

const priorityObjectPosition: Record<string, string> = {
  "/images/home/wedding-candid-emotional-moment.webp": "object-[center_46%]",
  "/images/home/wedding-outdoor-couple-portrait.webp": "object-[center_38%]",
  "/images/home/wedding-party-celebration.webp": "object-[center_18%]",
  "/images/home/wedding-artistic-detail-shot.webp": "object-[center_48%]",
};

export default function HomePage() {
  return (
    <div className="bg-[#efefed]">
      <section className="relative w-full overflow-hidden">
        <div className="relative aspect-[3/2] w-full min-h-[320px] max-h-[calc(100svh-68px)] sm:min-h-[400px] md:max-h-[calc(100svh-78px)]">
          <Image
            src={homeImages.hero}
            alt="Par na jahti — venchanje Antesevic"
            fill
            priority
            quality={100}
            unoptimized
            className="object-cover object-[center_32%]"
            sizes="100vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#efefed]/85 via-[#efefed]/35 to-transparent to-50%" />
          <div className="relative z-10 mx-auto flex h-full w-full max-w-8xl items-start justify-start px-4 pt-[72px] sm:px-6 sm:pt-[80px] md:px-10 md:pt-[88px] lg:pt-[96px]">
            <div className="max-w-[18rem] sm:max-w-xs md:max-w-md lg:max-w-lg">
              <FadeIn direction="left" distance={40} blur={16} duration={0.9}>
                <p className="mb-3 text-[10px] uppercase tracking-[0.28em] text-black/60 sm:text-xs">Latest collection</p>
              </FadeIn>
              <FadeIn direction="right" delay={0.08} distance={52} blur={16} duration={0.95}>
                <h1 className="font-serif text-[clamp(1.9rem,5.5vw,4rem)] leading-[0.96] text-black">
                  Bezvremenska
                  <br />
                  wedding estetika.
                </h1>
              </FadeIn>
              <FadeIn direction="left" delay={0.18} distance={42} blur={12} duration={0.85}>
                <p className="mt-4 max-w-sm text-[10px] uppercase tracking-[0.1em] text-black/70 sm:text-xs md:text-sm">
                  Elegantni kadrovi, moda, emocija i atmosfera u jednom vizuelnom jeziku.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pt-10 sm:px-6 md:px-10 md:pt-12">
        <div className="mx-auto grid w-full max-w-8xl gap-4 md:grid-cols-[0.9fr_1.15fr_0.8fr] md:items-center md:gap-6">
          <div className="flex justify-center md:order-1">
            <FadeIn direction="left" distance={50} blur={12} className="relative h-[300px] w-full overflow-hidden sm:h-[380px] md:h-[520px] lg:h-[560px]">
              <Image
                src={homeImages.triple.left}
                alt="Portret para — levi kadar"
                fill
                priority
                className="object-cover"
              />
            </FadeIn>
          </div>

          <div className="flex justify-center md:order-2">
            <FadeIn direction="up" delay={0.12} distance={56} blur={14} className="relative h-[420px] w-full overflow-hidden sm:h-[560px] md:h-[700px] lg:h-[760px]">
              <Image
                src={homeImages.triple.center}
                alt="Glavni editorial kadar para"
                fill
                priority
                className="object-cover"
              />
            </FadeIn>
          </div>

          <div className="flex justify-center md:order-3">
            <FadeIn direction="right" delay={0.2} distance={50} blur={12} className="relative h-[280px] w-full overflow-hidden sm:h-[360px] md:h-[500px] lg:h-[540px]">
              <Image
                src={homeImages.triple.right}
                alt="Portret para — desni kadar"
                fill
                priority
                className="object-cover"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 md:px-10 md:py-20">
        <div className="mx-auto grid w-full max-w-8xl gap-8 md:grid-cols-[1.2fr_0.9fr] md:items-end">
          <FadeIn direction="left" distance={46} blur={12} duration={0.86}>
            <h2 className="max-w-3xl font-serif text-[clamp(2rem,5vw,4.2rem)] leading-[0.95] text-black/85">
              Svaka proslava postaje iskustvo.
              <br />
              Jednostavno. Elegantno.
              <br />
              Nezaboravno.
            </h2>
          </FadeIn>
          <FadeIn direction="right" delay={0.14} distance={40} blur={10} className="max-w-sm justify-self-start md:justify-self-end">
            <p className="text-[11px] uppercase tracking-[0.14em] text-black/70 sm:text-xs">
              Prica o danu ispricana kroz stil, emociju i ciste kadrove koji traju.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-6 md:px-10 md:pb-20">
        <div className="mx-auto w-full max-w-8xl">
          <FadeIn direction="up" distance={32} blur={10}>
            <h3 className="mb-8 text-center text-[clamp(1.5rem,3.2vw,3rem)] uppercase tracking-[0.05em] text-black/85">
              Baci pogled
              <span className="font-serif normal-case italic"> na instagramu</span>
            </h3>
          </FadeIn>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {homeImages.priority.map((src, index) => (
              <FadeIn
                key={src}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index * 0.08}
                distance={34}
                blur={9}
                className={`relative overflow-hidden ${index % 3 === 1 ? "h-[260px] sm:h-[320px] lg:h-[360px]" : "h-[220px] sm:h-[260px] lg:h-[300px]"}`}
              >
                <Image
                  src={src}
                  alt={priorityAlt[index] ?? `Izabrani kadar ${index + 1}`}
                  fill
                  className={cn(
                    "object-cover transition duration-500 hover:scale-[1.03]",
                    priorityObjectPosition[src] ?? "object-center",
                  )}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <PortfolioScrollShowcase />

      <section className="block px-4 pb-14 lg:hidden">
        <FadeIn className="mx-auto w-full max-w-8xl" direction="up" distance={32} blur={10}>
          <p className="text-xs uppercase tracking-[0.2em] text-black/70">Izabrani kadrovi</p>
          <h3 className="mt-4 font-serif text-3xl leading-[0.95] text-black/85 sm:text-4xl">
            Trenuci koji ostaju u secanju.
          </h3>
          <p className="mt-4 max-w-xl text-[11px] uppercase tracking-[0.12em] text-black/65 sm:text-xs">
            Svaki dan donosi emociju, svetlo i pricu vrednu pamcenja.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {homeImages.showcase.slice(0, 4).map((src, i) => (
              <div key={src} className="relative h-56 overflow-hidden sm:h-72">
                <Image src={src} alt={`Izabrani kadar ${i + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      <QualityMovingRows />

      <section className="relative overflow-hidden px-4 py-14 sm:px-6 md:px-10 md:py-16">
        <div className="absolute inset-0">
          <Image
            src={homeImages.contactBackground}
            alt="Pozadina kontakt sekcije"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <FadeIn direction="up" distance={38} blur={12} className="relative mx-auto w-full max-w-3xl bg-white/20 p-5 backdrop-blur-md sm:p-7 md:p-10">
          <h3 className="text-center font-serif text-[clamp(1.8rem,4vw,3rem)] leading-[1.02] text-white">
            Kontaktiraj me za slobodne termine.
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-center text-xs uppercase tracking-[0.09em] text-white/85">
            Popuni formu i odgovor dobijas u najkracem roku.
          </p>
          <div className="mt-6 sm:mt-8">
            <ContactForm />
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
