/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4335DE',
        secondry: '#FFC247',
        primaryBackground: '#FFC247',
        secondryBackground: '#F3F8FF',
        primaryText: '#02033B',
      },
    },
  },
  plugins: [],
}
