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
          muted: '#6B7280',
        },
        surface: {
          base: '#FFFFFF',
          soft: '#F8F9FC',
          warm: '#FDFBFF',
        },
        blob: {
          pink: 'hsla(330, 75%, 65%, 0.3)',
          blue: 'hsla(221, 75%, 60%, 0.25)',
          purple: 'hsla(262, 75%, 63%, 0.25)',
        },
      },
      backgroundImage: {
        'grad-brand': 'linear-gradient(135deg, #6366F1, #8B5CF6, #EC4899)',
        'grad-dark': 'linear-gradient(180deg, #1B1529, #2C1F3D)',
        'grad-soft': 'linear-gradient(180deg, transparent 70%, #F6F0FF 100%)',
        'grad-hero': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(139, 92, 246, 0.15), transparent)',
        'grad-section': 'linear-gradient(180deg, #F8F9FC 0%, #FFFFFF 100%)',
        'grad-glow': 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.08), transparent 70%)',
      },
      fontFamily: {
        heebo: ['Heebo', 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
        'display-sm': ['3.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '800' }],
        'heading': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'heading-sm': ['2rem', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '700' }],
        'subheading': ['1.25rem', { lineHeight: '1.5', fontWeight: '500' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7', fontWeight: '400' }],
      },
      spacing: {
        'section': '6rem',
        'section-sm': '4rem',
      },
      maxWidth: {
        'content': '72rem',
        'narrow': '42rem',
        'wide': '80rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 12px 40px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 40px rgba(139, 92, 246, 0.25)',
        'glow-lg': '0 0 60px rgba(139, 92, 246, 0.35)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(255, 255, 255, 0.1)',
      },
      animation: {
        'blob': 'blob 7s infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
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
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}
