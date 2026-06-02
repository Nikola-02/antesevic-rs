"use client";

import Image from "next/image";
import { FadeIn } from "@/components/site/fade-in";
import { ContactForm } from "@/components/site/contact-form";
import { LocalImage } from "@/components/site/local-image";
import { ResponsiveCoverImage } from "@/components/site/responsive-cover-image";
import { PortfolioScrollShowcase } from "@/components/site/portfolio-scroll-showcase";
import { QualityMovingRows } from "@/components/site/quality-moving-rows";
import { useLocale } from "@/lib/i18n/locale-context";
import { homeImages } from "@/lib/home-images";
import { cn } from "@/lib/utils";

const priorityObjectPosition: Record<string, string> = {
  "/images/home/wedding-candid-emotional-moment.webp": "object-[center_46%]",
  "/images/home/wedding-outdoor-couple-portrait.webp": "object-[center_38%]",
  "/images/home/wedding-party-celebration.webp": "object-[center_18%]",
  "/images/home/wedding-artistic-detail-shot.webp": "object-[center_48%]",
};

export function HomePageContent() {
  const { t } = useLocale();

  return (
    <div className="overflow-x-clip bg-[#efefed]">
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full md:aspect-[3/2] md:min-h-[400px] md:max-h-[calc(100svh-78px)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={homeImages.hero}
            alt={t.home.heroAlt}
            className="block h-auto w-full md:hidden"
            loading="eager"
            decoding="async"
          />
          <Image
            src={homeImages.hero}
            alt={t.home.heroAlt}
            fill
            priority
            quality={100}
            unoptimized
            className="hidden object-cover object-[center_32%] md:block"
            sizes="100vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#efefed]/85 via-[#efefed]/35 to-transparent to-50%" />
          <div className="absolute inset-0 z-10 mx-auto flex w-full max-w-8xl items-start justify-start px-4 pt-[23px] sm:px-6 md:px-10 md:pt-[88px] lg:pt-[96px]">
            <div className="w-full max-w-[18rem] sm:max-w-xs md:max-w-md lg:max-w-lg">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#FF0000] sm:text-xs md:hidden">
                {t.home.heroEyebrow}
              </p>
              <h1 className="font-serif text-[clamp(1.9rem,5.5vw,4rem)] font-bold leading-[0.96] text-[#FF0000] md:hidden">
                {t.home.heroTitleLine1}
                {t.home.heroTitleLine2 ? (
                  <>
                    <br />
                    {t.home.heroTitleLine2}
                  </>
                ) : null}
              </h1>
              <p className="mt-4 max-w-sm text-sm font-bold leading-relaxed text-[#FF0000] sm:max-w-md md:hidden md:text-base">
                {t.home.heroSubtitle}
              </p>

              <div className="hidden md:block">
                <FadeIn direction="left" distance={40} blur={16} duration={0.9}>
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#FF0000] sm:text-xs">
                    {t.home.heroEyebrow}
                  </p>
                </FadeIn>
                <FadeIn direction="right" delay={0.08} distance={52} blur={16} duration={0.95}>
                  <h1 className="font-serif text-[clamp(1.9rem,5.5vw,4rem)] font-bold leading-[0.96] text-[#FF0000]">
                    {t.home.heroTitleLine1}
                    {t.home.heroTitleLine2 ? (
                      <>
                        <br />
                        {t.home.heroTitleLine2}
                      </>
                    ) : null}
                  </h1>
                </FadeIn>
                <FadeIn direction="left" delay={0.18} distance={42} blur={12} duration={0.85}>
                  <p className="mt-4 max-w-sm text-sm font-bold leading-relaxed text-[#FF0000] sm:max-w-md md:text-base">
                    {t.home.heroSubtitle}
                  </p>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pt-10 sm:px-6 md:px-10 md:pt-12">
        <div className="mx-auto grid w-full max-w-8xl gap-4 md:grid-cols-[0.9fr_1.15fr_0.8fr] md:items-center md:gap-6">
          <div className="flex justify-center md:order-1">
            <FadeIn direction="left" distance={50} blur={12} className="w-full">
              <ResponsiveCoverImage
                src={homeImages.triple.left}
                alt={t.home.tripleLeftAlt}
                priority
                sizes="(min-width: 768px) 33vw, 100vw"
                desktopContainerClassName="h-[520px] lg:h-[560px]"
              />
            </FadeIn>
          </div>

          <div className="flex justify-center md:order-2">
            <FadeIn direction="up" delay={0.12} distance={56} blur={14} className="w-full">
              <ResponsiveCoverImage
                src={homeImages.triple.center}
                alt={t.home.tripleCenterAlt}
                priority
                sizes="(min-width: 768px) 40vw, 100vw"
                desktopContainerClassName="h-[700px] lg:h-[760px]"
              />
            </FadeIn>
          </div>

          <div className="flex justify-center md:order-3">
            <FadeIn direction="right" delay={0.2} distance={50} blur={12} className="w-full">
              <ResponsiveCoverImage
                src={homeImages.triple.right}
                alt={t.home.tripleRightAlt}
                priority
                sizes="(min-width: 768px) 33vw, 100vw"
                desktopContainerClassName="h-[500px] lg:h-[540px]"
              />
            </FadeIn>
          </div>
        </div>
        <FadeIn direction="up" distance={24} blur={8} className="mx-auto mt-8 w-full max-w-8xl text-center md:mt-10">
          <p className="text-[11px] uppercase tracking-[0.18em] text-black/65 sm:text-xs">
            {t.home.locationLine}
          </p>
        </FadeIn>
      </section>

      <section className="px-4 py-14 sm:px-6 md:px-10 md:py-20">
        <div className="mx-auto grid w-full max-w-8xl gap-8 md:grid-cols-[1.2fr_0.9fr] md:items-end">
          <FadeIn direction="left" distance={46} blur={12} duration={0.86}>
            <h2 className="max-w-3xl font-serif text-[clamp(2rem,5vw,4.2rem)] leading-[0.95] text-black/85">
              {t.home.experienceTitle}
            </h2>
          </FadeIn>
          <FadeIn direction="right" delay={0.14} distance={40} blur={10} className="max-w-md justify-self-start md:justify-self-end">
            <p className="text-sm leading-relaxed text-black/70 sm:text-base">
              {t.home.experienceBody}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-6 md:px-10 md:pb-20">
        <div className="mx-auto w-full max-w-8xl">
          <FadeIn direction="up" distance={32} blur={10}>
            <h3 className="mb-8 text-center font-serif text-[clamp(1.5rem,3.2vw,3rem)] leading-[1.02] text-black/85">
              {t.home.storiesTitle}
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
                className="w-full"
              >
                <ResponsiveCoverImage
                  src={src}
                  alt={t.home.priorityAlts[index] ?? `${t.home.selectedFrame} ${index + 1}`}
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  desktopContainerClassName={cn(
                    index % 3 === 1 ? "md:h-[320px] lg:h-[360px]" : "md:h-[260px] lg:h-[300px]",
                  )}
                  desktopImageClassName={cn(
                    "transition duration-500 hover:scale-[1.03]",
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
          <div className="grid gap-3 sm:grid-cols-2">
            {homeImages.showcase.slice(0, 4).map((src, i) => (
              <div key={src} className="w-full overflow-hidden md:relative md:h-72">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`${t.home.selectedFrame} ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="block h-auto w-full max-md:rounded-none md:hidden"
                />
                <LocalImage
                  src={src}
                  alt={`${t.home.selectedFrame} ${i + 1}`}
                  fill
                  sizes="50vw"
                  className="hidden object-cover md:block"
                />
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      <QualityMovingRows />

      <section className="relative overflow-hidden px-4 py-14 sm:px-6 md:px-10 md:py-16">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={homeImages.contactBackground}
            alt={t.home.contactBgAlt}
            className="block h-full w-full object-contain object-center md:hidden"
            loading="lazy"
            decoding="async"
          />
          <LocalImage
            src={homeImages.contactBackground}
            alt={t.home.contactBgAlt}
            fill
            sizes="100vw"
            className="hidden object-cover md:block"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <FadeIn direction="up" distance={38} blur={12} className="relative mx-auto w-full max-w-3xl bg-white/20 p-5 backdrop-blur-md sm:p-7 md:p-10">
          <h3 className="text-center font-serif text-[clamp(1.8rem,4vw,3rem)] leading-[1.02] text-white">
            {t.home.contactTitle}
          </h3>
          <div className="mt-6 sm:mt-8">
            <ContactForm />
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
