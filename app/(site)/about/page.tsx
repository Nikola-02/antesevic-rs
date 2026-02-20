import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/site/contact-form";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="bg-[#efefed]">
      <section className="px-4 pt-12 sm:px-6 md:px-10 md:pt-16">
        <div className="mx-auto grid w-full max-w-8xl gap-6 lg:grid-cols-[1fr_1.05fr]">
          <div className="relative min-h-[420px] overflow-hidden sm:min-h-[520px] md:min-h-[640px]">
            <Image
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1500&q=80"
              alt="Portret fotografa"
              fill
              priority
              className="object-cover grayscale"
            />
          </div>
          <div className="flex flex-col justify-end px-1 pb-2 sm:px-0 lg:pb-8">
            <p className="text-xs uppercase tracking-[0.22em] text-black/60">Antesevic Weddings</p>
            <h1 className="mt-4 font-serif text-[clamp(2.3rem,6vw,5.2rem)] leading-[0.92] text-black/85">
              O meni
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-black/65 sm:text-base">
              Fokus mi je premium editorial fotografija koja spaja atmosferu, stil i preciznost.
              Kroz miran proces rada i jasnu komunikaciju, gradimo fotografije koje ostaju
              bezvremenske.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/portfolio">
                <Button variant="ghost">Pogledaj portfolio</Button>
              </Link>
              <Link href="/reviews">
                <Button>Iskustva klijenata</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 md:px-10 md:py-20">
        <div className="mx-auto grid w-full max-w-8xl gap-5 md:grid-cols-3">
          <div className="relative h-[280px] overflow-hidden sm:h-[360px] md:h-[420px]">
            <Image
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1100&q=80"
              alt="Behind the scenes 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-[320px] overflow-hidden sm:h-[440px] md:h-[520px]">
            <Image
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80"
              alt="Behind the scenes 2"
              fill
              className="object-cover grayscale"
            />
          </div>
          <div className="relative h-[280px] overflow-hidden sm:h-[360px] md:h-[420px]">
            <Image
              src="https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=1100&q=80"
              alt="Behind the scenes 3"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-black px-4 py-16 text-white sm:px-6 md:px-10 md:py-20">
        <div className="mx-auto grid w-full max-w-8xl gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <h2 className="font-serif text-[clamp(2rem,5vw,4.4rem)] leading-[0.92] text-white/90">
            Fotografija je
            <br />
            vise od trenutka.
            <br />
            To je atmosfera.
          </h2>
          <p className="max-w-md self-end text-sm uppercase tracking-[0.08em] text-white/75 md:justify-self-end">
            Svaki kadar gradim kao editorial pricu — sa merom, emocijom i estetikom koja traje.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-14 sm:px-6 md:px-10 md:py-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1800&q=80"
            alt="Kontakt pozadina"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative mx-auto w-full max-w-3xl bg-white/20 p-6 backdrop-blur-md sm:p-8 md:p-10">
          <h2 className="mb-8 font-serif text-4xl text-white">Kontakt</h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
