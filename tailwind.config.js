/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'sans': ['onest', 'sans-serif'],
    },

    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'xl': '1rem',
      '2xl': '3rem',
      '3xl': '5rem',
      'full': '9999px',
      'large': '12px',
    },
    'sm': '640px',


    'md': '768px',


    'lg': '1024px',


    'xl': '1280px',


    '2xl': '1536px',

  },



  plugins: [nextui()],
}

