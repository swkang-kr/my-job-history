import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#ff8a8a',
          DEFAULT: '#ff6b6b',
          dark: '#e55a5a',
        },
        secondary: '#1e40af',
        accent: '#3b82f6',
        dark: {
          bg: '#0a0f1a',
          DEFAULT: '#0f172a',
          card: '#1e293b',
          surface: '#1a2332',
          text: '#e2e8f0',
          muted: '#94a3b8',
        },
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(255, 107, 107, 0.15)',
        'glow': '0 0 25px rgba(255, 107, 107, 0.2)',
        'glow-lg': '0 0 40px rgba(255, 107, 107, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'radial-gradient(ellipse at 50% 0%, rgba(255,107,107,0.08) 0%, transparent 60%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 15px rgba(255,107,107,0.15)' },
          '50%': { boxShadow: '0 0 30px rgba(255,107,107,0.3)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
