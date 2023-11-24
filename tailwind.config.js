/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      skew: {
        '-12': '-12deg',
      },
      zIndex: {
        '-10': '-10',
      },
    },
  },
  plugins: [],
}