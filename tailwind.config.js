/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#0c0b17',
      secondary: '#6f48e2',
      lightgrey:'#262628',
      darkgrey:'#171719',
      textgreylight:"#6d6d6f",
      white:'#EEE',
      black:'#000',
      // ...
    },
  },
  plugins: [],
}