/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          base: 'var(--bg-base)',
          surface: 'var(--bg-surface)',
          elevated: 'var(--bg-elevated)',
          border: 'var(--border)',
        },
        tx: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          glow: 'var(--accent-glow)',
          muted: 'var(--accent-muted)',
        },
      },
      fontFamily: {
        head: ['var(--font-head)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.05', fontWeight: '700' }],
        'h1': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.1', fontWeight: '700' }],
        'h2': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.15', fontWeight: '600' }],
        'h3': ['1.25rem', { lineHeight: '1.3', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'sm': ['0.875rem', { lineHeight: '1.5' }],
        'xs': ['0.8125rem', { lineHeight: '1.5' }],
      },
      spacing: {
        'section': 'var(--section-gap)',
      },
      maxWidth: {
        'site': '72rem',
        'narrow': '40rem',
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
      },
      boxShadow: {
        'glow': '0 0 30px var(--accent-glow)',
        'glow-sm': '0 0 15px var(--accent-glow)',
        'soft': '0 2px 10px rgba(0,0,0,0.3)',
        'up': '0 -4px 20px rgba(0,0,0,0.4)',
      },
      animation: {
        'hero-fade': 'heroFade 0.7s ease-out forwards',
        'hero-d1': 'heroFade 0.7s ease-out 0.15s forwards',
        'hero-d2': 'heroFade 0.7s ease-out 0.3s forwards',
        'hero-d3': 'heroFade 0.7s ease-out 0.45s forwards',
        'hero-d4': 'heroFade 0.7s ease-out 0.6s forwards',
      },
      keyframes: {
        heroFade: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
