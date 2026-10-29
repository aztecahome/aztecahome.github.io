import { defineConfig, sharpImageService } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import compress from "@playform/compress";
import { ENCODER } from "./src/lib/resized.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://aztecahome.com",
  // astro 7 defaults to "jsx", which drops newline whitespace between inline tags
  compressHTML: true,
  // same encoding as the resized copies of the photos in public/
  image: { service: sharpImageService(ENCODER) },
  integrations: [sitemap(), compress({ Image: false })],
  vite: { plugins: [tailwindcss()] },
});
