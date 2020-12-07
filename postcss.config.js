module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    require('cssnano')({
      preset: 'default',
    }),
  ]
}


// minimizar solo en env  https://wpack.io/tutorials/minimize-css-with-cssnano/