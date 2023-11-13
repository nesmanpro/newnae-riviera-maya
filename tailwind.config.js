const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        helvetica: 'helvetica',
        josefine: 'josefine',
        bebas: 'bebas'
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'azulClaro': '#219EBC',
      'azulOscuro': '#023047',
      'arenaClaro': '#FFF8EA',
      'arenaOscuro': '#FFE299',
    }
  },
  darkMode: "class",
  plugins: [nextui()],
};

