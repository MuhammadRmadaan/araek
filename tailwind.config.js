/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: ["#app"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "main-gold": "#8F6F30",
        "main-gold-light": "#",
        "main-gold-dark": "#654D20",
        "main-dark": "#",
        "main-dark-light": "#",
      },
    },
    fontFamily: {
      // Vazirmatn: ["Vazirmatn"],
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
