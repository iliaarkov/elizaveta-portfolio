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
        // Палитра из твоих референсов
        maize: "#FCC74B",
        coral: "#F28983",
        papaya: "#E17126",
        junebud: "#C8D35F",
        oceanBlue: "#93ABD8",
        softPurple: "#B494F8",
        beige: "#FAF4CD",
        hotPink: "#F3619C",
      },
      borderRadius: {
        'bubble': '2rem',
        'super-bubble': '4rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;