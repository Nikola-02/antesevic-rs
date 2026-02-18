export type ReviewStatus = "pending" | "approved";

export type Gallery = {
  id: string;
  title: string;
  slug: string;
  date: string;
  cover_image: string;
  created_at: string;
};

export type GalleryImage = {
  id: string;
  gallery_id: string;
  image_url: string;
  created_at: string;
};

export type Video = {
  id: string;
  title: string;
  description: string;
  video_url: string;
  thumbnail_url: string;
  created_at: string;
};

export type Review = {
  id: string;
  name: string;
  social_link: string | null;
  description: string;
  avatar_url: string;
  status: ReviewStatus;
  created_at: string;
};
