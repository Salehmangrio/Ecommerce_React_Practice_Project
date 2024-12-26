/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'girl': 'url("./src/assets/pointing_girl.png")',
      }
    },
  },
  plugins: [],
}
