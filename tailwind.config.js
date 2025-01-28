/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: '#0B132B', // Background color
        blue: {
          500: '#1E90FF', // Blue for buttons/active
          700: '#1B75BB', // Darker blue for level badge
        },
        yellow: {
          400: '#FFC107', // Coins color
        },
        gray: {
          400: '#B0B0B0', // Inactive text
          500: '#888', // Icons
          600: '#444', // Progress bar background
          800: '#1E1E1E', // Stats card
        },
      },
      fontFamily: {

        'pixelify': ['"Pixelify Sans", sans-serif'] // Add your custom font name here

    }
    },
  },
  plugins: [],
}

