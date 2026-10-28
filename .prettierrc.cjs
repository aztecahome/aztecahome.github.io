module.exports = {
  plugins: [require.resolve("prettier-plugin-astro")],
  // match compressHTML in astro.config.mjs
  astroCompressHTML: "html",
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
