import { getEntry } from 'astro:content';

// Préfixe les chemins internes avec la base du site
// ('/' en production, '/<nom-du-repo>/' pour l'aperçu GitHub Pages).
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export const url = (path = '/') => {
  if (!path || /^(https?:|mailto:|tel:|#)/.test(path)) return path;
  return BASE + (path.startsWith('/') ? path : `/${path}`);
};

// Une valeur est « à compléter » si elle est vide, en « # » ou contient le placeholder.
export const aCompleter = (v?: string | null) =>
  !v || v.trim() === '' || v.trim() === '#' || v.includes('[À COMPLÉTER]');

export const estRenseigne = (v?: string | null): v is string => !aCompleter(v);

export async function getReglages() {
  const entry = await getEntry('reglages', 'general');
  if (!entry) throw new Error('src/content/reglages/general.yml est introuvable');
  return entry.data;
}
