import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f3f6ff',
          100: '#e6edff',
          200: '#c3d5ff',
          300: '#9fbdff',
          400: '#5a8eff',
          500: '#2563eb',
          600: '#1d4ed8',
          700: '#1e40af',
          800: '#1e3a8a',
          900: '#1e325f'
        },
        primary: '#D64550',
        secondary: '#4BAF8A',
        sage: '#CFE6DA',
        sunshine: '#F7D070',
        offwhite: '#FAF7F2',
        charcoal: '#333333',
      }
    }
  },
  plugins: [],
} satisfies Config;


