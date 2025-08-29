/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // Habilitar el modo oscuro basado en la clase 'dark'
  theme: {
    extend: {
      colors: {
        'olinto-dark-bg': '#0B0F14',
        'olinto-primary': '#05D5FF',
        'olinto-secondary': '#FF2E88',
        // Escala de grises y otros acentos
        'olinto-neutral-900': '#1A202C',
        'olinto-neutral-800': '#2D3748',
        'olinto-neutral-700': '#4A5568',
        'olinto-neutral-100': '#F7FAFC',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Usar Inter o fuentes del sistema
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
