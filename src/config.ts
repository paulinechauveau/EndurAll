// ───────────────────────────────────────────────────────────────────
// Configuration centrale du site EndurAll (structure et SEO).
// Les textes, coordonnées et infos légales sont dans src/content/
// (éditables sans code depuis /admin).
// ───────────────────────────────────────────────────────────────────

export const SITE = {
  name: 'EndurAll',
  tagline: 'Coaching sportif personnalisé : course à pied, triathlon & préparation physique',
  description:
    'Coaching sportif personnalisé en course à pied, triathlon et préparation physique. ' +
    'Du débutant au sportif qui prépare un objectif d’endurance, on construit ton accompagnement ensemble.',
};

// Navigation principale — la charte impose 3 pages, ne pas en ajouter sans demande explicite.
export const NAV = [
  { label: 'Accueil', href: '/' },
  { label: 'Coaching', href: '/coaching' },
  { label: 'À propos / Contact', href: '/a-propos' },
];

// Bouton principal du site
export const CTA = {
  label: 'Commencer l’aventure',
  href: '/a-propos#contact',
};
