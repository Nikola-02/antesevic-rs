"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "/", label: "Pocetna" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/video", label: "Video galerija" },
  { href: "/reviews", label: "Recenzije" },
  { href: "/about", label: "O meni" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-8xl items-center justify-between gap-3 px-4 py-4 sm:px-6 md:px-10">
        <Link href="/" className="font-serif text-xl tracking-wide sm:text-2xl">
          Antesevic
        </Link>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center border border-border text-black transition-colors hover:bg-surface lg:hidden"
          aria-label={isOpen ? "Zatvori meni" : "Otvori meni"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          <motion.span
            key={isOpen ? "close" : "open"}
            initial={{ rotate: -50, opacity: 0, scale: 0.85 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 50, opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="inline-flex"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </motion.span>
        </button>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.12em] text-muted transition hover:text-black"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.nav
            className="border-t border-border bg-white/95 px-4 py-4 backdrop-blur-sm sm:px-6 lg:hidden"
            initial={{ opacity: 0, y: -10, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
            transition={{ duration: 0.26, ease: "easeOut" }}
          >
            <div className="mx-auto flex w-full max-w-8xl flex-col gap-2">
              {links.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2, delay: index * 0.04 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block border border-transparent px-2 py-3 text-sm uppercase tracking-[0.12em] text-muted transition hover:border-border hover:text-black"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
