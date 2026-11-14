// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// SITE_URL and BASE_PATH are set by the GitHub Pages workflow.
// Locally (and once the custom domain is live) the defaults apply.
const site = process.env.SITE_URL || "https://rootandreinvent.com";
const base = process.env.BASE_PATH || "/";

const noindexPaths = ["/guide/thanks/", "/privacy/", "/terms/"];

export default defineConfig({
  site,
  base,
  trailingSlash: "always",
  integrations: [
    sitemap({
      filter: (page) => !noindexPaths.some((p) => page.endsWith(p)),
    }),
  ],
});
