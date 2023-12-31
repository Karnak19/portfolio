import typographyPlugin from '@tailwindcss/typography'
import { type Config } from 'tailwindcss'

import typographyStyles from './typography'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  plugins: [typographyPlugin],
  theme: {
    fontSize: {
      xs: ['0.8125rem', { lineHeight: '1.5rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      keyframes: {
        'scrolling-x': {
          to: { transform: 'translate(calc(-50% - 0.5rem))', opacity: '0' },
        },
        'scrolling-y': {
          to: { transform: 'translateY(calc(-70% - 0.5rem))' },
        },
        'scrolling-y-2': {
          to: { transform: 'translateY(calc(-140% - 0.5rem))', opacity: '0' },
        },
      },
      animation: {
        'scrolling-x': 'scrolling-x ease-in',
        'scrolling-y': 'scrolling-y linear',
        'scrolling-y-2': 'scrolling-y-2 linear',
      },
    },
    typography: typographyStyles,
  },
} satisfies Config
