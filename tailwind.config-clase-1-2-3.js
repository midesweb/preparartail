module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        'main_sm': '1fr 300px',
        'main_lg': '210px 1fr 320px',
      },
      screens: {
        'xs': '420px',
      },
      maxWidth: {
        '300': '300px',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [
     require('@tailwindcss/forms'),
  ],
}
