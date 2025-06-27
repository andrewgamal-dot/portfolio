/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f9f2',
          100: '#b8f2de',
          200: '#7deac7',
          300: '#34d399',
          400: '#10b981',
          500: '#059669',
          600: '#047857',
          700: '#065f46',
          800: '#064e3b',
          900: '#022c22',
        },
        gold: {
          50: '#fffbe6',
          100: '#fff3b8',
          200: '#ffe47d',
          300: '#ffd43b',
          400: '#ffc300',
          500: '#e6ac00',
          600: '#b38600',
          700: '#806200',
          800: '#4d3d00',
          900: '#332600',
        },
        accent: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        dark: {
          50: '#f8fafc',
          100: '#e2e8f0',
          200: '#cbd5e1',
          300: '#94a3b8',
          400: '#64748b',
          500: '#475569',
          600: '#334155',
          700: '#1e293b',
          800: '#0f172a',
          900: '#090c1b',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['Fira Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #022c22 0%, #ffd43b 100%)',
        'card-glass': 'linear-gradient(120deg, rgba(5,150,105,0.12) 0%, rgba(255,212,59,0.10) 100%)',
        'mesh': 'radial-gradient(ellipse at 20% 40%, #ffd43b33 0%, transparent 60%), radial-gradient(ellipse at 80% 60%, #05966933 0%, transparent 60%)',
      },
      boxShadow: {
        'glow': '0 0 24px 0 rgba(255,212,59,0.18), 0 2px 8px 0 rgba(5,150,105,0.10)',
        'glow-accent': '0 0 24px 0 rgba(20,184,166,0.18), 0 2px 8px 0 rgba(255,212,59,0.10)',
      },
    },
  },
  plugins: [],
} 