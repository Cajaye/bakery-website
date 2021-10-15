module.exports = {
  mode: 'jit',
  purge: { enabled: true, content: ['./public/**/*.html', './public/**/*.js'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
