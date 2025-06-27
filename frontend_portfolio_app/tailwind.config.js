module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#6366F1',
        accent: '#a07e5a',
        background: {
          light: '#ffffff',
          dark: '#18181B'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        micro: '0 .5px 1.5px 0 rgba(55,65,81,0.04)',
      },
      transitionProperty: {
        'height': 'height',
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
