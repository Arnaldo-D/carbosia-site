/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],

  // === 1 · safelist =========================================
  // Impedisce a Tailwind di eliminare le utility di colore brand
  safelist: [
    'bg-brand',
    'hover:bg-brand-dark',
    'text-brand',
    'border-brand',
  ],

  // === 2 · tema esteso ======================================
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#17B47B',
          dark: '#0E8C60',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },

  // === 3 · plugin Typography ================================
  plugins: [require('@tailwindcss/typography')],
};
