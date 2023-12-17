/** @type {import('tailwindcss').Config} */
import ui from 'daisyui';
export default {
  content: [
    "./index.html",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',

  daisyui: {
    themes: ["nord", "corporate", "lofi", "black"],
  },
  plugins: [
    ui,
  ],
}