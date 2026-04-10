/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
      },
      colors: {
        purple: {
          DEFAULT: '#5C4FF6',
          light: '#EEF0FF',
          mid: '#A89FF8',
          dark: '#3B2FC9',
        },
        teal: {
          DEFAULT: '#0FA98E',
          light: '#E0F7F3',
        },
        amber: {
          DEFAULT: '#F59E0B',
          light: '#FEF3C7',
        },
        red: {
          DEFAULT: '#EF4444',
          light: '#FEE2E2',
        },
        green: {
          DEFAULT: '#10B981',
          light: '#D1FAE5',
        },
        bg: '#F8F7FF',
        surface: '#FFFFFF',
        surface2: '#F3F2FB',
        border: '#E8E6F8',
        text: {
          DEFAULT: '#1A1830',
          2: '#5C5A7A',
          3: '#9896B8',
        },
      },
      borderRadius: {
        card: '14px',
        sm: '8px',
      },
    },
  },
  plugins: [],
};
