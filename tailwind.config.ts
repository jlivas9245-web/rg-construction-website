import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        brand: {
          50: "#fff8eb",
          100: "#feefc7",
          200: "#fddc8a",
          300: "#fcc34d",
          400: "#fbab24",
          500: "#f5880b",
          600: "#d96606",
          700: "#b44609",
          800: "#92360e",
          900: "#782e0f",
          950: "#451603",
        },
        ink: {
          50: "#f6f7f8",
          100: "#eceef1",
          200: "#d4d9df",
          300: "#aeb7c2",
          400: "#82909f",
          500: "#637283",
          600: "#4e5b6c",
          700: "#404a58",
          800: "#37404b",
          900: "#1c222a",
          950: "#11151b",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-oswald)", "var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(17, 21, 27, 0.25)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
