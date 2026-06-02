"use client";

import { LocaleProvider } from "@/lib/i18n/locale-context";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { JsonLd } from "@/components/site/json-ld";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider>
      <div className="min-h-screen overflow-x-clip bg-white text-foreground">
        <JsonLd />
        <Navbar />
        <main className="overflow-x-clip">{children}</main>
        <Footer />
      </div>
    </LocaleProvider>
  );
}
