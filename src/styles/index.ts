import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#fff',

      gray900: '#121214',
      gray800: '#202024',
      gray600: '#323238',
      gray400: '#8d8d99',
      gray300: '#c4c4cc',
      gray100: '#e1e1e6',

      red500: '#AB222E',

      green500: '#00875f',
      green300: '#00b37e',
    },

    shadows: {
      green500: '#00875f',
      green300: '#00b37e',

      black: 'rgba(0, 0, 0, 0.8)',
    },

    fontSizes: {
      sm: '0.875rem',
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    },
  },
})
