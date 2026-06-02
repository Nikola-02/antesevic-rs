import type { MetadataRoute } from "next";
import { publicRoutes, siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((route) => ({
    url: new URL(route.path, siteConfig.url).toString(),
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
