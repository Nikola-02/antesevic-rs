import Link from "next/link";
import { FadeIn } from "@/components/site/fade-in";
import { BeforeAfterSlider } from "@/components/site/before-after-slider";
import { ContactForm } from "@/components/site/contact-form";
import { HeroSection } from "@/components/site/hero";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="section-spacing">
        <FadeIn className="mx-auto grid w-full max-w-8xl gap-8">
          <BeforeAfterSlider
            beforeImage="https://images.unsplash.com/photo-1464863979621-258859e62245?auto=format&fit=crop&w=1600&q=80"
            afterImage="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80"
          />
          <div className="max-w-2xl">
            <p className="text-muted">
              Svaki kadar je pazljivo doradjen uz suptilno balansiranje tonova i ocuvanu teksturu.
            </p>
            <Link href="/portfolio" className="mt-4 inline-block">
              <Button variant="ghost">Pogledaj proces</Button>
            </Link>
          </div>
        </FadeIn>
      </section>

      <section className="section-spacing section-dark">
        <FadeIn className="mx-auto grid w-full max-w-8xl gap-6 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-4xl">O meni</h2>
            <p className="mt-4 max-w-xl text-white/80">
              Antesevic stvara prefinjenu fotografiju sa editorial pristupom, fokusom na emociju i
              cistu estetiku.
            </p>
          </div>
          <div className="md:justify-self-end">
            <Link href="/about">
              <Button variant="inverse">Saznaj vise</Button>
            </Link>
          </div>
        </FadeIn>
      </section>

      <section className="section-spacing">
        <FadeIn className="mx-auto grid w-full max-w-8xl gap-10 md:grid-cols-4">
          {["Prirodno svetlo", "Editorial pravac", "Disciplina boja", "Fokus na klijenta"].map(
            (item) => (
              <div key={item} className="border-t border-border pt-4">
                <h3 className="font-serif text-2xl">{item}</h3>
                <p className="mt-3 text-sm text-muted">
                  Precizna realizacija sa elegancijom i merom.
                </p>
              </div>
            ),
          )}
        </FadeIn>
      </section>

      <section className="section-spacing bg-surface">
        <FadeIn className="mx-auto w-full max-w-3xl">
          <h2 className="mb-8 font-serif text-4xl">Kontakt</h2>
          <ContactForm />
        </FadeIn>
      </section>
    </>
  );
}
