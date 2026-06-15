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
          50: "#eef4ff",
          100: "#d9e7ff",
          200: "#bcd4ff",
          300: "#8eb6ff",
          400: "#5b8def",
          500: "#3b6be3",
          600: "#2451cf",
          700: "#1f41b0",
          800: "#1e3a8a",
          900: "#1b336f",
          950: "#122047",
        },
        // Warm gold accent — reserved for star ratings & small highlights.
        accent: {
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
        },
        ink: {
          50: "#f4f6fb",
          100: "#e8ecf4",
          200: "#d2dae8",
          300: "#aab6cc",
          400: "#7d8ba6",
          500: "#5c6a86",
          600: "#47536b",
          700: "#3a4458",
          800: "#2c3548",
          900: "#171d2b",
          950: "#0c1019",
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
