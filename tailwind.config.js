/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6366f1', // Indigo
          DEFAULT: '#8b5cf6', // Purple
          dark: '#7c3aed',
        },
        secondary: {
          light: '#ec4899', // Pink
          DEFAULT: '#f97316', // Orange
        },
        success: '#10b981',
        warning: '#f59e0b',
        background: {
          DEFAULT: '#ffffff',
          alt: '#f9fafb',
          muted: '#f3f4f6',
        },
        text: {
          primary: '#111827',
          secondary: '#6b7280',
        }
      },
      fontFamily: {
        heading: ['Poppins', 'Inter', 'sans-serif'],
        body: ['Inter', 'DM Sans', 'sans-serif'],
        accent: ['Outfit', 'Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 4px 20px rgba(0,0,0,0.08)',
        'premium-hover': '0 10px 30px rgba(0,0,0,0.12)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #6366f1, #8b5cf6)',
        'gradient-secondary': 'linear-gradient(to right, #ec4899, #f97316)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
