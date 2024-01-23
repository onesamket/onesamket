import type { Config } from "tailwindcss";
import ui from "daisyui";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "media",

  daisyui: {
    themes: ["night", "nord", "corporate", "lofi", "black"],
  },
  plugins: [ui],
};
export default config;
