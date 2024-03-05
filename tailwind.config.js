/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  daisyui: {
    themes: [
      {
        windborne: {
        
          "primary": "#00b4d8",
                  
          "secondary": "#0077b6",
                  
          "accent": "#03045e",
                  
          "neutral": "#90e0ef",
                  
          "base-100": "#f3f4f6",
                  
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

