/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0A1628',
          orange: '#FF6B2B',
          card: '#1A2B45',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        syne: ['Poppins', 'sans-serif'],
        sans: ['Poppins', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        // Hero display font — mapped to Poppins for simplicity
        hero: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
