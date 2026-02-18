import Image from "next/image";
import { ContactForm } from "@/components/site/contact-form";

export default function AboutPage() {
  return (
    <>
      <section className="section-spacing">
        <div className="mx-auto grid w-full max-w-8xl gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="relative min-h-[520px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80"
              alt="Portret fotografa"
              fill
              className="object-cover grayscale"
            />
          </div>
          <div>
            <h1 className="font-serif text-5xl">O meni</h1>
            <p className="mt-5 max-w-xl text-muted">
              Fokus mi je premium editorial fotografija koja spaja atmosferu i preciznost. Ceo
              proces rada je miran, saradnja je jasna, a rezultat je bezvremenski.
            </p>
          </div>
        </div>
      </section>
      <section className="section-spacing bg-surface">
        <div className="mx-auto w-full max-w-3xl">
          <h2 className="mb-8 font-serif text-4xl">Kontakt</h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
