/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#AA767C',
        surface: '#63474D',
        accent: '#f8c2ae',
        'accent-soft': '#E8C4A0',
        'text-primary': '#FEC196',
        'text-muted': '#F5F0EB'
      },
      fontFamily: {
        display: ['DM Serif Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      }
    }
  },
  plugins: [],
}

