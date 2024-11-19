/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customRed: '#b50a3f',
        customGrey: '#fff',
        bgroungColor: '#d6d6d639',
        bgroundColorCream: '#fdeaea',
       
      },
      keyframes: {
        shadowPulse: {
          '0%, 100%': { boxShadow: '#b50a3f' }, // To'g'ri sintaksis
          '50%': { boxShadow: '0 0 10px 7px #b50a3f' },
        },
      },
     
    },
  },
  plugins: [],
}
