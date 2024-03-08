/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        handwrite: ['Cedarville Cursive', 'cursive'],
        marker: ['Permanent Marker', 'cursive'],
      },
    },
  },
  plugins: [],
}

