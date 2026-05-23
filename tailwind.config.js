/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brandBg: '#0B0F19',
        brandSurface: '#161B26',
        citrusOrange: '#F2994A',
        citrusPink: '#EB5757',
      },
    },
  },
  plugins: [],
}
