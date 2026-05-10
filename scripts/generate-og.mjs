#!/usr/bin/env node
import sharp from "sharp";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const PUBLIC = join(ROOT, "public");
const OUT = join(PUBLIC, "og");
mkdirSync(OUT, { recursive: true });

const W = 1200;
const H = 630;
// army-900 base, brand accents
const BG = { r: 47, g: 47, b: 6 };
const FG = "#FFFFE8"; // army-50
const ACCENT = "#878749"; // army-500
const SUB = "#D6D6AF"; // army-200
const OVERLAY_ALPHA = 0.62; // tint strength over the photo

const escapeXml = (s) =>
  s.replace(
    /[<>&'"]/g,
    (c) =>
      ({
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        "'": "&apos;",
        '"': "&quot;",
      })[c],
  );

function textLayer({ badge, headline, subhead }) {
  return `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
      <feOffset dx="0" dy="2"/>
      <feComponentTransfer><feFuncA type="linear" slope="0.7"/></feComponentTransfer>
      <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>

  <rect x="0" y="0" width="${W}" height="16" fill="${ACCENT}"/>
  <rect x="0" y="${H - 16}" width="${W}" height="16" fill="${ACCENT}"/>

  <text x="64" y="118" font-family="Helvetica, Arial, sans-serif"
        font-size="32" font-weight="bold" fill="${SUB}" letter-spacing="6"
        filter="url(#shadow)">
    ${escapeXml(badge.toUpperCase())}
  </text>

  <text x="64" y="290" font-family="Helvetica, Arial, sans-serif"
        font-size="88" font-weight="900" fill="${FG}"
        filter="url(#shadow)">
    ${escapeXml(headline)}
  </text>

  <text x="64" y="370" font-family="Helvetica, Arial, sans-serif"
        font-size="34" font-weight="normal" fill="${SUB}"
        filter="url(#shadow)">
    ${escapeXml(subhead)}
  </text>

  <rect x="64" y="488" width="600" height="78" rx="10" fill="${ACCENT}"/>
  <text x="84" y="540" font-family="Helvetica, Arial, sans-serif"
        font-size="32" font-weight="bold" fill="#2F2F06">
    Free Estimate · (602) 926-2021
  </text>

  <text x="${W - 64}" y="540" text-anchor="end"
        font-family="Helvetica, Arial, sans-serif"
        font-size="30" font-weight="bold" fill="${SUB}"
        filter="url(#shadow)">
    Phoenix, AZ
  </text>
</svg>`;
}

function tintLayer() {
  return `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${W}" height="${H}"
          fill="rgb(${BG.r},${BG.g},${BG.b})"
          fill-opacity="${OVERLAY_ALPHA}"/>
  </svg>`;
}

async function render({ name, badge, headline, subhead, bg }) {
  const bgPath = join(PUBLIC, bg);

  const baseImage = await sharp(bgPath)
    .resize(W, H, { fit: "cover", position: "center" })
    .toBuffer();

  const jpg = await sharp(baseImage)
    .composite([
      { input: Buffer.from(tintLayer()) },
      { input: Buffer.from(textLayer({ badge, headline, subhead })) },
    ])
    .jpeg({ quality: 82, mozjpeg: true })
    .toBuffer();

  writeFileSync(join(OUT, `${name}.jpg`), jpg);
  console.log(`  ${name}.jpg — ${(jpg.length / 1024).toFixed(0)} KB`);
}

const PEST_BG = "general/truck.webp";
const LANDSCAPE_BG = "landscape/general.webp";
const POOL_BG = "pool/1.webp";

const sections = [
  {
    name: "default",
    badge: "AZTECA Home Services",
    headline: "Pest · Pools · Landscape",
    subhead: "Veteran-owned home services across the Phoenix valley.",
    bg: LANDSCAPE_BG,
  },
  {
    name: "pest-control",
    badge: "Pest Control",
    headline: "Take Back Your Home.",
    subhead: "Termites, scorpions, roaches, bed bugs, rodents & more.",
    bg: PEST_BG,
  },
  {
    name: "landscaping",
    badge: "Landscaping",
    headline: "A Lush Desert Oasis.",
    subhead: "Trimming, cleanup, grass, pavers & tree service.",
    bg: LANDSCAPE_BG,
  },
  {
    name: "pools",
    badge: "Pool Service",
    headline: "Sparkling, Year-Round.",
    subhead: "Cleaning, maintenance, repair & chemical service.",
    bg: POOL_BG,
  },
  {
    name: "contact",
    badge: "Contact",
    headline: "Free Estimates.",
    subhead: "Call, text, or message us — we respond fast.",
    bg: LANDSCAPE_BG,
  },
];

const bugs = [
  { name: "ants", display: "Ants" },
  { name: "bed-bugs", display: "Bed Bugs" },
  { name: "bees", display: "Bees" },
  { name: "beetles", display: "Beetles" },
  { name: "birds", display: "Birds" },
  { name: "crickets", display: "Crickets" },
  { name: "fleas", display: "Fleas" },
  { name: "flies", display: "Flies" },
  { name: "mosquitoes", display: "Mosquitoes" },
  { name: "roaches", display: "Roaches" },
  { name: "rodents", display: "Rodents" },
  { name: "scorpions", display: "Scorpions" },
  { name: "spiders", display: "Spiders" },
  { name: "termites", display: "Termites" },
  { name: "ticks", display: "Ticks" },
  { name: "wasps", display: "Wasps" },
];

console.log(`Writing OG cards to ${OUT}`);

for (const s of sections) {
  await render(s);
}

for (const b of bugs) {
  await render({
    name: b.name,
    badge: "Pest Control",
    headline: `${b.display} in Phoenix.`,
    subhead: `Effective ${b.display.toLowerCase()} control across the valley.`,
    bg: PEST_BG,
  });
}

console.log("Done.");
