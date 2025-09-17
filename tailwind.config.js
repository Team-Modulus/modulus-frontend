// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // adjust if you use HTML files or other folders
    "./public/index.html",        // optional, if you use plain HTML in public folder
  ],
  theme: {
    extend: {
      fontFamily: {
        exo: ['"Exo 2"', 'sans-serif'],
      },
    
    },
  },
  plugins: [],
}
