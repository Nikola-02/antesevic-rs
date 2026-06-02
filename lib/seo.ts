import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

type PageMetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  ogImage?: string;
};

export function createPageMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  ogImage = siteConfig.ogImage,
}: PageMetadataInput): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  const imageUrl = new URL(ogImage, siteConfig.url).toString();

  return {
    title: path === "/" ? { absolute: title } : title,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title,
      description,
      images: [{ url: imageUrl, width: 1920, height: 1080, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function createRootMetadata(): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: siteConfig.title,
      template: `%s | ${siteConfig.shortName}`,
    },
    description: siteConfig.description,
    keywords: [...siteConfig.keywords],
    authors: [{ name: siteConfig.shortName, url: siteConfig.url }],
    creator: siteConfig.shortName,
    publisher: siteConfig.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: siteConfig.url,
      siteName: siteConfig.name,
      title: siteConfig.title,
      description: siteConfig.description,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1920,
          height: 1080,
          alt: siteConfig.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.title,
      description: siteConfig.description,
      images: [siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export function createOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.url,
    image: new URL(siteConfig.ogImage, siteConfig.url).toString(),
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    areaServed: ["RS", "Europe", "Worldwide"],
    sameAs: [siteConfig.instagram, siteConfig.whatsapp],
    serviceType: ["Wedding photography", "Wedding videography", "Editorial photography"],
  };
}
