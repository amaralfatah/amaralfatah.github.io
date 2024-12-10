/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{vue,js,ts,jsx,tsx}",
    "./components/**/*.{vue,js,ts,jsx,tsx}",
    "./layouts/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myblack: "#111111",
        mygray: "#B4B4B4",
        mywhite: "#EEEEEE",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
