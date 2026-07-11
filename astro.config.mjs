import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

/**
 * `site` drives canonical URLs, the sitemap and OG image URLs.
 * Currently the free preview at https://3007devansh.github.io (user GitHub
 * Pages site — serves at the domain root, so no `base` is needed).
 * ⚠️ Change this to the real domain the moment it is purchased, then redeploy.
 */
export default defineConfig({
  site: 'https://3007devansh.github.io',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
  build: { inlineStylesheets: 'auto' },
});
