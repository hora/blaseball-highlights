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
        'exo': ['"Exo"', 'sans-serif'],
      },
      colors: {
        'navy-blue': '#003049',
        'dark-blue': '#142c61',
        'darker-blue': '#00283c',
        'sea-green': '#2a9d8f',
        'faded-orange': '#ff9770',
        'pink': '#ffc0cb',
        'faded-blue': '#33596d',
      },
      lineHeight: {
        'extra-tight': '1.15',
      },
      keyframes: {
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        typing: 'typing 1.5s steps(40, end)',
      },
    },
    data: {
      sticky: 'sticky="true"',
    },
  },
  plugins: [],
}
