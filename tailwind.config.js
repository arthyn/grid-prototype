module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: '#000',
        white: '#FFF',
        washedGray: 'rgba(0, 0, 0, 0.04)',
        lightGray: 'rgba(0, 0, 0, 0.2)',
        silver: 'rgba(0,0,0, 0.1)',
        gray: 'rgba(0, 0, 0, 0.6)',
        midWhite:'rgba(255, 255, 255, 0.7)',
        lightWhite:'rgba(255, 255, 255, 0.4)',
        washedWhite:'rgba(255, 255, 255, 0.15)',
        blue:'#219DFF',
      },
      fontFamily: {
        sans: ['Inter', 'Inter UI', '-apple-system'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
