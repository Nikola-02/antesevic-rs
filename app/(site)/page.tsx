import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/site/fade-in";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/site/contact-form";
import { PortfolioScrollShowcase } from "@/components/site/portfolio-scroll-showcase";
import { QualityMovingRows } from "@/components/site/quality-moving-rows";

export default function HomePage() {
  return (
    <div className="bg-[#efefed]">
      <section className="relative h-[calc(100svh-68px)] min-h-[520px] overflow-hidden md:h-[calc(100svh-78px)]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 mx-auto flex h-full w-full max-w-8xl items-end px-4 pb-10 sm:px-6 sm:pb-12 md:px-10 md:pb-20">
          <div className="max-w-2xl text-white">
            <FadeIn direction="left" distance={40} blur={16} duration={0.9}>
              <p className="mb-3 text-xs uppercase tracking-[0.24em] text-white/80">Latest collection</p>
            </FadeIn>
            <FadeIn direction="right" delay={0.08} distance={52} blur={16} duration={0.95}>
              <h1 className="font-serif text-[clamp(2.2rem,8vw,5rem)] leading-[0.95]">
                Bezvremenska
                <br />
                wedding estetika.
              </h1>
            </FadeIn>
            <FadeIn direction="left" delay={0.18} distance={42} blur={12} duration={0.85}>
              <p className="mt-4 max-w-xl text-xs uppercase tracking-[0.07em] text-white/85 sm:text-sm md:text-base">
                Elegantni kadrovi, moda, emocija i atmosfera u jednom vizuelnom jeziku.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="px-4 pt-10 sm:px-6 md:px-10 md:pt-12">
        <div className="mx-auto grid w-full max-w-8xl gap-4 md:grid-cols-[0.9fr_1.15fr_0.8fr] md:items-center md:gap-6">
          <div className="flex justify-center">
            <FadeIn direction="left" distance={50} blur={12} className="relative h-[300px] w-full overflow-hidden sm:h-[380px] md:h-[520px] lg:h-[560px]">
              <Image
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1100&q=80"
                alt="Vencanje u vrtu"
                fill
                priority
                className="object-cover"
              />
            </FadeIn>
          </div>

          <div className="flex justify-center">
            <FadeIn direction="up" delay={0.12} distance={56} blur={14} className="relative h-[420px] w-full overflow-hidden sm:h-[560px] md:h-[700px] lg:h-[760px]">
              <Image
                src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1300&q=80"
                alt="Portret mlade"
                fill
                priority
                className="object-cover grayscale"
              />
            </FadeIn>
          </div>

          <div className="flex justify-center">
            <FadeIn direction="right" delay={0.2} distance={50} blur={12} className="relative h-[280px] w-full overflow-hidden sm:h-[360px] md:h-[500px] lg:h-[540px]">
              <Image
                src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1000&q=80"
                alt="Par u prirodi"
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
            <Link href="/portfolio" className="mt-6 inline-block">
              <Button variant="ghost">Pogledaj portfolio</Button>
            </Link>
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

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1000&q=80",
              "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80",
              "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=1000&q=80",
              "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=1000&q=80",
            ].map((src, index) => (
              <FadeIn
                key={src}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index * 0.08}
                distance={34}
                blur={9}
                className={`relative overflow-hidden ${index % 2 === 0 ? "h-[220px] sm:h-[260px]" : "h-[260px] sm:h-[320px]"}`}
              >
                <Image
                  src={src}
                  alt={`Instagram kadar ${index + 1}`}
                  fill
                  className="object-cover transition duration-500 hover:scale-[1.03]"
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <PortfolioScrollShowcase />

      <section className="block px-4 pb-14 lg:hidden">
        <FadeIn className="mx-auto w-full max-w-8xl" direction="up" distance={32} blur={10}>
          <p className="text-xs uppercase tracking-[0.2em] text-black/70">Moj portfolio</p>
          <h3 className="mt-4 font-serif text-3xl leading-[0.95] text-black/85 sm:text-4xl">Pogledaj kolekcije i celu pricu.</h3>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
              "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
              "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80",
              "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
            ].map((src, i) => (
              <div key={src} className="relative h-56 overflow-hidden sm:h-72">
                <Image src={src} alt={`Portfolio mobilni kadar ${i + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
          <Link href="/portfolio" className="mt-6 inline-block">
            <Button variant="ghost">Otvori portfolio</Button>
          </Link>
        </FadeIn>
      </section>

      <QualityMovingRows />

      <section className="relative overflow-hidden px-4 py-14 sm:px-6 md:px-10 md:py-16">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1800&q=80"
            alt="Kontakt pozadina"
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
