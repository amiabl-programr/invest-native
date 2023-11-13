/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}, ./app/**/*.{js,jsx,ts,tsx}, ./app/index.js"],
  theme: {
    extend: {
      colors: {
        "pry-col": "#31A062"
      },
    },
  },
  plugins: [],
}

