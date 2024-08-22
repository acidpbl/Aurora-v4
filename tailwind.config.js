/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          "900-50": "#1717175c",
        },
      },
      fontFamily: {
        poppins: "poppins, sans-serif",
        monospace: "Fira Mono, sans-serif",
      },
      height: {
        34: "8.5rem",
      },
    },
  },
  plugins: [],
};
