/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'button-color' : '#B67575',
        'rose-color' : '#A34E4E',
        'from-color' : '#EACDCD',
        'name-color' : '#7A1E1E'
      }
    },
  },
  plugins: [],
}