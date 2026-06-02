"use client";

import { ContactForm } from "@/components/site/contact-form";
import { LocalImage } from "@/components/site/local-image";
import { useLocale } from "@/lib/i18n/locale-context";
import { aboutImages } from "@/lib/about-images";

export function AboutPageContent() {
  const { t } = useLocale();

  return (
    <div className="bg-[#efefed]">
      <section className="px-4 pt-12 sm:px-6 md:px-10 md:pt-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-8 md:flex-row md:items-center md:justify-center md:gap-10 lg:gap-12">
          <div className="w-full max-w-[min(100%,380px)] shrink-0">
            <LocalImage
              src={aboutImages.author}
              alt={t.about.heroAlt}
              width={aboutImages.authorWidth}
              height={aboutImages.authorHeight}
              priority
              sizes="(min-width: 768px) 380px, 100vw"
              className="mx-auto h-auto w-full"
            />
          </div>
          <div className="flex max-w-md flex-col justify-center text-center md:max-w-lg md:text-left">
            <p className="text-xs uppercase tracking-[0.22em] text-black/60">{t.about.label}</p>
            <h1 className="mt-4 font-serif text-[clamp(2.3rem,6vw,5.2rem)] leading-[0.92] text-black/85">
              {t.about.title}
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-black/65 sm:text-base">{t.about.intro1}</p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-black/65 sm:text-base">{t.about.intro2}</p>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 md:px-10 md:py-20">
        <div className="mx-auto w-full max-w-3xl">
          <p className="text-sm leading-relaxed text-black/65 sm:text-base">{t.about.approach1}</p>
          <p className="mt-5 text-sm leading-relaxed text-black/65 sm:text-base">{t.about.approach2}</p>
          <p className="mt-8 text-[11px] uppercase tracking-[0.14em] text-black/70 sm:text-xs">{t.about.location}</p>
        </div>
      </section>

      <section className="bg-black px-4 py-16 text-white sm:px-6 md:px-10 md:py-20">
        <div className="mx-auto grid w-full max-w-8xl gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <h2 className="font-serif text-[clamp(2rem,5vw,4.4rem)] leading-[0.92] text-white/90">
            {t.about.statementTitle1}
            <br />
            {t.about.statementTitle2}
            <br />
            {t.about.statementTitle3}
          </h2>
          <p className="max-w-md self-end text-sm leading-relaxed text-white/75 md:justify-self-end">
            {t.about.statementBody}
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-14 sm:px-6 md:px-10 md:py-20">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={aboutImages.contactBackground}
            alt={t.about.contactBgAlt}
            className="block h-full w-full object-contain object-center md:hidden"
            loading="lazy"
            decoding="async"
          />
          <LocalImage
            src={aboutImages.contactBackground}
            alt={t.about.contactBgAlt}
            fill
            sizes="100vw"
            className="hidden object-cover object-[center_35%] md:block"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative mx-auto w-full max-w-3xl bg-white/20 p-6 backdrop-blur-md sm:p-8 md:p-10">
          <h2 className="mb-2 font-serif text-4xl text-white">{t.about.contactTitle}</h2>
          <p className="mb-8 text-xs uppercase tracking-[0.1em] text-white/80">{t.about.contactSubtitle}</p>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
