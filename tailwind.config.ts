import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: '#2E4608', // Forest Green → principal
        verdant: '#5A734A', // Verdant Accent → acentos/hover
        earth: '#ECE7D5', // Tierra Suave → fondo general
        neutralLight: '#F5F0E6', // Neutro Claro → secciones secundarias
        darkGreen: '#3D550C', // Verde Oscuro → navbar/footer
      },
    },
  },
  plugins: [],
};

export default config;
