// @ts-check
import { defineConfig } from "astro/config";
import nodeAdapter from "@astrojs/node";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://cpacademy.fr",
  output: "static",
  integrations: [react()],
  adapter: nodeAdapter({
    mode: "standalone",
  }),

  vite: {
    plugins: [tailwindcss()],
    assetsInclude: ["**/*.pdf"],
    envPrefix: ["SENDGRID_"],
    server: {
      headers: {
        "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
        "Content-Security-Policy":
          "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self';",
        "X-Frame-Options": "SAMEORIGIN",
        "X-Content-Type-Options": "nosniff",
        "Referrer-Policy": "strict-origin-when-cross-origin",
        "Permissions-Policy": "geolocation=(), microphone=(), camera=()",
      },
    },
  },

  build: {
    assets: "assets",
  },
});
