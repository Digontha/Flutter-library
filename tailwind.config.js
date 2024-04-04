/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fourthColor: "#F0F0F0", // button hover color
      },
    },
   
  },
  plugins: [require("daisyui")],
}

