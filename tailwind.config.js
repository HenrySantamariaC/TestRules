/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "ui": {
          primary: '#6457E3',
          secondary: '#FFFFFF',
          accent: '#8cd1d2',
          neutral: '#292937',
          base: '#414154',
          neutral: {
            100: '#878CA8',
            200: '#323641',
            400: '#1F222A',
            600: '#181A20',
          }
        },
        cards: {
          orange: '#fe620b',
          green: '#027820',
          red: '#e50625',
          pink: '#f39ba9',
          purple: '#9e85c7',
          skyblue: '#9fd8ec',
          yellow: '#ffb902',
          rose: '#fc016b',
          turquoise: '#12d1c1',
        }
      }
    },
  },
  plugins: [],
}

