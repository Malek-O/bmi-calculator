/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        colors: {
          blue: '#345FF6', 
          gunmetal: '#253347', 
          darkElectricBlue: '#5E6E85', 
          borders: '#D8E2E7', 
          pureWhite: '#FFFFFF',
        },
        backgroundImage: {
          'custom-gradient': 'linear-gradient(300deg, rgba(214,252,254,1) 0%, rgba(214,230,254,1) 100%)',
        }
      },
      screens: {
        xl: "1165px",
      },
    },
  },
  plugins: [],
}

