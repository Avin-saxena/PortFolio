/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8',
        secondary: '#9333EA',
        accent: '#F59E0B',
        background: '#111827',
        text: '#F3F4F6',
        'gray-800': '#2d3748',
        'gray-700': '#4a5568',
        'gray-900': '#1a202c',
        'pink-500': '#EC4899',
        'pink-600': '#DB2777',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Roboto Slab', 'serif'],
      },
      boxShadow: {
        'custom-light': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'custom-dark': '0 4px 6px rgba(0, 0, 0, 0.6)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to right, #4338CA, #8B5CF6)',
      },
      keyframes: {
        'typewriter-hi': {
          'from': { width: '0' },
          'to': { width: '3ch' }
        },
        'typewriter-name': {
          'from': { width: '0' },
          'to': { width: '18ch' }
        },
        'blink': {
          '50%': { borderColor: 'transparent' }
        },
        'fade-in': {
          'from': { opacity: '0' },
          'to': { opacity: '1' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'border-flow': {
          '0%, 100%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(100%)' }
        },
        'border-flow-reverse': {
          '0%, 100%': { transform: 'translateX(100%)' },
          '50%': { transform: 'translateX(-100%)' }
        },
        'border-flow-vertical': {
          '0%, 100%': { transform: 'translateY(-100%)' },
          '50%': { transform: 'translateY(100%)' }
        },
        'border-flow-vertical-reverse': {
          '0%, 100%': { transform: 'translateY(100%)' },
          '50%': { transform: 'translateY(-100%)' }
        },
        'slide-right': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(200%)' }
        },
        'slide-down': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(200%)' }
        },
        'slide-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-200%)' }
        },
        'slide-up': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-200%)' }
        },
        'gradient-rotation': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'border-glow': {
          '0%, 100%': { 
            'background-position': '0% 50%' 
          },
          '50%': { 
            'background-position': '100% 50%' 
          }
        },
        'letter-wiggle': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-5px) rotate(5deg)' }
        },
        'letter-color': {
          '0%, 100%': { color: 'white' },
          '50%': { color: 'rgb(192, 132, 252)' }  // purple-400
        }
      },
      animation: {
        'typewriter-hi': 'typewriter-hi 1s steps(3) forwards',
        'typewriter-name': 'typewriter-name 2.5s steps(18) forwards',
        'caret': 'blink 1s steps(2) infinite',
        'fade-in': 'fade-in 0.5s ease-in forwards',
        fadeInUp: 'fadeInUp 1.0s ease-out forwards',
        'border-flow': 'border-flow 3s linear infinite',
        'border-flow-reverse': 'border-flow-reverse 3s linear infinite',
        'border-flow-vertical': 'border-flow-vertical 3s linear infinite',
        'border-flow-vertical-reverse': 'border-flow-vertical-reverse 3s linear infinite',
        'slide-right': 'slide-right 2s linear infinite',
        'slide-down': 'slide-down 2s linear infinite',
        'slide-left': 'slide-left 2s linear infinite',
        'slide-up': 'slide-up 2s linear infinite',
        'gradient-rotate': 'gradient-rotation 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'border-glow': 'border-glow 3s linear infinite',
        'letter-hover': 'letter-wiggle 0.3s ease-in-out, letter-color 0.3s ease-in-out',
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'group-hover'],
      textColor: ['active', 'group-hover'],
      borderColor: ['active', 'group-hover'],
      opacity: ['group-hover'],
      scale: ['group-hover'],
      blur: ['group-hover'],
      translate: ['hover', 'group-hover'],
      rotate: ['hover', 'group-hover'],
      transform: ['hover', 'group-hover'],
    },
  },
  plugins: [],
};