import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink:    { DEFAULT: "#0C0D0F", soft: "#9A9DA6" },
        paper:  { DEFAULT: "#0C0D0F" },
        line:   "#26282D",
        amber:  { DEFAULT: "#D9A24B", deep: "#B8842F" },
        white:  "#F5F3EE",
      },
      fontFamily: { sans: ["var(--font-fg)", "system-ui", "sans-serif"] },
      letterSpacing: { tightest: "-0.04em" },
    },
  },
  plugins: [],
} satisfies Config;
