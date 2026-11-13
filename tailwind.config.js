/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#10264B',
          dark: '#0A1B38',
          light: '#1B3B6F',
        },
        teal: {
          DEFAULT: '#087F78',
          dark: '#06635E',
          light: '#0E9B93',
        },
        green: {
          DEFAULT: '#20B85A',
          dark: '#169947',
          light: '#3FD378',
        },
        orange: {
          DEFAULT: '#FF792E',
          dark: '#E8671F',
          light: '#FF9454',
        },
        cream: {
          DEFAULT: '#FFFDF7',
          light: '#FFFFFC',
        },
        mint: {
          DEFAULT: '#DDF5EC',
          soft: '#EAF7F1',
        },
        lightblue: {
          DEFAULT: '#E8F4F8',
          soft: '#F2F8FB',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'phone-shadow': '0 25px 60px -15px rgba(16, 38, 75, 0.22), 0 10px 25px -10px rgba(8, 127, 120, 0.12)',
        'floating-card': '0 12px 32px -4px rgba(16, 38, 75, 0.10), 0 4px 12px -2px rgba(8, 127, 120, 0.05)',
        'cta-glow': '0 12px 28px -6px rgba(255, 121, 46, 0.38)',
      },
    },
  },
  plugins: [],
};
