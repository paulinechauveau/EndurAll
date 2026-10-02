# Endurall — Site vitrine du coaching

Site web statique construit avec **Astro** + **Tailwind CSS**, conforme à la charte
(`../Charte site internet.txt`). Rapide, pensé mobile d'abord, éditable sans code via **Decap CMS**.

## 🚀 Démarrer en local

```bash
npm install
npm run dev      # http://localhost:4321
```

Autres commandes :

```bash
npm run build    # génère le site dans dist/
npm run preview  # prévisualise le build
```

> Node 18.20.8+ requis (Astro 4). Netlify et GitHub Actions utilisent Node 20.

## 🗂️ Structure

```
src/
  config.ts              ← nom du site, SEO, menu, bouton « Commencer l'aventure »
  content/
    accueil/contenu.yml  ← textes de la page d'accueil
    coaching/contenu.yml ← disciplines + formules Start / Premium
    apropos/contenu.yml  ← Elo & Guillaume, intro du contact
    reglages/general.yml ← e-mail, téléphone, Instagram, SIRET, CGV…
  pages/                 ← les 3 pages de la charte : index (Accueil), coaching, a-propos (+ contact)
                           + mentions-legales, confidentialite, merci
  components/            ← Header, Footer, Photo (emplacement photo), Txt, Icon
  lib/site.ts            ← helpers : url() (gestion du sous-chemin), getReglages()…
public/
  images/                ← logo (original + version détourée), favicon, uploads
  admin/                 ← interface d'édition sans code (Decap CMS)
```

## ✍️ Contenu à compléter

Tout ce qui n'est pas encore connu est marqué **`[À COMPLÉTER]`** (surligné en orange dans le site).
Rien ne doit être inventé (charte §14). À fournir :

- contenu et tarifs des formules **Start** et **Premium** ;
- textes, spécialités et diplômes de **Guillaume** et d'**Elo** ;
- **vraies photos** : duo, coaching, course, triathlon, préparation physique ;
- Instagram, e-mail, téléphone ;
- statut juridique, adresse, SIRET, CGV éventuelles.

Tout se modifie depuis `/admin` (rubriques « Pages du site » et « Réglages »), ou directement dans les fichiers `.yml`.

## 👀 Aperçu sur GitHub Pages

Le workflow `.github/workflows/apercu.yml` publie un aperçu à chaque push sur `main` :

Dépôt : https://github.com/paulinechauveau/EndurAll

1. *Settings → Pages → Source* : choisir **GitHub Actions** (à faire une seule fois).
2. L'aperçu est disponible sur https://paulinechauveau.github.io/EndurAll/
   (onglet *Actions* pour suivre la publication).

Sur l'aperçu :
- les pages ne sont pas indexées par les moteurs de recherche ;
- le formulaire est désactivé (Netlify Forms ne fonctionne que sur Netlify) ;
- l'admin `/admin` n'y fonctionne pas.

> ⚠️ Sur un compte GitHub gratuit, Pages n'est disponible que pour les dépôts **publics**.
> Un dépôt privé nécessite GitHub Pro / Team.

## 🌐 Mise en ligne (Netlify)

1. Sur [netlify.com](https://www.netlify.com) : *Add new site* → *Import from Git* → sélectionner le dépôt.
   Build et dossier de publication sont déjà dans `netlify.toml`. Chaque push redéploie le site.
2. **Formulaire de contact** : Netlify détecte automatiquement le formulaire. Les messages arrivent dans *Forms* ;
   configurer une notification e-mail vers l'adresse Endurall.
3. **Domaine** : acheter `endurall.fr`, puis *Domain settings* → *Add a domain* (HTTPS automatique).
   Si le domaine est différent, le remplacer dans `astro.config.mjs` et `public/robots.txt`.

Les anciennes adresses (`/offres`, `/histoire`, `/contact`) redirigent vers les nouvelles pages.

## 🔐 Édition sans code (Decap CMS)

`public/admin/config.yml` utilise le backend **`github`**. On ne passe pas par Netlify Identity, qui est déprécié.
La connexion se fait avec un compte GitHub. À faire une fois le site sur Netlify :

1. Sur GitHub : *Settings → Developer settings → OAuth Apps → New OAuth App*.
   - Homepage URL : l'URL du site Netlify.
   - Authorization callback URL : `https://api.netlify.com/auth/done`.
   Noter le *Client ID* et générer un *Client secret*.
2. Sur Netlify : *Site configuration → Access & security → OAuth → Install provider* → GitHub, et coller l'ID et le secret.
3. Donner à Elo et Guillaume un accès en écriture au dépôt (*Settings → Collaborators*).
   Ils se connectent sur `https://<le-site>/admin/`. Chaque modification crée un commit, et le site se reconstruit tout seul.

> Pour tester l'admin **en local** : lancer `npx decap-server` dans un terminal et ajouter
> `local_backend: true` en haut de `public/admin/config.yml` (à retirer ensuite).
