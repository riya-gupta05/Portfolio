/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./tailwind_css/*.{html,js}"],
  theme: {
    screens: {
      phone: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {},
  },
  plugins: [],
}

