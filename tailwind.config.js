/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "#010A13",
        "panels_cards": "#1E282D",
        "text_headings": "#F0F0F0",
        "primary_accent": "#0BC4B6",
        "secondary_accent": "#C89B3C"
      }
    },
  },
  plugins: [],
}
