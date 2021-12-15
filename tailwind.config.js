module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {

    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Cormorant Garamond', 'serif'],
    },
    fontSize: {
      xl: ['7.5rem', { lineHeight: '1.1' }],
      lg: ['5rem', { lineHeight: '1.1' }],
      md: ['2.5rem', { lineHeight: '1.3' }],
      body: ['1.75rem', { lineHeight: '1.4' }],
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        background: '#000',
        primary: '#B25CFA',
        secondary: '#FF62AA',
        tertiary: '#4C65F7',
        textPrimary: '#FFF',
        textSecondary: '#b2b2b2',
        textAlternative: '#6CB4E0',
      },
    },
  },
  plugins: [],
};
