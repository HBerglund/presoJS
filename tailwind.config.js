module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      xl: ['6rem'],
      lg: ['5rem'],
      md: ['4rem'],
      sm: ['3rem'],
      xs: ['2rem'],
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
      },
      colors: {
        background: '#000',
        primary: '#B25CFA',
        secondary: '#FF62AA',
        tertiary: '#4C65F7',
        textPrimary: '#FFF',
        textSecondary: '#b2b2b2',
        textAlternative: '#B25CFA',
      },
      width: {
        '1000px': '62.5rem',
      },
    },
  },
  plugins: [],
};
