/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
        inconsolata: ["Inconsolata"],
        body: ["Inconsolata", "monospace"], // Inconsolata for headings
        heading: ["Inter", "sans-serif"], // Inter for body text
      },
      keyframes: {
        animatedgradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        beat: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.4)" },
        },
      },
      backgroundSize: {
        "300%": "300%",
      },
      animation: {
        gradient: "animatedgradient 4s ease infinite alternate",
        beat: "beat 1s infinite alternate",
      },
    },
  },
  plugins: [],
};
