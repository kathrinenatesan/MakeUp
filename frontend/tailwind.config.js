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
        surface: '#FFA686',
        accent: '#FEC196',
        'accent-soft': '#E8C4A0',
        'text-primary': '#F5F0EB',
        'text-muted': '#FEC196',
      },
      fontFamily: {
        display: ['DM Serif Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      }
    }
  },
  plugins: [],
}

