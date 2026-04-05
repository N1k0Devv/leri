/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [ "Noto Sans Georgian", "system-ui", "sans-serif"],
        brand: ["EurostileGEO", "Outfit", "Inter", "sans-serif"],
      },
      colors: {
        // Flat structure to be safe with @apply
        "brand-black": "#020617",
        "brand-dark": "#0a0f1e",
        "brand-navy": "#111827",
        "brand-slate": "#1e293b",
        "brand-accent": "#f97316",
        "brand-info": "#38bdf8",
      },
      boxShadow: {
        "glow-orange": "0 0 20px -5px rgba(249, 115, 22, 0.4)",
        "glow-blue": "0 0 20px -5px rgba(56, 189, 248, 0.4)",
      },
      keyframes: {
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};
