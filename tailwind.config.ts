import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "var(--bg)",
        foreground: "var(--text)",
        primary: {
          DEFAULT: "var(--gold)",
          hover: "#bd9b4c", // Slightly darker gold
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "#94a3b8",
        },
        card: {
          DEFAULT: "var(--panel)",
          foreground: "var(--text)",
        },
        border: "var(--border)",
      },
      fontFamily: {
        serif: ["var(--font-inter)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 20px -5px var(--gold)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
