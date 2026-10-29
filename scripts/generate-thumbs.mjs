#!/usr/bin/env node
// Thumbnails of every photo in public/ for the gallery's tiles; see
// src/lib/thumbs.mjs for their names and sizes. Only photos changed since
// their thumbnails were made are done again.
import sharp from "sharp";
import { mkdirSync, readdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { SIZES, thumbPath } from "../src/lib/thumbs.mjs";

const QUALITY = 65;

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(__dirname, "..", "public");
// generated, or not photos
const SKIP = new Set(["og", "thumbs", "fonts"]);

const photos = readdirSync(PUBLIC, { recursive: true })
  .filter((file) => !SKIP.has(file.split("/")[0]))
  .filter((file) => /\.(webp|jpe?g|png)$/i.test(file))
  .sort();

console.log(`Writing thumbnails of ${photos.length} photos to public/thumbs`);
let made = 0;
for (const file of photos) {
  const source = join(PUBLIC, file);
  const changed = statSync(source).mtimeMs;
  await Promise.all(
    SIZES.map(async (size) => {
      const target = join(PUBLIC, thumbPath(`/${file}`, size));
      if (statSync(target, { throwIfNoEntry: false })?.mtimeMs >= changed)
        return;
      mkdirSync(dirname(target), { recursive: true });
      await sharp(source)
        .rotate()
        .resize(size, size, { fit: "cover", withoutEnlargement: true })
        .webp({ quality: QUALITY, effort: 6 })
        .toFile(target);
      made++;
    }),
  );
}
console.log(`Done: ${made} made, the rest were up to date.`);
