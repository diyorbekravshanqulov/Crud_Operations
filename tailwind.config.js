/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "20px",
    },
    extend: {
      backgroundColor: {
        gradient: "linear-gradient(71.17deg, #FEAF00 19.35%, #F8D442 90.12%)",
      },
    },
  },
  plugins: [],
};
