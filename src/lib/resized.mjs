// Smaller copies of the photos in public/ for the site's pages, made at build
// time by scripts/generate-resized.mjs (into public/resized/, which isn't
// committed) so pages can offer a srcset while the photos keep their URLs.
// A photo at /<path>.<ext> that is W px wide has
// /resized/<path>.<width>.<format> for each of FORMATS and each width of
// resizedWidths(W): the whole photo scaled to that width (never enlarged).

// 400 for small tiles at 1x, up to 1600 for full width images at 2x or 3x.
export const WIDTHS = [400, 800, 1200, 1600];

// AVIF first: it's about 40% smaller than WebP; browsers without it take
// the WebP.
export const FORMATS = ["avif", "webp"];

// Encoder options, also used by astro:assets for the heroes (see
// astro.config.mjs). AVIF effort 2 is about ten times faster than sharp's
// default of 4, and its files are no bigger for these photos.
export const ENCODER = {
  avif: { quality: 50, effort: 2 },
  webp: { quality: 75, effort: 4 },
};

// The widths below the photo's own, then the photo's own width, so a small
// photo isn't enlarged and a big one stops at the largest of WIDTHS.
export const resizedWidths = (width) => [
  ...WIDTHS.filter((w) => w < width),
  ...(width <= WIDTHS.at(-1) ? [width] : []),
];

export const resizedPath = (src, width, format) =>
  `/resized${src.replace(/\.[^./]+$/, "")}.${width}.${format}`;

export const resizedSrcset = (src, width, format) =>
  resizedWidths(width)
    .map((w) => `${resizedPath(src, w, format)} ${w}w`)
    .join(", ");
