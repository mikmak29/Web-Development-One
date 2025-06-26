/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        allura: ['Allura', 'cursive'],
        anton: ['Anton', 'sans-serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
        ebgaramond: ['EB Garamond', 'serif'],
        greatvibes: ['Great Vibes', 'cursive'],
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        parisienne: ['Parisienne', 'cursive'],
        roboto: ['Roboto', 'sans-serif'],
      },
      screens: {
        'xs': '430px',
        'ss': '540px',
        'laptop': '1024px',
        'ipadpro': { 'raw': '(width: 1024px) and (min-height: 1000px)' },
        'nesthub': { 'raw': '(width: 1024px) and (max-height: 700px)' },
        'nesthubmax': { 'raw': '(width: 1280px) and (max-height: 900px)' },
      },
    },
  },
  plugins: [],
}

