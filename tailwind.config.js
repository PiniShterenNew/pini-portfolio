/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EEF2FF',
          100: '#E0E7FF',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
          from: '#6366F1',
          via: '#8B5CF6',
          to: '#EC4899',
        },
        accent: '#EC4899',
        surface: '#FFFFFF',
        bg: '#FDFDFF',
        text: {
          main: '#1F2937',
          subtle: '#4B5563',
        },
      },
      borderRadius: {
        lg: '16px',
        xl: '24px',
      },
      boxShadow: {
        soft: '0 4px 20px rgba(139, 92, 246, 0.15)',
        hover: '0 6px 24px rgba(139, 92, 246, 0.2)',
        card: '0 2px 12px rgba(139, 92, 246, 0.08)',
      },
      fontFamily: {
        sans: ['Heebo', 'Plus Jakarta Sans', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Heebo', 'sans-serif'],
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
    },
  },
  plugins: [],
}

