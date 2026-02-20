import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

function WhatsappIcon({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" fill="currentColor">
      <path d="M12.04 2C6.53 2 2.06 6.47 2.06 11.98c0 1.77.46 3.5 1.35 5.03L2 22l5.14-1.34c1.47.8 3.12 1.22 4.9 1.22h.01c5.5 0 9.97-4.47 9.97-9.98S17.55 2 12.04 2Zm5.82 14.13c-.24.69-1.4 1.32-1.93 1.39-.49.07-1.1.1-1.78-.12-.41-.13-.94-.3-1.63-.59-2.86-1.23-4.72-4.1-4.86-4.29-.13-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.09.99-2.37.26-.29.56-.36.75-.36h.54c.17 0 .39-.07.61.46.24.58.82 2 .89 2.15.07.15.11.33.02.52-.09.19-.13.31-.26.48-.13.17-.28.37-.4.5-.13.13-.26.28-.11.55.15.27.66 1.08 1.42 1.74.98.87 1.81 1.14 2.07 1.27.26.13.41.11.56-.07.15-.18.65-.75.82-1.01.17-.26.35-.22.59-.13.24.09 1.52.72 1.78.85.26.13.43.19.5.3.06.11.06.64-.18 1.33Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#e8e8e6] px-4 py-10 sm:px-6 sm:py-12 md:px-10 md:py-14">
      <div className="mx-auto grid w-full max-w-8xl gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-8">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-black/70">Email adresa:</p>
          <a href="mailto:antesevicweddings@gmail.com" className="mt-2 inline-block font-serif text-[clamp(1.8rem,4.2vw,3.2rem)] leading-[1.02] text-black/85">
            antesevicweddings@gmail.com
          </a>
          <p className="mt-4 max-w-md text-sm uppercase tracking-[0.05em] text-black/70">
            Odgovor na upit najcesce stize za manje od 3 sata.
          </p>
          <p className="mt-10 font-serif text-xl italic text-black/70">Srbija, Evropa i svet</p>
        </div>

        <div className="ml-auto w-fit justify-self-end">
          <div className="grid justify-items-end gap-4 text-right text-xs uppercase tracking-[0.14em] text-black/80">
            <Link href="/">Pocetna</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/video">Video galerija</Link>
            <Link href="/reviews">Recenzije</Link>
            <Link href="/about">O meni</Link>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex w-full max-w-8xl items-center justify-between border-t border-black/10 pt-6">
        <p className="text-sm uppercase tracking-[0.35em] text-black/80">Antesevic</p>
        <div className="flex items-center gap-2">
          <a
            href="https://www.instagram.com/antesevic_raw/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="rounded-full border border-black/20 p-2 text-black/70 transition hover:border-black hover:text-black"
          >
            <Instagram size={16} />
          </a>
          <a
            href="https://wa.me/381641364897"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="rounded-full border border-black/20 p-2 text-black/70 transition hover:border-black hover:text-black"
          >
            <WhatsappIcon size={16} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="rounded-full border border-black/20 p-2 text-black/70 transition hover:border-black hover:text-black"
          >
            <Facebook size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
