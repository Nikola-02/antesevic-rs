import type { Metadata } from "next";
import { HomePageContent } from "@/components/site/home-page-content";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createPageMetadata({
  title: siteConfig.title,
  description: siteConfig.description,
  path: "/",
  keywords: ["wedding fotografija", "wedding videografija", "početna"],
});

export default function HomePage() {
  return <HomePageContent />;
}
