/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'scroll-logos': 'scroll-logos 28s linear infinite',
        'kenburns':     'kenburns 16s ease-in-out infinite alternate',
        'kenburns-alt': 'kenburns-alt 18s ease-in-out infinite alternate',
      },
      keyframes: {
        'scroll-logos': {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        kenburns: {
          '0%':   { transform: 'scale(1) translate(0, 0)' },
          '100%': { transform: 'scale(1.08) translate(-1.5%, -1%)' },
        },
        'kenburns-alt': {
          '0%':   { transform: 'scale(1.08) translate(1.5%, 1%)' },
          '100%': { transform: 'scale(1) translate(0, 0)' },
        },
      },
      fontFamily: {
        heading: ['Borna', 'Inter', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
