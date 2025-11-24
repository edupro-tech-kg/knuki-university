/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8A2B2B",
        accent: "#C3924B",
        dark: "#1A1A1A",
        light: "#F7F7F7",
      },
      fontFamily: {
        serif: ["Playfair Display", "ui-serif", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 38px rgba(0,0,0,0.08)",
        card: "0 18px 28px rgba(26,26,26,0.06)",
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(120deg, rgba(138,43,43,0.65), rgba(26,26,26,0.75)), url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1600&q=80')",
        "about-pattern":
          "radial-gradient(circle at 20% 20%, rgba(195,146,75,0.18), transparent 25%), radial-gradient(circle at 80% 10%, rgba(138,43,43,0.15), transparent 22%), radial-gradient(circle at 50% 80%, rgba(26,26,26,0.12), transparent 28%)",
      },
    },
  },
  plugins: [],
};
