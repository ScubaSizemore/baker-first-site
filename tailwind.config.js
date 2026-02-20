/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Light theme backgrounds
        'bg-primary': '#FFFFFF',
        'bg-surface': '#F7F7F8',
        'bg-surface-2': '#EEEFF0',

        // Dark section backgrounds (hero, CTA, footer)
        'bg-dark': '#1A1A1A',
        'bg-dark-surface': '#242424',

        // Brand colors (from logo)
        'brand-red': '#C8382D',
        'brand-red-hover': '#B0312A',
        'brand-red-light': '#FDF2F1',

        // Accent aliases (component compat — accent-green now maps to red)
        'accent-green': '#C8382D',
        'accent-cyan': '#65BC7B',
        'heritage-red': '#C8382D',
        'accent-gold': '#D4A44E',
        'brand-charcoal': '#2B2B2B',

        // Text (light theme)
        'text-primary': '#2B2B2B',
        'text-secondary': '#5F6368',
        'text-muted': '#9AA0A6',

        // Borders (light theme)
        'border-subtle': 'rgba(0,0,0,0.08)',
        'border-hover': 'rgba(0,0,0,0.12)',

        // Glass (light theme)
        'glass': 'rgba(255,255,255,0.75)',
        'glass-hover': 'rgba(255,255,255,0.9)',
      },
      fontFamily: {
        'display': ['"Instrument Serif"', 'Georgia', 'serif'],
        'heading': ['"General Sans"', 'system-ui', 'sans-serif'],
        'body': ['Manrope', 'system-ui', 'sans-serif'],
        'data': ['"JetBrains Mono"', 'monospace'],
      },
      backdropBlur: {
        'glass': '20px',
        'glass-lg': '30px',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        'card-hover': '0 10px 25px rgba(0,0,0,0.08), 0 4px 10px rgba(0,0,0,0.04)',
        'red-glow': '0 0 20px rgba(200,56,45,0.25)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
