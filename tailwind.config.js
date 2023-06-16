/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-base': '#141414',
        'light-base': '#a9a9a9',
        'light-layer': '#fafafa',
        'dark-layer': '#282828',
        'primary-base': '#230046',
        'primary-layer': '#320064',
      }
    },
  },
  plugins: [],
  // prefix: 'ts-'
}

