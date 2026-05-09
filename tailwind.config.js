/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark background palette
        bg: {
          primary: '#050508',
          secondary: '#0a0a0f',
          card: '#0f0f16',
          elevated: '#141420',
        },
        // Accent colors
        accent: {
          cyan: '#00d4ff',
          purple: '#7c3aed',
          violet: '#a855f7',
          green: '#00ff88',
          ember: '#ff6b35',
        },
        surface: '#1a1a28',
        border: '#ffffff08',
      },
      fontFamily: {
        display: ['"Clash Display"', '"Syne"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)' },
          '100%': { boxShadow: '0 0 60px rgba(0, 212, 255, 0.6), 0 0 100px rgba(124, 58, 237, 0.3)' },
        }
      }
    },
  },
  plugins: [],
}
