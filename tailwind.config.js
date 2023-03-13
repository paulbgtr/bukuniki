/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pageComponents/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f4abc4",

          secondary: "#3214e0",

          accent: "#f4abc4",

          neutral: "#141D24",

          "base-100": "#404258",

          info: "#4560E8",

          success: "#71E0C4",

          warning: "#D87C03",

          error: "#EC365E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
