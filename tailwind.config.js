/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Nunito"],
      },
      fontWeight: {
        extralight: "200",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
    },
  },
  plugins: [],
}
