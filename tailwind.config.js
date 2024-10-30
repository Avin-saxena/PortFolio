// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Paths to all of your template files
    './public/index.html',
  ],
  darkMode: 'class', // Enable dark mode via class strategy
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Example primary color
        secondary: '#9333EA',
        accent: '#F59E0B',
        background: '#111827', // Dark background
        text: '#F3F4F6', // Light text
        'gray-800': '#2d3748',
        'gray-700': '#4a5568',
        'gray-900': '#1a202c',
        'pink-500': '#EC4899',
        'pink-600': '#DB2777',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Existing sans-serif font
        serif: ['Roboto Slab', 'serif'], // New serif font
      },
      boxShadow: {
        'custom-light': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'custom-dark': '0 4px 6px rgba(0, 0, 0, 0.6)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to right, #4338CA, #8B5CF6)', // Customize as desired
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 1.0s ease-out forwards',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      textColor: ['active'],
      borderColor: ['active'],
    },
  },
  plugins: [],
};
