import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { SITE_UNDER_CONSTRUCTION } from "@/lib/site-status";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Antesevic",
  description: "Elegantna fotografija i video galerija",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
        {SITE_UNDER_CONSTRUCTION ? (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white p-6 text-center">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.24em] text-black/70">Antesevic</p>
              <h1 className="mt-4 font-serif text-[clamp(2rem,5vw,4.2rem)] leading-[0.95] uppercase text-black">
                SAJT JE U IZRADI...
              </h1>
            </div>
          </div>
        ) : null}
      </body>
    </html>
  );
}
