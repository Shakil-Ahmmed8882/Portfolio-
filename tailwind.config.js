/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#4ADE80",
        "primary-bg": "#FCFFFC",
        "description-text": "#666666",
        "hover-bg": "#4ADE80",
        "hover-text": "white",
      },
      // fonts
      fontFamily: {
        title: ["Mulish"],
        body: ["Mulish"],
      },

      // Breakpoints
      screens: {
        sm: { min: "400px", max: "500px" },
        // sm:[{min:'400px',max:'500px'},{min:800px}],// within that range or minwidht of 800px
        //media query
        /* tall:{
             raw: 'min-height:300px' //use -> tall:bg-red-400
          
          */
      },
    },
  },
  plugins: [],
};
