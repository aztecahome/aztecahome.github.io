import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import { astroImageTools } from "astro-imagetools";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), astroImageTools, compress({ img: false })],
  // build: {
  //   // assets: "",
  // },
  // vite: {
  //   build: {
  //     assetsDir: "_astro", // if you uncomment this line, you have to make astro assets also "poop"
  //   },
  // },
});
