/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", 
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'SILVER': '#C8D3D5', 
      'skyBlue': '#0ACDFF',
      'springGreen': '#5EFC8D',
      'strong-white': '#ffffff',
      },
    },
  },
};

