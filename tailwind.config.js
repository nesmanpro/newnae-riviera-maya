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
      },
      screens: {
        '3xl': '1600px',
        '4xl': '1700px',
        '5xl': '1900px'

      }
    },
    colors: {
      transparent: 'transparent',
      'blanco': 'white',
      current: 'currentColor',
      'azulClaro': '#9BBEB8',
      'azulOscuro': '#023047',
      'arenaClaro': '#FFF8EA',
      'arenaOscuro': '#FFE299',
    }
  },
  darkMode: "class",
  plugins: [nextui()],
};

