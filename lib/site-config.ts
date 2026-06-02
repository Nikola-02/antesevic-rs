export const siteConfig = {
  name: "Antesevic Weddings",
  shortName: "Antesevic Weddings",
  title: "Antesevic Weddings",
  description:
    "Premium wedding fotografija i videografija u Srbiji, Evropi i svetu. Bezvremenski kadrovi, film, elegancija i emocija za vas najvazniji dan.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://antesevic.rs",
  locale: "sr_RS",
  language: "sr",
  email: "antesevicweddings@gmail.com",
  phone: "+381641364897",
  instagram: "https://www.instagram.com/antesevic_raw/",
  whatsapp: "https://wa.me/381641364897",
  keywords: [
    "Antesevic",
    "Antesevic Weddings",
    "wedding fotograf",
    "wedding videograf",
    "fotograf venchanja",
    "videograf venchanja",
    "venchanje fotografija",
    "wedding video",
    "editorial fotografija",
    "fotograf Srbija",
    "luxury wedding photography",
    "luxury wedding videography",
  ],
  ogImage: "/images/home/wedding-couple-yacht-hero.jpg",
} as const;

export const publicRoutes = [
  { path: "/", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/about", changeFrequency: "monthly" as const, priority: 0.8 },
];
