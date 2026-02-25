/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{html,js,ts,jsx,tsx}' // include TypeScript/React files so Tailwind can tree‑shake class names used in TSX
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        slowZoom: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 40px rgba(168,85,247,0.4)' },
          '50%': { boxShadow: '0 0 70px rgba(168,85,247,0.8)' },
        },
        textGlow: {
          '0%, 100%': { textShadow: '0 0 10px rgba(168,85,247,0.6)' },
          '50%': { textShadow: '0 0 30px rgba(168,85,247,1)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        slowZoom: 'slowZoom 6s ease-in-out infinite',
        glowPulse: 'glowPulse 3s ease-in-out infinite',
        textGlow: 'textGlow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

