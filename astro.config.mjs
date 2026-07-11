import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

/**
 * ⚠️ Replace `site` with the real domain once confirmed (priority answer Q18).
 * Canonical URLs, hreflang, sitemap and OG image URLs all derive from it.
 */
export default defineConfig({
  site: 'https://deksoniti.in',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
  build: { inlineStylesheets: 'auto' },
});
