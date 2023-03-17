import { globalCss } from '.'

export const globalStyle = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  ':focus': {
    outline: 0,
  },

  '::-webkit-scrollbar': {
    width: '0.625rem',
    height: '0.625rem',
  },

  '::-webkit-scrollbar-thumb': {
    background: '$gray600',
    borderRadius: 8,
  },

  '::-webkit-scrollbar-corner': {
    background: 'transparent',
  },

  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: '1rem',
  },

  '@media (max-width: 1520px)': {
    html: {
      fontSize: '87.5%',
    },
  },
})
