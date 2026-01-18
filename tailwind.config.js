/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eaf2fb',
          100: '#d6e4f7',
          200: '#adc9ef',
          300: '#83ade6',
          400: '#5b92de',
          500: '#3378d6',
          600: '#2960ab',
          700: '#1f4881',
          800: '#153056',
          900: '#0c182c',
        },
        accent: '#9a0201', // tono bordó institucional
      },
    },
  },
  plugins: [],
}

