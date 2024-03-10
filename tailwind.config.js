/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },
    },
  },
  
  daisyui: {
    themes: [
      {
        windborne: {
        
          "primary": "#00b4d8",
                  
          "secondary": "#064866",
                  
          "accent": "#0077b6",
                  
          "neutral": "#f1f1f1",
                  
          "base-100": "#ffffff",
                  
          "info": "#00b4d8",
                  
          "success": "#a3e635",
                  
          "warning": "#f43f5e",
                  
          "error": "#f97316",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

