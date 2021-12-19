module.exports = {
  content: ["./*.html", "./src/*.{html,js,jsx,ts,tsx}", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '375px',
      lg: '1440px',
    },
    colors: {
      'cyan': 'hsl(178, 100%, 50%)',
      'soft-blue': 'hsl(215, 51%, 70%)',
      'main-bg': 'hsl(217, 54%, 11%)',
      'card-bg': 'hsl(216, 50%, 16%)',
      'line': 'hsl(215, 32%, 27%)',
      'white': 'hsl(0, 0%, 100%)',
    },
    extend: {
      boxShadow: {
        'card': '0px 25px 50px rgba(0, 0, 0, 0.1)'
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif']
      },
      fontSize: {
        'body': ['18px', '26px'],
        'heading': '22px',
        'caption': '16px',
        'caption-bold': '16px'
      }
    },
  },
  plugins: [],
}
