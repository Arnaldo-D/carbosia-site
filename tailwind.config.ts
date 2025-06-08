import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './src/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],

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
          DEFAULT: '#2db23c',
          dark: '#21952f',
          light: '#e6f6e9',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },

  // === 3 · plugin Typography ================================
  plugins: [typography],
}

export default config
