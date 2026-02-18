import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email(),
  message: z.string().trim().min(10).max(2000),
});

export const createReviewSchema = z.object({
  name: z.string().trim().min(2).max(80),
  description: z.string().trim().min(20).max(1500),
  avatarUrl: z.string().url(),
  honeypot: z.string().max(0).optional().default(""),
});

export const uploadRequestSchema = z.object({
  contentType: z.string(),
  fileName: z.string().min(1),
  folder: z.enum(["gallery", "video", "avatars"]),
  fileSize: z.number().int().positive(),
});

export const gallerySchema = z.object({
  title: z.string().trim().min(2).max(120),
  date: z.string().min(4),
  coverImage: z.string().url(),
});

export const videoSchema = z.object({
  title: z.string().trim().min(2).max(120),
  description: z.string().trim().min(10).max(1000),
  videoUrl: z.string().url(),
  thumbnailUrl: z.string().url(),
});
