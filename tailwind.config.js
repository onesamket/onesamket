/** @type {import('tailwindcss').Config} */
import ui from 'daisyui';
export default {
  content: [
    "./public/**/*.{html}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media',

  daisyui: {
    themes: ["night", "nord", "corporate", "lofi", "black",],
  },
  plugins: [
    ui,
  ],
}