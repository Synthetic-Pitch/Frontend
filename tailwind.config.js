/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Include all files in the src folder
    "./public/index.html", // Include the HTML entry point if applicable
  ],
  theme: {
    extend: {
      
    },
    screens:{
      'xs': '320px',
      'ml': '425px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}