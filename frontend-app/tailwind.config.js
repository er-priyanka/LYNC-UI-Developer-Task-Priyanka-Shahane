/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'grid': "url('../src/Assets/Grid.png')",
        'background': "url('./Assets/Background.png')",
        'topSection': "url('../src/Assets/BG_Pattern.png')",
        'community': "url('../src/Assets/image_99.png')",
        'rectangleBg': "url('../src/Assets/Rectangle_20.png')",
        'Floor_Pattern': "url('../src/Assets/Floor_Pattern.png')"
      }
    },
  },
  plugins: [],
}

