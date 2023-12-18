/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Poppins: 'Poppins',
        Raleway: 'Raleway',
      },
      // fontFamily: {
      //   MonoSpace: ['Space Mono', 'san-serif'],
      // },
      fontWeight: {
        bold: 700,
        normal: 400,
      },
      fontSize: {
        myFontSize: '1.3rem',
      },
    },
  },
  plugins: [],
};
