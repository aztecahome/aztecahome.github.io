#!/usr/bin/env node
import sharp from "sharp";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "public", "og");
mkdirSync(OUT, { recursive: true });

const W = 1200;
const H = 630;
const BG = "#2F2F06"; // army-900
const FG = "#FFFFE8"; // army-50
const ACCENT = "#878749"; // army-500
const SUB = "#D6D6AF"; // army-200

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

function card({ badge, headline, subhead }) {
  return `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${W}" height="${H}" fill="${BG}"/>
  <rect x="0" y="0" width="${W}" height="16" fill="${ACCENT}"/>
  <rect x="0" y="${H - 16}" width="${W}" height="16" fill="${ACCENT}"/>

  <text x="64" y="118" font-family="Helvetica, Arial, sans-serif"
        font-size="32" font-weight="bold" fill="${SUB}" letter-spacing="6">
    ${escapeXml(badge.toUpperCase())}
  </text>

  <text x="64" y="290" font-family="Helvetica, Arial, sans-serif"
        font-size="88" font-weight="900" fill="${FG}">
    ${escapeXml(headline)}
  </text>

  <text x="64" y="370" font-family="Helvetica, Arial, sans-serif"
        font-size="34" font-weight="normal" fill="${SUB}">
    ${escapeXml(subhead)}
  </text>

  <rect x="64" y="488" width="600" height="78" rx="10" fill="${ACCENT}"/>
  <text x="84" y="540" font-family="Helvetica, Arial, sans-serif"
        font-size="32" font-weight="bold" fill="${BG}">
    Free Estimate · (602) 926-2021
  </text>

  <text x="${W - 64}" y="540" text-anchor="end"
        font-family="Helvetica, Arial, sans-serif"
        font-size="30" font-weight="bold" fill="${SUB}">
    Phoenix, AZ
  </text>
</svg>`;
}

const sections = [
  {
    name: "default",
    badge: "AZTECA Home Services",
    headline: "Pest · Pools · Landscape",
    subhead: "Veteran-owned home services across the Phoenix valley.",
  },
  {
    name: "pest-control",
    badge: "Pest Control",
    headline: "Take Back Your Home.",
    subhead: "Termites, scorpions, roaches, bed bugs, rodents & more.",
  },
  {
    name: "landscaping",
    badge: "Landscaping",
    headline: "A Lush Desert Oasis.",
    subhead: "Trimming, cleanup, grass, pavers & tree service.",
  },
  {
    name: "pools",
    badge: "Pool Service",
    headline: "Sparkling, Year-Round.",
    subhead: "Cleaning, maintenance, repair & chemical service.",
  },
  {
    name: "contact",
    badge: "Contact",
    headline: "Free Estimates.",
    subhead: "Call, text, or message us — we respond fast.",
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

async function render(name, svg) {
  const png = await sharp(Buffer.from(svg))
    .png({ compressionLevel: 9 })
    .toBuffer();
  writeFileSync(join(OUT, `${name}.png`), png);
  console.log(`  ${name}.png — ${(png.length / 1024).toFixed(0)} KB`);
}

console.log(`Writing OG cards to ${OUT}`);

for (const s of sections) {
  await render(s.name, card(s));
}

for (const b of bugs) {
  await render(
    b.name,
    card({
      badge: "Pest Control",
      headline: `${b.display} in Phoenix.`,
      subhead: `Effective ${b.display.toLowerCase()} control across the valley.`,
    }),
  );
}

console.log("Done.");
