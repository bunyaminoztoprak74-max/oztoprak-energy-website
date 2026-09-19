import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx,mdx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#07111f",
          900: "#0a1628",
          850: "#0d1d33",
          800: "#112844"
        },
        energy: {
          500: "#2fb7ff",
          600: "#0086d1",
          700: "#0369a1"
        },
        steel: "#b8c6d6",
        copper: "#e0a458"
      },
      boxShadow: {
        glow: "0 24px 80px rgba(47, 183, 255, 0.18)"
      }
    }
  },
  plugins: [typography]
};

export default config;
