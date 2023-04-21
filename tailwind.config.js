/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans", ...defaultTheme.fontFamily.sans],
        inter: ["Inter"],
      },
      colors: {
        heading: "#333F48",
        darkBlue: "#002940",
        mercury: "#CCCCCC",
        inner: "#D6D9DA",
        outer: "#ADB2B6",
        innerActive: "#D6FFCF",
        outerActive: "#2D8C00",
      },
    },
  },
  plugins: [],
};
