import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#14262b", soft: "#3d5258", mute: "#5d7278" },
        teal: {
          50: "#eef6f5", 100: "#d6ebe8", 200: "#aed6d0", 300: "#7dbab3",
          400: "#4f9a93", 500: "#33807a", 600: "#276863", 700: "#1f5450",
          800: "#1b4441", 900: "#163937",
        },
        sand: { 50: "#fbf8f4", 100: "#f6f0e8", 200: "#ece2d3", 300: "#ddcdb6" },
        blush: { 50: "#fcf3f0", 100: "#f7e3dd", 200: "#efc9bf", 400: "#d9907f", 600: "#b25e4b" },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(20,38,43,.04), 0 8px 24px -12px rgba(20,38,43,.12)",
        lift: "0 2px 4px rgba(20,38,43,.05), 0 18px 40px -16px rgba(20,38,43,.22)",
      },
      maxWidth: { prose: "68ch" },
    },
  },
  plugins: [],
};

export default config;
