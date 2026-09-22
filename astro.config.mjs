// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // Canonical origin; also used by `@astrojs/rss` to build absolute URLs.
  site: "https://me.sergio.run",

  prefetch: {
    defaultStrategy: "viewport",
    prefetchAll: true,
  },

  // Astro 7 changed the default to "jsx", which strips the whitespace around
  // inline elements. Keep the pre-v7 HTML-aware behavior so existing copy and
  // links keep their spacing.
  compressHTML: true,

  integrations: [react(), mdx()],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare({
    imageService: { build: "compile", runtime: "cloudflare-binding" },
  }),
});
