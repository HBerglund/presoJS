module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      background: '#4C65F7',
      primary: '#B25CFA',
      secondary: '#FF62AA',
      tertiary: '#f5f5f5',
      textPrimary: '#F37133',
      textSecondary: '#FFB449',
      textAlternative: '#6CB4E0',
    },
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
    },
  },
  plugins: [],
};
