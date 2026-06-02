import type { Metadata } from "next";
import { AboutPageContent } from "@/components/site/about-page-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "O meni",
  description:
    "Filip Antešević — wedding fotograf i videograf iz Srbije. Dokumentarni pristup sa editorial estetikom, za parove koji cene prirodnost, emociju i jednostavnost.",
  path: "/about",
  keywords: [
    "o meni",
    "Filip Antešević",
    "wedding fotograf Srbija",
    "wedding videograf Srbija",
    "wedding fotograf Evropa",
  ],
});

export default function AboutPage() {
  return <AboutPageContent />;
}
