/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5e39e0',
        'primary-container': '#7757fa',
        surface: '#f9f9f9',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#f3f3f3',
        'surface-container': '#eeeeee',
        'surface-container-high': '#e8e8e8',
        'surface-container-highest': '#e2e2e2',
        'on-surface': '#1a1c1c',
        'on-surface-variant': '#484555',
        'text-muted': '#6E6E73',
        'pitch-black': '#000000',
        'stark-white': '#FFFFFF',
        'border-subtle': '#E5E5E5',
      },
      spacing: {
        'container-max': '1280px',
        'margin-desktop': '64px',
        'margin-mobile': '20px',
        'section-gap': '80px',
        gutter: '24px',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 8px rgba(0, 0, 0, 0.02)',
      },
    },
  },
  plugins: [],
};
