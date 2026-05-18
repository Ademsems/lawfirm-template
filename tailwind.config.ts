import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark:       "#0D1B2A",
        "dark-light": "#152535",
        gold:       "#C9A96E",
        "gold-light": "#E2C49A",
        cream:      "#FAFAF8",
        parchment:  "#F0EBE3",
        "text-light": "#E8E4DC",
        "text-muted": "#8A9BA8",
        charcoal:   "#1C1C1C",
        mid:        "#555555",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        body:    ["'Inter'", "sans-serif"],
        sans:    ["'Inter'", "sans-serif"],
      },
      keyframes: {
        floatY: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":       { transform: "translateY(-20px)" },
        },
        floatX: {
          "0%, 100%": { transform: "translateX(0px)" },
          "50%":       { transform: "translateX(-15px)" },
        },
      },
      animation: {
        "float-y": "floatY 12s ease-in-out infinite",
        "float-x": "floatX 16s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
