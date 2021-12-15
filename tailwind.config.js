module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'blue': '#4C65F7',
      'purple': '#B25CFA',
      'pink': '#FF62AA',
      'orange': '#F37133',
      'yellow': '#FFB449',
      'lightblue': '#6CB4E0',
      'white': '#FFF',
      'black': '#000',
      'lightgrey': '#f5f5f5'
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Cormorant Garamond', 'serif'],
    },
    fontSize: {
      'headingXL': ['8rem'],
      'heading': ['6rem'],
      'subHeading': ['4rem'],
      'paragraph': ['2rem'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
};
