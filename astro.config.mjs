// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  integrations: [react(), mdx()],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare({
    imageService: { build: "compile", runtime: "cloudflare-binding" },
  }),
});
