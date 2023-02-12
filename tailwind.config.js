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
        bg_primary: '#FFFFFF',
        bg_secondary: '#F5F5F5',
        bg_tertiary: '#E5E5E5',
        dark_yellow: '#F2C94C',
        very_dark_yellow: '#FD8F0C',
        light_limerick: '#DCEAAA',
        dark_limerick: '#A4D301',
        very_dark_limerick: '#97BF0F',
      },
    },
  },
  variants: {
    extend: {
      translate: ["responsive", "group-hover", "hover", "focus"],
    },
  },
  /* eslint-disable global-require */
  plugins: [
    require('@tailwindcss/forms'),
  ],
  /* eslint-enable global-require */
};
