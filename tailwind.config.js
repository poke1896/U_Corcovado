/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: '#2E4608', // principal
        verdant: '#5A734A', // acentos/hover
        earth: '#ECE7D5', // fondo general
        neutralLight: '#F5F0E6', // secciones secundarias/cards
        darkGreen: '#3D550C', // navbar/footer
      },
    },
  },
  plugins: [],
};
