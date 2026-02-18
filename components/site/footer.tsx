import { Facebook, Instagram, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border px-4 py-9 sm:px-6 sm:py-10 md:px-10">
      <div className="mx-auto flex w-full max-w-8xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Antesevic</p>
          <p className="max-w-md text-sm text-muted">
            Elegantna fotografija i video produkcija sa fokusom na cistu estetiku i bezvremenski
            stil.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="rounded-full border border-border p-2.5 text-muted transition hover:-translate-y-0.5 hover:border-black hover:text-black"
          >
            <Instagram size={17} />
          </a>
          <a
            href="https://wa.me/381600000000"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="rounded-full border border-border p-2.5 text-muted transition hover:-translate-y-0.5 hover:border-black hover:text-black"
          >
            <MessageCircle size={17} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="rounded-full border border-border p-2.5 text-muted transition hover:-translate-y-0.5 hover:border-black hover:text-black"
          >
            <Facebook size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
