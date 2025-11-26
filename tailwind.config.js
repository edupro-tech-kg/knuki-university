/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // PRIMARY - COLORS
        primary: "#751715",
        "primary-background": "#FFFFFF",
        
        // TEXT - COLORS  
        "text-accent": "#751715",      
        "text-primary": "#0D0D0D",
        "text-secondary": "#898989",
        
        // STROKE - COLORS
        stroke: "#EEEEEE",
        
        // BUTTON - COLORS
        "button-primary": "#A22220",
        "button-secondary": "#3C3C3C",
      },
      
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Cormorant Garamond", "ui-serif", "Georgia", "serif"],
      },
      
      boxShadow: {
        soft: "0 18px 38px rgba(0,0,0,0.08)",
        card: "0 18px 28px rgba(26,26,26,0.06)",
      },
      backgroundImage: {
        "hero-pattern": "linear-gradient(120deg, rgba(212, 19, 16, 0.65), rgba(13,13,13,0.75)), url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1600&q=80')",
        "about-pattern": "radial-gradient(circle at 20% 20%, rgba(117,23,21,0.18), transparent 25%), radial-gradient(circle at 80% 10%, rgba(13,13,13,0.15), transparent 22%)",
      },
    },
  },
  plugins: [],
};