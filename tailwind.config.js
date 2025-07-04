/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
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
      container: {
        center: true,
      },
      screens: {
        'mobileM': '375px',
        'mobileL': '425px',
        'tablet': '768px',
        'laptop': '1024px',
        'laptopL': '1440px',
        'ipadpro': { 'raw': '(width: 1024px) and (min-height: 1000px)' },
        'nesthub': { 'raw': '(width: 1024px) and (max-height: 700px)' },
        'nesthubmax': { 'raw': '(width: 1280px) and (max-height: 900px)' },
      },
    },
  },
  plugins: [],
}

