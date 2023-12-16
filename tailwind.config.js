/** @type {import('tailwindcss').Config} */
import ui from 'daisyui';
export default {
  content: [
    "./index.html",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '576px',
      'md': '960px',
      'lg': '1440px',
    },
  },
  daisyui: {
    themes: ["nord", "corporate", "lofi", "black"],
  },
  plugins: [
    ui,
  ],
}