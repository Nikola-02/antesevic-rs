import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function sanitizeFilename(fileName: string) {
  const [name, ext] = fileName.split(".");
  const cleanName = name
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 60);
  const cleanExt = ext?.toLowerCase().replace(/[^a-z0-9]/g, "") ?? "bin";
  return `${cleanName || "file"}.${cleanExt}`;
}
