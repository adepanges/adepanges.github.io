/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'jost': ['Jost', 'sans-serif'],
      },
      lineHeight: {
        'snugish': '1.32',
      },
      maxWidth: {
        'letter': '66.40625rem',
      },
      maxHeight: {
        'letter': '85.9375rem',
      },
      height: {
        'letter': '85.9375rem',
        'letter-col-full': '77.9375rem',
      },
      screens: {
        'xsm': '500px',
      },
      spacing: {
        '1.6': '0.4rem',
      },
      columnGap: {
        '8': '2rem',
      },
    },
  },
  plugins: [],
  corePlugins: {
    // Enable CSS Grid
    gridTemplateColumns: true,
  },
}
