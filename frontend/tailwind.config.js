/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        colorPurple: '#70259B',
        colorDarkPurple: '#430964',
        colorPink: '#D100C9',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  purge: false,
  plugins: [],
}
