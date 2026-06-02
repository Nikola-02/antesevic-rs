"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { LanguageSwitcher } from "@/components/site/language-switcher";
import { useLocale } from "@/lib/i18n/locale-context";
import { visibleNavLinks as links } from "@/lib/nav-links";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLocale();

  const getLabel = (key: (typeof links)[number]["key"]) => {
    if (key === "home") return t.nav.home;
    if (key === "about") return t.nav.about;
    return key;
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-8xl items-center justify-between gap-3 px-4 py-4 sm:px-6 md:px-10">
        <Link href="/" className="font-serif text-xl tracking-wide sm:text-2xl">
          Antesevic
        </Link>

        <div className="flex items-center gap-3 lg:gap-5">
          <LanguageSwitcher className="hidden lg:inline-flex" />

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-border text-black transition-colors hover:bg-surface lg:hidden"
            aria-label={isOpen ? t.nav.closeMenu : t.nav.openMenu}
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
                {getLabel(link.key)}
              </Link>
            ))}
          </nav>
        </div>
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
            <div className="mx-auto flex w-full max-w-8xl flex-col gap-4">
              <LanguageSwitcher className="self-start" />
              <div className="flex flex-col gap-2">
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
                      {getLabel(link.key)}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
