/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/*.{js,ts,jsx,tsx}',
    './src/components/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      gray: {
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
      },

      esmerald: {
        500: '#66C6BA',
      },

      slate: {
        700: '#334155',
      }
    },
    extend: {},
  },
  plugins: [],
}
