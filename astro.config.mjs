import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// URL de production — à ajuster une fois le domaine acheté.
// Pour l'aperçu GitHub Pages, ASTRO_SITE et ASTRO_BASE sont fournis par le workflow
// (.github/workflows/apercu.yml), ex. https://<compte>.github.io + /<nom-du-repo>.
const SITE = process.env.ASTRO_SITE || 'https://endurall.fr';
const BASE = process.env.ASTRO_BASE || '/';
const PREFIX = BASE.replace(/\/$/, '');

// https://astro.build/config
export default defineConfig({
  site: SITE,
  base: BASE,
  integrations: [tailwind(), sitemap()],
  // Anciennes adresses → nouvelles pages
  redirects: {
    '/offres': `${PREFIX}/coaching`,
    '/histoire': `${PREFIX}/a-propos`,
    '/contact': `${PREFIX}/a-propos#contact`,
  },
});
