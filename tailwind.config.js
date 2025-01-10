const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
        //bogart: ['Bogart', 'sans-serif']
      },
      colors: {
        mustard: '#FFDD57', 
        burgundy: '#800020', 
      },
    },
  },
  plugins: [],
};