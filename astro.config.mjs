import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import compress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  site: "https://aztecahome.com",
  // astro 7 defaults to "jsx", which drops newline whitespace between inline tags
  compressHTML: true,
  integrations: [sitemap(), compress({ Image: false })],
  vite: { plugins: [tailwindcss()] },
});
