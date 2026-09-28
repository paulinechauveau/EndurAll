import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Palette dérivée du logo Endurall (dégradé bleu → violet → orange)
        brand: {
          blue: '#1e40af',
          indigo: '#4338ca',
          violet: '#7c3aed',
          orange: '#f97316',
          red: '#ef4444',
          ink: '#0b1220', // texte sombre
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient':
          'linear-gradient(135deg, #1e40af 0%, #7c3aed 45%, #f97316 100%)',
        'brand-gradient-soft':
          'linear-gradient(135deg, rgba(30,64,175,0.08) 0%, rgba(124,58,237,0.08) 45%, rgba(249,115,22,0.08) 100%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
      },
    },
  },
  plugins: [typography],
};
