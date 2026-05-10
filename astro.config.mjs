import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  site: "https://aztecahome.com",
  integrations: [tailwind(), sitemap(), compress({ Image: false })],
});
