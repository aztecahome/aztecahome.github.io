import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import compress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), compress({ Image: false })],
});
