/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#08090B',
        'background-secondary': '#0D0F12',
        card: '#111318',
        border: 'rgba(255,255,255,0.08)',
        'text-primary': '#F5F5F5',
        'text-secondary': '#9CA3AF',
        accent: {
          DEFAULT: '#6366F1',
          light: '#818CF8',
          dark: '#4F46E5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 20px 60px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.05)',
        'card-hover': '0 24px 70px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.1)',
        glow: '0 0 40px rgba(99, 102, 241, 0.15)',
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
