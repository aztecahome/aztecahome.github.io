import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import compress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  site: "https://aztecahome.com",
  // astro 7 compressHTML drops spaces before inline tags; @playform/compress minifies instead
  compressHTML: false,
  integrations: [sitemap(), compress({ Image: false })],
  vite: { plugins: [tailwindcss()] },
});
