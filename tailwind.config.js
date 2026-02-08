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
          gold: '#D4A843',
          'gold-light': '#E8C96A',
          'gold-dark': '#B8922F',
          dark: '#2C2C2E',
          'dark-deep': '#1A1A1A',
          text: '#1A1A1A',
          muted: '#6E6E73',
          cta: '#C25B3F',
          'cta-hover': '#A94D35',
        },
        surface: {
          base: '#FAFAF8',
          card: '#FFFFFF',
          warm: '#F2F0EC',
          border: '#E5E5E3',
          'border-hover': '#D5D5D3',
        },
        state: {
          success: '#34A853',
          error: '#D93025',
        },
      },
      fontFamily: {
        rubik: ['Rubik', 'Heebo', 'sans-serif'],
        heebo: ['Heebo', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        'hero': ['2.75rem', { lineHeight: '1.2', fontWeight: '700' }],
        'hero-sm': ['2.25rem', { lineHeight: '1.25', fontWeight: '700' }],
        'section': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
        'section-sm': ['1.5rem', { lineHeight: '1.35', fontWeight: '600' }],
        'card-title': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'small': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        'caption': ['0.8125rem', { lineHeight: '1.5', fontWeight: '400' }],
      },
      spacing: {
        'section': '5rem',
        'section-sm': '3rem',
      },
      maxWidth: {
        'content': '70rem',
        'narrow': '40rem',
        'tight': '35rem',
      },
      borderRadius: {
        'sm': '6px',
        'DEFAULT': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.04)',
        'card': '0 2px 8px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 8px 24px rgba(0, 0, 0, 0.08)',
        'lg': '0 8px 24px rgba(0, 0, 0, 0.08)',
        'xl': '0 16px 48px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
