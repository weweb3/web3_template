module.exports = {
  content: ['./src/**/*.{jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: ['dark', 'light'],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}
