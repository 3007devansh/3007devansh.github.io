import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

/**
 * `site` drives canonical URLs, the sitemap and OG image URLs.
 * Production domain (purchased from Hostinger), served via Cloudflare Pages.
 */
export default defineConfig({
  site: 'https://deksons.in',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
  build: { inlineStylesheets: 'auto' },
});
