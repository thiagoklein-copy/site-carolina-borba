import type { Config } from "tailwindcss";

/**
 * Brand color tokens — mapped to CSS variables defined in globals.css.
 * Never hardcode hex values in components; use these named colors.
 */
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "var(--color-paper)",
        brown: "var(--color-brown)",
        "shadow-green": "var(--color-shadow-green)",
        bordo: "var(--color-bordo)",
        "green-medium": "var(--color-green-medium)",
        olive: "var(--color-olive)",
        "yellow-morning": "var(--color-yellow-morning)",
        terracotta: "var(--color-terracotta)",
        "rose-burnt": "var(--color-rose-burnt)",
        "clay-gray": "var(--color-clay-gray)",
      },
      fontFamily: {
        heading: ["var(--font-alegreya-sans)", "sans-serif"],
        body: ["var(--font-source-sans)", "sans-serif"],
        script: ["var(--font-caveat)", "cursive"],
      },
      fontSize: {
        h1: ["3.625rem", { lineHeight: "1.2", fontWeight: "500" }],
        "h1-mobile": ["2.125rem", { lineHeight: "1.25", fontWeight: "500" }],
        h2: ["2.5rem", { lineHeight: "1.25", fontWeight: "500" }],
        "h2-mobile": ["1.75rem", { lineHeight: "1.3", fontWeight: "500" }],
        body: ["1.125rem", { lineHeight: "1.65", fontWeight: "400" }],
        "body-mobile": ["1rem", { lineHeight: "1.65", fontWeight: "400" }],
        caption: ["0.875rem", { lineHeight: "1.5", fontWeight: "400" }],
      },
    },
  },
  plugins: [],
};

export default config;
