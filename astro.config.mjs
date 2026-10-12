// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
// The site's public address, used for link previews and the sitemap.
// Set SITE_URL to override it (e.g. for a test deployment).
const site = process.env.SITE_URL ?? "https://mornaveh.com";

export default defineConfig({
  site,
  vite: {
    plugins: [tailwindcss()]
  }
});