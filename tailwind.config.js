/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // All colors read from CSS custom properties so they
        // flip automatically between light and dark themes.
        bg:             'rgb(var(--color-bg)      / <alpha-value>)',
        surface:        'rgb(var(--color-surface)  / <alpha-value>)',
        border:         'rgb(var(--color-border)   / <alpha-value>)',
        accent:         'rgb(var(--color-accent)   / <alpha-value>)',
        accent2:        'rgb(var(--color-accent2)  / <alpha-value>)',
        'text-primary': 'rgb(var(--color-text-primary) / <alpha-value>)',
        'text-muted':   'rgb(var(--color-text-muted)   / <alpha-value>)',
        'surface-2':    'rgb(var(--color-surface-2)    / <alpha-value>)',
      },
      fontFamily: {
        display: ['Space Grotesk', 'Syne', 'sans-serif'],
        body:    ['DM Sans', 'Instrument Sans', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow':  'spin 20s linear infinite',
        'float':      'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
      },
      boxShadow: {
        gold: '0 0 30px rgba(201, 168, 76, 0.3)',
        teal: '0 0 30px rgba(0, 229, 255, 0.3)',
        card: '0 25px 50px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
