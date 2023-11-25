/** @type {import('tailwindcss').Config} */
import daiayui from 'daisyui';
export default {
  content: [
    "./index.html",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },

  daisyui: {
    themes: ["light", "dark", "nord"],
  },
  plugins: [daiayui],
}