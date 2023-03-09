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
        'dark-blue': '#142c61',
        'sea-green': '#2a9d8f',
        'faded-orange': '#ff9770',
      },
    },
  },
  plugins: [],
}
