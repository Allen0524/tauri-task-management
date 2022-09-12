/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        text: '#e5e7eb',

        primary: '#f056c7',
        secondary: '#8b87ea',
        tertiary: '#58e6d9',
        muted: '#605c9d',

        background: '#131127',
        outline: '#232140',
        surface: '#18162c',
      },
    },
  },
  plugins: [],
}
