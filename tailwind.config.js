module.exports = {
  presets: [
    require('./company_styles')
  ],  
  purge: {
    enabled: false,
    content: ['./dist/**/*.html'],
  }, 
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    debugScreens: {
      position: ['top', 'left'],
    },
    container: {
      center: true,
           padding: {
            DEFAULT: '0.5rem',
            sm: '1rem',
            lg: '1.5rem',
            xl: '2rem',
            '2xl' : '4rem' 
          },
        },
    
    extend: {

    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ]
}
