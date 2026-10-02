import { defineCollection, z } from 'astro:content';

// ─── Contenu des pages (fichiers YAML éditables depuis /admin) ───────
// Tout texte encore inconnu est laissé en « [À COMPLÉTER] ».

const texte = z.object({ titre: z.string(), texte: z.string() });

// Coordonnées, liens et informations légales
const reglages = defineCollection({
  type: 'data',
  schema: z.object({
    email: z.string(),
    // Un numéro par coach (affichés dans la carte contact, le pied de page et les mentions légales)
    telephones: z.array(z.object({ nom: z.string(), numero: z.string(), photo: z.string().optional() })),
    instagram: z.string(),
    raison_sociale: z.string(),
    statut: z.string(),
    siret: z.string(),
    adresse: z.string(),
    directeur_publication: z.string(),
    cgv: z.string().optional(), // URL ou fichier PDF des CGV, vide = masqué
  }),
});

// Page d'accueil
const accueil = defineCollection({
  type: 'data',
  schema: z.object({
    hero: z.object({
      accroche: z.string(),
      presentation: z.string(),
      photo: z.string().optional(),
      photo_alt: z.string().optional(),
    }),
    philosophie: z.object({
      titre: z.string(),
      piliers: z.array(texte),
    }),
    avis_google: z.object({
      note: z.string(), // ex. « 5,0 », affichée en tête du bandeau
      lien: z.string(), // URL de la fiche Google
      avis: z.array(z.object({ auteur: z.string(), note: z.number().min(1).max(5).default(5), texte: z.string() })).default([]),
    }),
    offres_intro: z.string(),
    etapes: z.array(texte),
    cta_final: texte,
  }),
});

// Page Coaching : disciplines + formules
const coaching = defineCollection({
  type: 'data',
  schema: z.object({
    intro: z.string(),
    disciplines: z.array(
      z.object({
        id: z.string(), // ancre : course, triathlon, prepa
        titre: z.string(),
        resume: z.string(), // texte court affiché sur l'accueil
        exemples: z.array(z.string()),
        apport: z.string(), // ce qu'Endurall apporte concrètement
        photo: z.string().optional(),
      })
    ),
    formules: z.array(
      z.object({
        nom: z.string(),
        philosophie: z.string(), // phrase courte affichée sur l'accueil
        accroche: z.string(), // présentation de l'offre sur la page Coaching
        prix: z.string().optional(),
        mise_en_avant: z.boolean().default(false),
        pour_qui: z.string(),
        inclus: z.array(z.string()),
        fonctionnement: z.string(),
      })
    ),
  }),
});

// Page À propos / Contact
const apropos = defineCollection({
  type: 'data',
  schema: z.object({
    duo: z.object({
      titre: z.string(),
      accroche: z.string().optional(), // sous-titre, ex. « Viens, on rêve ? »
      texte: z.string(), // une ligne vide = nouveau paragraphe
      photo: z.string().optional(),
    }),
    coachs: z.array(
      z.object({
        prenom: z.string(),
        photo: z.string().optional(),
        accroche: z.string(),
        rapport_au_sport: z.string(),
        parcours: z.string(),
        pourquoi_coach: z.string(),
        vision: z.string(),
        specialites: z.array(z.string()),
        diplomes: z.array(z.string()),
      })
    ),
    contact_intro: z.string(),
  }),
});

export const collections = { reglages, accueil, coaching, apropos };
