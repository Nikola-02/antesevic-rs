"use client";

import { LocaleProvider } from "@/lib/i18n/locale-context";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { JsonLd } from "@/components/site/json-ld";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider>
      <div className="min-h-screen bg-white text-foreground">
        <JsonLd />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </LocaleProvider>
  );
}
