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
        rotate: {
          "0%": { transform: "rotate(0deg) scale(10)" },
          "100%": { transform: "rotate(-360deg) scale(10)" },
        },
        // flicker: {
        //   "0%, 100%": { opacity: "1" },
        //   "10%": { opacity: "0.6" },
        //   "20%": { opacity: "0.8" },
        //   "30%": { opacity: "0.3" },
        //   "40%": { opacity: "0.9" },
        //   "50%": { opacity: "0.5" },
        //   "60%": { opacity: "0.7" },
        //   "70%": { opacity: "0.2" },
        //   "80%": { opacity: "0.85" },
        //   "90%": { opacity: "0.4" },
        // },
      },
      backgroundSize: {
        "300%": "300%",
      },

      animation: {
        gradient: "animatedgradient 4s ease infinite alternate",
        beat: "beat 1s infinite alternate",
        rotate: "rotate 12s linear infinite",
        // flicker: "flicker 1s infinite",
      },
    },
  },
  plugins: [require("daisyui")],
};
