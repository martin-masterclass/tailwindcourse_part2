const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    screens: {
        'tablet' : '640px',
        'desktop' : '1000px',
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
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen desktop': {
            maxWidth: '1140px',
          },
        }
      })
    }
  ],
}

