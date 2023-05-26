/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from 'tailwindcss-animate';
import tailwindcssRadix from 'tailwindcss-radix';

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
      black: '#0C0E0F',
      gray: {
        100: '#F9FAFB',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#A0A6AD',
        600: '#79818A',
        700: '#3F4D54',
        800: '#162024',
      },
      yellow: {
        500: '#FFB013'
      },

      green: {
        600: '#00B53C',
      },

      red: {
        500: '#F2364C',
        800: '#DD0E26'
      },

      esmerald: {
        500: '#66C6BA',
        600: '#0D9488',
        700: '#0F766E',
      },

      slate: {
        700: '#334155',
      },

    },
    fontSize: {
      'display-1': [
        '5.5rem',
        {
          lineHeight: '150%',
          fontWeight: 600,
          letterSpacing: 0,
        },
      ],
      'display-2': [
        '4.5rem',
        {
          lineHeight: '150%',
          fontWeight: 600,
          letterSpacing: 0,
        },
      ],
      'display-3': [
        '3.5rem',
        {
          lineHeight: '150%',
          fontWeight: 600,
          letterSpacing: 0,
        },
      ],
      'heading-1': [
        '3rem',
        {
          lineHeight: '150%',
          fontWeight: 600,
          letterSpacing: 0,
        },
      ],
      'heading-2': [
        '2.5rem',
        {
          lineHeight: '150%',
          fontWeight: 600,
          letterSpacing: 0,
        },
      ],
      'heading-3': [
        '2rem',
        {
          lineHeight: '150%',
          fontWeight: 600,
          letterSpacing: 0,
        },
      ],
      'title-medium': [
        '1.625rem',
        {
          lineHeight: '150%',
          fontWeight: 500,
          letterSpacing: 0,
        },
      ],
      'title-semibold': [
        '1.625rem',
        {
          lineHeight: '150%',
          fontWeight: 600,
          letterSpacing: 0,
        },
      ],
      'subtitle-regular': [
        '1.375rem',
        {
          lineHeight: '150%',
          fontWeight: 400,
          letterSpacing: 0,
        },
      ],
      'subtitle-medium': [
        '1.375rem',
        {
          lineHeight: '150%',
          fontWeight: 500,
          letterSpacing: 0,
        },
      ],
      'subtitle-semibold': [
        '1.375rem',
        {
          lineHeight: '150%',
          fontWeight: 600,
          letterSpacing: 0,
        },
      ],
      'body-1-regular': [
        '1.125rem',
        {
          lineHeight: '150%',
          fontWeight: 400,
          letterSpacing: 0,
        },
      ],
      'body-1-medium': [
        '1.125rem',
        {
          lineHeight: '150%',
          fontWeight: 500,
          letterSpacing: 0,
        },
      ],
      'body-1-semibold': [
        '1.125rem',
        {
          lineHeight: '130%',
          fontWeight: 600,
          letterSpacing: 0,
        },
      ],
      'body-2-regular': [
        '1rem',
        {
          lineHeight: '150%',
          fontWeight: 400,
          letterSpacing: 0,
        },
      ],
      'body-2-medium': [
        '1rem',
        {
          lineHeight: '150%',
          fontWeight: 500,
          letterSpacing: 0,
        },
      ],
      'body-2-semibold': [
        '1rem',
        {
          lineHeight: '150%',
          fontWeight: 600,
          letterSpacing: 0,
        },
      ],
      'body-3-regular': [
        '0.875rem',
        {
          lineHeight: '150%',
          fontWeight: 400,
          letterSpacing: 0,
        },
      ],
      'body-3-medium': [
        '0.875rem',
        {
          lineHeight: '150%',
          fontWeight: 500,
          letterSpacing: 0,
        },
      ],
      'body-3-semibold': [
        '0.875rem',
        {
          lineHeight: '150%',
          fontWeight: 600,
          letterSpacing: 0,
        },
      ],
      'small-regular': [
        '0.75rem',
        {
          lineHeight: '150%',
          fontWeight: 400,
          letterSpacing: 0,
        },
      ],
      'small-medium': [
        '0.75rem',
        {
          lineHeight: '150%',
          fontWeight: 500,
          letterSpacing: 0,
        },
      ],
      'small-semibold': [
        '0.75rem',
        {
          lineHeight: '150%',
          fontWeight: 600,
          letterSpacing: 0,
        },
      ],
    },
    extend: {},
  },
  plugins: [tailwindcssAnimate, tailwindcssRadix()],
}
