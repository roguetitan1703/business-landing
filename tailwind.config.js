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
    },
  },
  plugins: [],
};
