/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // colors: {
    //   primary: "#3252DF",
    //   secondary: "#152C5B",
    //   gray200: '#e9ecef'
    // },
    fontFamily: {
      sans: ["Poppins", ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
};
