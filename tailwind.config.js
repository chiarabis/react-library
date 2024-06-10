/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': '#0a0a0a',
        'medium-gray': '#404040',
        'white': '#fafafa',
        'dusty-pink': '#bd7e88',
        'medium-dusty-pink': '#684148',
        'ottanium': '#26687c',
        'bordeaux': '#8f2734',
      }
    },
  },
  plugins: [],
  "files.associations": {
    "*.css": "tailwindcss"
  },
  "editor.quickSuggestions": {
    "strings": "on"
  },
}

