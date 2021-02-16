const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: false,
    content: ['./dist/**/*.html'],
  }, 
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    debugScreens: {
      position: ['top', 'left'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      black: colors.black,
      blue: colors.blue,
      yellow: colors.yellow,
      gray: colors.blueGray,
      turquoise: colors.cyan,
      green: colors.lime,
      red: colors.rose,
    }, 
    extend: {
      fontFamily: {
        headline: ['Oswald']
       },
       colors: {
        mainColor: '#1E293B'
       }, 
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ]
}
