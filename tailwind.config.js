/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    transitionProperty: {
      height: 'height'
    },
    fontFamily: {
      'playfair': ['"Playfair Display"'],
      'lato': ['Lato'],
      'spartan': ['"League Spartan"'],
      'poppins': ['Poppins'],
    },
    extend: {
      transitionProperty: {
        height: 'height',
      },
    },
  },
  plugins: [],
};
