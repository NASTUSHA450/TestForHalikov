/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily:{
      inter: ["Inter",'serif']
    },
    colors: {
      magenta: "#E40045",
      green: "#06C270",
      orange: "#FF8800",
      blue: "#2A5AEF",
      darkBlue: "#2E3A59",
      darkGray: "#8F9BB3",
      gray: "#E4E9F2",
      white: "#FFFFFF",
      light: "#F7F9FC",
    },
    fontSize: {
      xs: "11px",
      sm: "12px",
      tiny: "14px",
      base: "16px",
      lg: "22px",
    },
    borderRadius: {
      none: "0",
      sm: "8px",
      md: "16px",
      full: "9999px",
    },
    boxShadow: {
      bubble: '2px 10px 10px rgb(0, 0, 0, 0.2)',
      bar: '2px 5px 5px rgb(0, 0, 0, 0.2)'
    },
    extend: {},
  },
  plugins: [],
};
