/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--bg-primary))",
        foreground: "hsl(var(--text-primary))",
        primary: "hsl(var(--primary))",
        "primary-hover": "hsl(var(--primary-hover))",
        secondary: "hsl(var(--secondary))",
        tertiary: "hsl(var(--tertiary))",
        border: "hsl(var(--border))",
        "border-hover": "hsl(var(--border-hover))"
      },
      fontFamily: {
        "sans": ["Assistant", "sans-serif"]
      },
      boxShadow: {
        'glow-soft': '0 0 25px -5px rgba(59, 130, 246, 0.4), 0 10px 20px -10px rgba(59, 130, 246, 0.2)',
      },
      animation: {
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        'blob': {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}

