import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#1e40af',
        accent: '#3b82f6',
        dark: {
          bg: '#0f172a',
          card: '#1e293b',
          text: '#e2e8f0',
        },
      },
    },
  },
  plugins: [],
};

export default config;
