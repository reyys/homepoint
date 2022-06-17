module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      screens: {
        sm: { 'max': '640px' },
        'md': { 'max': '768px' },
        'lg': { 'max': '1024px' },
        'xl': { 'max': '1280px' },
        '2xl': { 'max': '1440px' },
        '3xl': { 'max': '1920px' },
      },
    },
    extend: {
      colors: {
        'blue-pale': '#6999B8',
        'light-blue-pale': "#DBE4EA",
      },
      fontFamily: {
        'helvetica': ['Helvetica', 'sans-serif'], //untuk custom font
        Inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'shadow-custom-1': '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
}