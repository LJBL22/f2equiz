/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      tablet: '32.5rem', //520px ___430px (min 375px) // 430~768px (tablet）
      laptop: '48rem', //768px // 768~1024px (laptop)
      desktop: '64rem', //1024px // 1024~1440px (desktop)
      screen: '90rem', //1440px // 1440px+ (screen)
    },
    fontFamily: {
      'rubik': ['Rubik', 'sans-serif'],
    },
    extend: {
      colors: {
        'purple': '#A729F5',
        'navy': {
          'grey': '#626C7F',
          DEFAULT: '#3B4D66',
          'dark': '#313E51',
        },
        'light-bluish': '#ABC1E1',
        'light-grey': '#F4F6FA',
        'pure-white': '#FFFFFF',
        'green': '#26D782',
        'red': '#EE5454',
      },
    }
  },
  plugins: [],
}