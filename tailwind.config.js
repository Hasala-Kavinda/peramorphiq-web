/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colros: {
        'theme-meroon ': '#880000',
        'theme-yellow ': '#FFBE34',
      }
    },
  },
  plugins: [
  require("daisyui"),
  ],
}
