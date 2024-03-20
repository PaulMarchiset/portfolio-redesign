/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      md: '500px',
      lg: '850px',
    },
    fontFamily: {
      'title': ['Bahnschrift', 'sans-serif'],
      'nav': ['Bahnschrift', 'sans-serif'],
      'body': ['Outfit', 'sans-serif'],
    },
    backgroundPosition: {
      'center': 'center',
      'top-4': 'center top -4rem',
    },
    extend: {
      fontSize: {
        'big-mobile': '20vw',
        'big-desktop': '12.5vw',
        'project-title': '5vw',
        'xxl': '5.5rem',
        'xl': '4rem',
        'l': '3.5rem',
        'm': '2.5rem',
        's': '2rem',
        'xs': '1.5rem',
        'xxs': '1.25rem'

      },
      gridTemplateColumns: {
        '8': 'repeat(8, 1fr))',
      },
      gridTemplateRows: {
        '9': 'repeat(9, 1fr))',
      },
      colors: {
        'whitezero': 'rgba(255, 255, 255, 0.5)',
      },
      margin: {
        'big-inline': '0 -3.125rem',
        'inline': '0 -1.5625rem',
        'img-about': '-3.125rem 0 -3.125rem -3.125rem',
      },
      plugins: [],
    }
  }
}