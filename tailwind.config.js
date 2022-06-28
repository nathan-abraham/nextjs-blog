/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui"),
  ],
  daisyui: {
    themes: [
      {
        garden: {
          ...require("daisyui/src/colors/themes")["[data-theme=garden]"],
        },
        forest: {
          ...require("daisyui/src/colors/themes")["[data-theme=forest]"],
          "base-100": "#292c35",
        }
      }
    ]
  }
}
