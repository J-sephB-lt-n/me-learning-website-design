/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors: {
        "projcol-background": "#013220",
        "projcol-background-transparent": "#01322000",
        "projcol-logo": "#56f5a3",
        "projcol-grey-white": "#D3D3D3",
        "projcol-subtle-green": "#097969",
      },
    },
  },
  plugins: [],
};
