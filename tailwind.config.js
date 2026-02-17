/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        indigo: {
          500: '#4f46e5',
          600: '#4338ca',
        }
      }
    },
  },
  plugins: [],
}
