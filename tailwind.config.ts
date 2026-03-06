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
        navy: {
          50: "#eef2f7",
          100: "#d9e2ec",
          200: "#b3c5d9",
          300: "#8ca3c2",
          400: "#6681ab",
          500: "#4a6294",
          600: "#3a4f78",
          700: "#2d3d5c",
          800: "#1f2a40",
          900: "#0f1520",
          950: "#080b12",
        },
        accent: {
          DEFAULT: "#22c55e",
          light: "#4ade80",
          dark: "#16a34a",
        },
        /** Rail accents: Waterloo (blue), National Team (amber/gold), AMC (green) */
        rail: {
          waterloo: "#2563eb",
          team: "#d97706",
          amc: "#16a34a",
        },
        /** Warm highlight for milestone badges (Burning Math) */
        gold: {
          DEFAULT: "#d97706",
          light: "#fbbf24",
          dark: "#b45309",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
