/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'grid': "url('../src/Assets/Grid.png')",
        'background': "url('../src/Assets/Background.png')",
        'topSection': "url('../src/Assets/BG_Pattern.png')",
      }
    },
  },
  plugins: [],
}

