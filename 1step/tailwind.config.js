/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'main':'#65467C',
        '#E6E6E6':'#E6E6E6',
        '#F2F2F2':'#F2F2F2',
        '#EDDFFF':'#EDDFFF',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}