import { cache } from "react";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { Gallery, GalleryImage, Review, Video } from "@/types/database";

const sampleGalleries: Gallery[] = [
  {
    id: "sample-1",
    title: "Jutarnji kadar",
    slug: "jutarnji-kadar",
    date: "2026-01-20",
    cover_image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80",
    created_at: new Date().toISOString(),
  },
  {
    id: "sample-2",
    title: "Crno-bela elegancija",
    slug: "crno-bela-elegancija",
    date: "2025-12-16",
    cover_image:
      "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?auto=format&fit=crop&w=1200&q=80",
    created_at: new Date().toISOString(),
  },
  {
    id: "sample-3",
    title: "Meki tonovi",
    slug: "meki-tonovi",
    date: "2025-11-09",
    cover_image:
      "https://images.unsplash.com/photo-1523263685509-57c1d050d19b?auto=format&fit=crop&w=1200&q=80",
    created_at: new Date().toISOString(),
  },
  {
    id: "sample-4",
    title: "Studijska priča",
    slug: "studijska-prica",
    date: "2025-10-27",
    cover_image:
      "https://images.unsplash.com/photo-1464863979621-258859e62245?auto=format&fit=crop&w=1200&q=80",
    created_at: new Date().toISOString(),
  },
  {
    id: "sample-5",
    title: "Portreti svetla",
    slug: "portreti-svetla",
    date: "2025-09-15",
    cover_image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
    created_at: new Date().toISOString(),
  },
  {
    id: "sample-6",
    title: "Urbana tekstura",
    slug: "urbana-tekstura",
    date: "2025-08-05",
    cover_image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1200&q=80",
    created_at: new Date().toISOString(),
  },
];

const sampleVideos: Video[] = [
  {
    id: "video-1",
    title: "Kretanje u studiju",
    description: "Kratak crno-beli kadar sa prirodnim pokretom.",
    video_url:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    thumbnail_url:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
    created_at: new Date().toISOString(),
  },
  {
    id: "video-2",
    title: "Portret u pokretu",
    description: "Demo snimak za test prikaza plejera i modala.",
    video_url:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    thumbnail_url:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
    created_at: new Date().toISOString(),
  },
];

const sampleGalleryImages: Record<string, string[]> = {
  "jutarnji-kadar": [
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1464863979621-258859e62245?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1523263685509-57c1d050d19b?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?auto=format&fit=crop&w=1400&q=80",
  ],
  "crno-bela-elegancija": [
    "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1464863979621-258859e62245?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?auto=format&fit=crop&w=1400&q=80",
  ],
};

const defaultGalleryImages = [
  "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1400&q=80",
];

const sampleReviews: Review[] = [
  {
    id: "r-1",
    name: "Milica Petrović",
    social_link: null,
    description:
      "Od prvog kontakta do finalnih fotografija, sve je bilo profesionalno i opušteno. Rezultat je elegantan i baš u skladu sa onim što sam želela.",
    avatar_url:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
    status: "approved",
    created_at: new Date().toISOString(),
  },
  {
    id: "r-2",
    name: "Nikola Savić",
    social_link: null,
    description:
      "Fotografije imaju premium izgled, a komunikacija je bila jasna i brza. Posebno mi se sviđa minimalni stil obrade.",
    avatar_url:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    status: "approved",
    created_at: new Date().toISOString(),
  },
];

export const getGalleries = cache(async () => {
  const supabase = createSupabaseServerClient();
  if (!supabase) {
    return sampleGalleries;
  }

  const { data } = await supabase
    .from("galleries")
    .select("*")
    .order("date", { ascending: false });
  return (data ?? sampleGalleries) as Gallery[];
});

export const getGalleryBySlug = cache(async (slug: string) => {
  const supabase = createSupabaseServerClient();
  if (!supabase) {
    const gallery = sampleGalleries.find((item) => item.slug === slug);
    const sampleImages = sampleGalleryImages[slug] ?? [];
    return {
      gallery: gallery ?? null,
      images: gallery
        ? (sampleImages.length > 0 ? sampleImages : [gallery.cover_image, ...defaultGalleryImages]).map((imageUrl, index) => ({
            id: `image-${index + 1}`,
            gallery_id: gallery.id,
            image_url: imageUrl,
            created_at: new Date().toISOString(),
          }))
        : [],
    };
  }

  const { data: gallery } = await supabase
    .from("galleries")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();
  if (!gallery) {
    return { gallery: null, images: [] as GalleryImage[] };
  }

  const { data: images } = await supabase
    .from("images")
    .select("*")
    .eq("gallery_id", gallery.id)
    .order("created_at", { ascending: true });

  return {
    gallery: gallery as Gallery,
    images: (images ?? []) as GalleryImage[],
  };
});

export const getVideos = cache(async () => {
  const supabase = createSupabaseServerClient();
  if (!supabase) {
    return sampleVideos;
  }

  const { data } = await supabase
    .from("videos")
    .select("*")
    .order("created_at", { ascending: false });
  return (data ?? sampleVideos) as Video[];
});

export const getApprovedReviews = cache(async () => {
  const supabase = createSupabaseServerClient();
  if (!supabase) {
    return sampleReviews;
  }

  const { data } = await supabase
    .from("reviews")
    .select("*")
    .eq("status", "approved")
    .order("created_at", { ascending: false });
  return (data ?? sampleReviews) as Review[];
});
