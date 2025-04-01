/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          200: "#f7f9fb",
          500: "#96989a",
        },
        blue: {
          300: "#dce2ff",
          500: "#a7aae9",
          600: "#4644d9",
        },
      },
    },
  },
  plugins: [],
};
