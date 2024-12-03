/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode with the "class" strategy
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Ensure all source files are scanned
  theme: {
    extend: {
      colors: {
        // Extended color palette
        magenta: '#FF00FF',
        cyan: '#00FFFF',
        electricBlue: '#007BFF',
        golden: '#FFD700',
        softGreen: '#8BC34A',
        vibrantOrange: '#FF5722',
        deepPurple: '#673AB7',
        slate: {
          950: '#0F172A',
        },
      },
      scrollSnapType: {
        x: 'x mandatory',
        y: 'y mandatory',
        none: 'none',
      },
      scrollSnapAlign: {
        start: 'start',
        center: 'center',
        end: 'end',
      },
      animation: {
        fadeSlide: 'fadeSlide 1.5s ease-out',
        bounceSlow: 'bounceSlow 2s infinite',
        spinFast: 'spinFast 1s linear infinite',
        pulseGlow: 'pulseGlow 2s infinite',
        slideIn: 'slideIn 1s ease-out',
        scaleUp: 'scaleUp 0.7s ease-in-out',
        scaleDown: 'scaleDown 0.7s ease-in-out',
      },
      keyframes: {
        fadeSlide: {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        spinFast: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulseGlow: {
          '0%': { opacity: 0.8, boxShadow: '0 0 10px #FF5722' },
          '50%': { opacity: 1, boxShadow: '0 0 20px #FF5722' },
          '100%': { opacity: 0.8, boxShadow: '0 0 10px #FF5722' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.9)', opacity: 0.8 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        scaleDown: {
          '0%': { transform: 'scale(1.1)', opacity: 1 },
          '100%': { transform: 'scale(1)', opacity: 0.9 },
        },
      },
    },
  },
  plugins: [],
};
