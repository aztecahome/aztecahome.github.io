import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";
const production = process.env.NODE_ENV === "production";

// https://vitejs.dev/config/
export default defineConfig({
  server: { port: 8080 },
  preview: { port: 8080 },
  plugins: [
    svelte({
      preprocess: sveltePreprocess({
        replace: [
          [/process\.env\.NODE_ENV/g, JSON.stringify(process.env.NODE_ENV)],
        ],
        sourceMap: !production,
        postcss: true,
        scss: {
          prependData: `@import "src/global.scss";`,
        },
      }),
    }),
  ],
});
