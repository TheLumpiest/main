/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    'bg-red-500',
    'bg-blue-500',
    'lg:text-4xl',
  ]
}

