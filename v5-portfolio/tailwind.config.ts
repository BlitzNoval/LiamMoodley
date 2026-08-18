import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        slate: {
          950: 'rgb(var(--color-slate-950) / <alpha-value>)',
          900: 'rgb(var(--color-slate-900) / <alpha-value>)',
          800: 'rgb(var(--color-slate-800) / <alpha-value>)',
          700: 'rgb(var(--color-slate-700) / <alpha-value>)',
          600: 'rgb(var(--color-slate-600) / <alpha-value>)',
          500: 'rgb(var(--color-slate-500) / <alpha-value>)',
          400: 'rgb(var(--color-slate-400) / <alpha-value>)',
          300: 'rgb(var(--color-slate-300) / <alpha-value>)',
          200: 'rgb(var(--color-slate-200) / <alpha-value>)',
          100: 'rgb(var(--color-slate-100) / <alpha-value>)',
        },
        teal: {
          900: 'rgb(var(--color-teal-900) / <alpha-value>)',
          400: 'rgb(var(--color-teal-400) / <alpha-value>)',
          300: 'rgb(var(--color-teal-300) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
