// @ts-check
import { defineConfig } from "astro/config";
import nodeAdapter from "@astrojs/node";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [react()],
  adapter: nodeAdapter({
    mode: "standalone",
  }),

  vite: {
    plugins: [tailwindcss()],
    assetsInclude: ["**/*.pdf"],
    envPrefix: ["SENDGRID_"],
  },
});
