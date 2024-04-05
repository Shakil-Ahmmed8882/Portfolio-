/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#886EF4",
        "primary-bg": "#FCFFFC",
        "description-text": "#666666",
        "hover-bg": "#4ADE80",
        "hover-text": "white",
      },
      // fonts
      fontFamily: {
        title: ["Mulish"],
        body: ["Mulish"],
        // caveat:'Caveat'
      },

      // Breakpoints
      // screens: {
      //   // sm: { min: "400px", max: "500px" },
      // },
    },
  },
  plugins: [],
};
