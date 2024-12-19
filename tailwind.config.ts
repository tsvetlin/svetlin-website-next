import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--background))',
        text: 'rgb(var(--text))',
        primary: 'rgb(var(--primary))',
        secondary: 'rgb(var(--secondary))',
        accent: 'rgb(var(--accent))',
        tertiary: 'rgb(var(--tertiary))',
      },
      keyframes: {
        rocking: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(15deg)' },
          '75%': { transform: 'rotate(-15deg)' },
        },
      },
      animation: {
        rocking: 'rocking 1s ease-in-out infinite',
      },
      fontFamily: {
        cormorant: ['Cormorant', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
