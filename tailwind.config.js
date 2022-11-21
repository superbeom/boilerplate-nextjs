/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          40: "var(--primary-40)",
          DEFAULT: "var(--primary)",
        },
        background: "var(--background)",
        content: "var(--content)",
      },
    },
  },
  plugins: [],
};
