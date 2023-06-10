/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {},
    colors: ({colors})=>({...colors, 'tt-primary': '#047c8c' })
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}

