/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#751715",
        background: "#FFFFFF",
        "text-accent": "#751715",
        "text-primary": "#0D0D0D",
        "text-secondary": "#898989",
        stroke: "#EEEEEE",
        "button-primary": "#A22220",
        "button-secondary": "#3C3C3C",
      },

      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Cormorant Garamond", "ui-serif", "Georgia", "serif"],
        cormorant: ['"Cormorant Garamond"', "serif"],
      },

      boxShadow: {
        soft: "0 18px 38px rgba(0,0,0,0.08)",
        card: "0 18px 28px rgba(26,26,26,0.06)",
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(120deg, rgba(212, 19, 16, 0.65), rgba(13,13,13,0.75)), url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1600&q=80')",
        "about-pattern":
          "radial-gradient(circle at 20% 20%, rgba(117,23,21,0.18), transparent 25%), radial-gradient(circle at 80% 10%, rgba(13,13,13,0.15), transparent 22%)",
      },
      fontSize: {
        headline1: ["72px", { lineHeight: "120%", letterSpacing: "-0.04em", fontWeight: "700" }],
        headline2: ["50px", { lineHeight: "120%", letterSpacing: "-0.04em", fontWeight: "600" }],
        headline3: ["34px", { lineHeight: "120%", letterSpacing: "0.01em", fontWeight: "700" }],
        headline4: ["28px", { lineHeight: "120%", letterSpacing: "0.01em", fontWeight: "700" }],
        headline5: ["24px", { lineHeight: "120%", letterSpacing: "0.01em", fontWeight: "700" }],
        headline6: ["18px", { lineHeight: "120%", letterSpacing: "0.01em", fontWeight: "700" }],
        labelLg: ["34px", { lineHeight: "120%", letterSpacing: "0.01em", fontWeight: "500" }],
        labelMd: ["28px", { lineHeight: "120%", letterSpacing: "0.01em", fontWeight: "500" }],
        labelSm: ["24px", { lineHeight: "120%", letterSpacing: "0.01em", fontWeight: "500" }],
        bodyLg: ["20px", { lineHeight: "120%", letterSpacing: "0.01em", fontWeight: "400" }],
        bodyMd: ["18px", { lineHeight: "120%", letterSpacing: "0.01em", fontWeight: "400" }],
        bodySm: ["16px", { lineHeight: "120%", letterSpacing: "0.01em", fontWeight: "400" }],
        bodyCap: ["14px", { lineHeight: "120%", letterSpacing: "0.01em", fontWeight: "400" }],
        bodyCapSm: ["12px", { lineHeight: "120%", letterSpacing: "0.01em", fontWeight: "400" }],
      },
      // ДОБАВЬ ЭТИ НАСТРОЙКИ ДЛЯ 3D ЭФФЕКТОВ
      rotate: {
        "y-5": "rotateY(5deg)",
        "y-8": "rotateY(8deg)",
        "y-10": "rotateY(10deg)",
        "y-12": "rotateY(12deg)",
        "y-15": "rotateY(15deg)",
        "y-20": "rotateY(20deg)",
        "y--5": "rotateY(-5deg)",
        "y--8": "rotateY(-8deg)",
        "y--10": "rotateY(-10deg)",
        "y--12": "rotateY(-12deg)",
        "y--15": "rotateY(-15deg)",
        "y--20": "rotateY(-20deg)",
      },
      perspective: {
        1000: "1000px",
        1200: "1200px",
        1500: "1500px",
      },
      transformStyle: {
        "3d": "preserve-3d",
      },
      backfaceVisibility: {
        hidden: "hidden",
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-transparent': {
          '&::-webkit-scrollbar': {
            width: '0px',
            height: '0px',
            background: 'transparent',
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'transparent',
          },
          'scrollbar-width': 'none',
          '-ms-overflow-style': 'none', 
        },
        '.scrollbar-subtle': {
          '&::-webkit-scrollbar': {
            width: '4px',
            height: '4px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'rgba(0, 0, 0, 0.1)',
            borderRadius: '2px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: 'rgba(0, 0, 0, 0.2)',
          },
          'scrollbar-width': 'thin',
          'scrollbar-color': 'rgba(0, 0, 0, 0.1) transparent',
        },
      }
      addUtilities(newUtilities)
    }
  ],
};