// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        phlox: "#CAA9F3",       // Светло-фиолетовый
        verbena: "#B37AD4",     // Насыщенный фиолетовый
        periwinkle: "#7997E6",  // Голубой
        atlantis: "#206ABC",    // Синий
        phthalo: "#0E155E",     // Глубокий темно-синий
        beige: "#FAF4CD",       // Оставляем для фона как песок
        coral: "#F28983",       // Оставим для акцентов (как кораллы)
      },
      fontFamily: {
        sans: ['var(--font-montserrat)'],
        accent: ['var(--font-satisfy)'],
      },
    },
  },
  plugins: [],
};
export default config;