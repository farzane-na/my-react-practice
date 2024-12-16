/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        "shabnam":"shabnam",
        "shabnamBold":"shabnam-bold",
        "shabnamLight" : "shabnam-light",
        "shabnamMedium" : "shabnam-medium",
        "shabnamThin" : "shabnam-thin"
      }
    },
    
    plugins: [],
}
}
