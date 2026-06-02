export const siteConfig = {
  name: "Antesevic Weddings",
  shortName: "Antesevic",
  title: "Antesevic Weddings | Wedding i editorial fotografija",
  description:
    "Premium wedding i editorial fotografija u Srbiji, Evropi i svetu. Bezvremenski kadrovi, elegancija i emocija za vas najvazniji dan.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://antesevic.rs",
  locale: "sr_RS",
  language: "sr",
  email: "antesevicweddings@gmail.com",
  phone: "+381641364897",
  instagram: "https://www.instagram.com/antesevic_raw/",
  whatsapp: "https://wa.me/381641364897",
  keywords: [
    "wedding fotograf",
    "fotograf venchanja",
    "venchanje fotografija",
    "Antesevic",
    "Antesevic Weddings",
    "editorial fotografija",
    "fotograf Srbija",
    "luxury wedding photography",
  ],
  ogImage: "/images/home/wedding-couple-yacht-hero.jpg",
} as const;

export const publicRoutes = [
  { path: "/", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/about", changeFrequency: "monthly" as const, priority: 0.8 },
];
