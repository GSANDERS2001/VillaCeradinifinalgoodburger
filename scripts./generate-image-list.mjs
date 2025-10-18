// scripts/generate-image-list.mjs
import fs from "fs";
import path from "path";

const imagesDir = path.join(process.cwd(), "public", "images");
const allowed = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);

const files = fs
  .readdirSync(imagesDir)
  .filter((f) => allowed.has(path.extname(f).toLowerCase()))
  .sort();

fs.writeFileSync(
  path.join(process.cwd(), "public", "images-list.json"),
  JSON.stringify(files, null, 2)
);

console.log(`Wrote ${files.length} images to public/images-list.json`);
