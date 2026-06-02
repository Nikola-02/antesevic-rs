import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const IMAGE_DIR = path.join(process.cwd(), "public", "images", "home");
const MAX_WIDTH = 1920;
const WEBP_QUALITY = 85;

async function optimizeImages() {
  const entries = await fs.readdir(IMAGE_DIR, { withFileTypes: true });
  let savedBytes = 0;

  for (const entry of entries) {
    if (!entry.isFile()) continue;

    if (entry.name.startsWith("wedding-couple-yacht-hero")) continue;

    const ext = path.extname(entry.name).toLowerCase();
    if (![".jpg", ".jpeg", ".png"].includes(ext)) continue;

    const inputPath = path.join(IMAGE_DIR, entry.name);
    const outputPath = path.join(IMAGE_DIR, `${path.basename(entry.name, ext)}.webp`);
    const before = (await fs.stat(inputPath)).size;

    await sharp(inputPath)
      .rotate()
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: WEBP_QUALITY, effort: 6 })
      .toFile(outputPath);

    const after = (await fs.stat(outputPath)).size;
    savedBytes += before - after;

    await fs.unlink(inputPath);
    console.log(`${entry.name} -> ${path.basename(outputPath)} (${Math.round(before / 1024)}KB -> ${Math.round(after / 1024)}KB)`);
  }

  console.log(`Saved ${Math.round(savedBytes / 1024 / 1024)}MB total.`);
}

optimizeImages().catch((error) => {
  console.error(error);
  process.exit(1);
});
