import fs from "node:fs/promises";
import path from "node:path";

const SOURCE =
  process.env.HERO_SOURCE ??
  path.join(process.env.USERPROFILE ?? "", "Desktop", "2", "man-and-woman-on-the-yatch-hero-section.jpg");
const OUTPUT = path.join(process.cwd(), "public", "images", "home", "wedding-couple-yacht-hero.jpg");

async function optimizeHeroImage() {
  await fs.copyFile(SOURCE, OUTPUT);
  const { size } = await fs.stat(OUTPUT);
  console.log(`Hero copied at full resolution (${Math.round(size / 1024)}KB).`);
}

optimizeHeroImage().catch((error) => {
  console.error(error);
  process.exit(1);
});
