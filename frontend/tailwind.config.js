/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{html,js,ts,jsx,tsx}' // include TypeScript/React files so Tailwind can tree‑shake class names used in TSX
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

