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
        500: '#79818A',
      },

      esmerald: {
        500: '#66C6BA',
        600: '#0D9488',
        700: '#0F766E',
      },

      slate: {
        700: '#334155',
      }
    },
    extend: {},
  },
  plugins: [],
}
