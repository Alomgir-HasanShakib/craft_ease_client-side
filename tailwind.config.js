/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#378CE7",
        secondary: "#67C6E3",
        btn: "#5356FF",
      },
      backgroundColor: {
        primary: "#378CE7",
        secondary: "#67C6E3",
        btn: "#5356FF",
      },
      borderColor: {
        primary: "#5356FF",
      },
    },
  },
  plugins: [require("daisyui")],
};
