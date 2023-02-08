/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      xsm: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      fontFamily: {
        latoRegular: ['Lato-Regular', 'sans-serif'],
        latoBold: ['Lato-Bold', 'sans-serif'],
      },
      colors: {
        primary: '#FCA311',
        secondary: '#F5F5F5',
        tertiary: '#F5F5F5',
        quaternary: '#F5F5F5',
        quinary: '#F5F5F5',
        senary: '#F5F5F5',
        septenary: '#F5F5F5',
        octonary: '#F5F5F5',
        nonary: '#F5F5F5',
      },
    },
  },
  /* eslint-disable global-require */
  plugins: [
    require('@tailwindcss/forms'),
  ],
  /* eslint-enable global-require */
};
