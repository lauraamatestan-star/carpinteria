/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8d6748', // madera
          foreground: '#fff',
        },
        secondary: {
          DEFAULT: '#4b4b4b', // gris industrial
          foreground: '#fff',
        },
        card: '#f8f5f2',
        muted: '#ece7e1',
        border: '#d6cfc7',
        background: '#f5f3ef',
        destructive: '#b91c1c',
      },
      fontFamily: {
        sans: ['Inter', 'Roboto Flex', 'ui-sans-serif', 'system-ui'],
        heading: ['Merriweather', 'serif'],
      },
      boxShadow: {
        card: '0 4px 24px 0 rgba(141, 103, 72, 0.10)',
      },
      borderRadius: {
        xl: '1.25rem',
      },
      transitionProperty: {
        'height': 'height',
      },
    },
  },
  plugins: [],
};
