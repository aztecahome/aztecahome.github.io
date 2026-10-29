// Thumbnails of the photos in public/, made at build time by
// scripts/generate-thumbs.mjs (into public/thumbs/, which isn't committed).
// A photo at /<path>.<ext> has /thumbs/<path>.<size>.webp for each of SIZES:
// a square from its middle, what the gallery's square tiles show, size px on
// a side (smaller photos aren't enlarged). The Worker that serves
// aztecahome.com builds the same URLs for its gallery, so keep its copy of
// this naming in step.

// The gallery's tiles are 175px wide on a 390px phone (2 columns) and at
// most 286px (4 columns in the 1200px container), so 360 does phones at 2x
// and desktops at 1x, 576 phones at 3x and desktops at 2x.
export const SIZES = [360, 576];

// The tile's width for each breakpoint of the gallery's grid in its
// container (`container p-4`, `grid-cols-2 gap-2 sm:grid-cols-3
// lg:grid-cols-4`).
export const TILE_SIZES =
  "(min-width: 1200px) 286px, (min-width: 640px) 242px, calc(50vw - 20px)";

export const thumbPath = (src, size) =>
  `/thumbs${src.replace(/\.[^./]+$/, "")}.${size}.webp`;

export const thumbSrcset = (src) =>
  SIZES.map((size) => `${thumbPath(src, size)} ${size}w`).join(", ");
