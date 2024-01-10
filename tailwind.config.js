/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: '375px',
      tablet: '768px',
      desktop: '1440px',
    },
    colors: {
      'purple': '#A729F5',
      'navy': {
        grey: '#626C7F',
        DEFAULT: '#3B4D66',
        dark: '#313E51',
      },
      'light-bluish': '#ABC1E1',
      'light-grey': '#F4F6FA',
      'pure-white': '#FFFFFF',
      'green': '#26D782',
      'red': '#EE5454',
    },
    fontFamily: {
      'rubik': ['Rubik', 'sans-serif'],
    }
  },
  plugins: [],
}