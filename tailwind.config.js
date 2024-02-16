/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-1': '#00b4d8',
        'blue-2': '#0077b6',
      }
    },
  },
  plugins: [require("daisyui")],
}

