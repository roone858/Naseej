/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C1272D",
        primaryLight: "#E6676B",
        primaryDark: "#8A1C21",
        secondary: "#F8F1E5",
        dark: "#2A2A2A",
        light: "#FFFFFF",
        gray: "#F5F5F5",
      },
      fontFamily: {
        sans: ["Tajawal", "sans-serif"],
      },
    },
  },
  plugins: [],
} 