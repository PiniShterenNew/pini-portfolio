/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#8B5CF6',
          secondary: '#6366F1',
          accent: '#EC4899',
          dark: '#1B1529',
          text: '#1E1E2F',
        },
        surface: {
          base: '#FFFFFF',
          soft: '#F8F9FC',
        },
        blob: {
          pink: 'hsla(330, 75%, 65%, 0.3)',
          blue: 'hsla(221, 75%, 60%, 0.25)',
          purple: 'hsla(262, 75%, 63%, 0.25)',
        },
      },
      backgroundImage: {
        'grad-brand': 'linear-gradient(90deg, #6366F1, #8B5CF6, #EC4899)',
        'grad-dark': 'linear-gradient(180deg, #1B1529, #2C1F3D)',
        'grad-soft': 'linear-gradient(180deg, transparent 70%, #F6F0FF 100%)',
      },
      fontFamily: {
        heebo: ['Heebo', 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        card: '0 8px 32px rgba(0, 0, 0, 0.08)',
        glow: '0 0 40px rgba(139, 92, 246, 0.3)',
      },
      animation: {
        'blob': 'blob 7s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}

