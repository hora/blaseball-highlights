/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Open Sans"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      colors: {
        'navy-blue': '#003049',
        'sea-green': '#2a9d8f',
      },
    },
  },
  plugins: [],
}
