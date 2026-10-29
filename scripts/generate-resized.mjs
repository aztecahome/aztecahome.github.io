#!/usr/bin/env node
// Smaller copies of every photo in public/ for the pages' srcsets; see
// src/lib/resized.mjs for their names, widths and formats. Only photos
// changed since their copies were made are done again.
import sharp from "sharp";
import { mkdirSync, readdirSync, statSync } from "node:fs";
import { availableParallelism } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  ENCODER,
  FORMATS,
  resizedPath,
  resizedWidths,
} from "../src/lib/resized.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(__dirname, "..", "public");
// generated, or not photos
const SKIP = new Set(["og", "thumbs", "resized", "fonts"]);

const photos = readdirSync(PUBLIC, { recursive: true })
  .filter((file) => !SKIP.has(file.split("/")[0]))
  .filter((file) => /\.(webp|jpe?g|png)$/i.test(file))
  .sort();

async function resize(file) {
  const source = join(PUBLIC, file);
  const changed = statSync(source).mtimeMs;
  const { autoOrient } = await sharp(source).metadata();
  const todo = resizedWidths(autoOrient.width)
    .flatMap((width) => FORMATS.map((format) => ({ width, format })))
    .map((out) => ({
      ...out,
      target: join(PUBLIC, resizedPath(`/${file}`, out.width, out.format)),
    }))
    .filter(
      ({ target }) =>
        !(statSync(target, { throwIfNoEntry: false })?.mtimeMs >= changed),
    );
  if (!todo.length) return 0;
  // decode once, at the largest width needed, for all the copies
  const { data, info } = await sharp(source)
    .rotate()
    .resize({ width: Math.max(...todo.map((t) => t.width)) })
    .raw()
    .toBuffer({ resolveWithObject: true });
  mkdirSync(dirname(todo[0].target), { recursive: true });
  for (const { width, format, target } of todo)
    await sharp(data, { raw: info })
      .resize({ width, withoutEnlargement: true })
      [format](ENCODER[format])
      .toFile(target);
  return todo.length;
}

console.log(
  `Writing resized copies of ${photos.length} photos to public/resized`,
);
let made = 0;
// a few photos at a time; sharp spreads each one over the cores too
const queue = [...photos];
await Promise.all(
  Array.from({ length: Math.min(4, availableParallelism()) }, async () => {
    while (queue.length) {
      const n = await resize(queue.shift());
      made += n;
    }
  }),
);
console.log(`Done: ${made} made, the rest were up to date.`);
