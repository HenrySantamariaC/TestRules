/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "ui-colors": {
          primary: '#8673fe',
          secondary: '#191923',
          accent: '#8cd1d2',
          neutral: '#292937',
          base: '#414154',
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

