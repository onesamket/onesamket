/** @type {import('tailwindcss').Config} */
import daiayui from 'daisyui';
import preline from 'preline/plugin';
export default {
  content: [
    "./index.html",
    "./app/**/*.{js,ts,jsx,tsx}",
    './node_modules/preline/preline.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },

  daisyui: {
    themes: ["nord", "corporate", "lofi", "black"],
  },
  plugins: [
    daiayui,
    preline
  ],
}