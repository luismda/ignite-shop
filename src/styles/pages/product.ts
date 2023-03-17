import { styled } from '..'

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',

  maxWidth: 1180,
  margin: '0 auto',

  '@media (max-width: 1242px)': {
    padding: '0 1.5rem',
  },

  '@media (max-width: 768px)': {
    gridTemplateColumns: '1fr',
    gap: '2rem',
  },
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 576,
  height: 656,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  '@media (max-width: 1520px)': {
    height: 536,
  },

  '@media (max-width: 1000px)': {
    maxWidth: 486,
  },

  '@media (max-width: 872px)': {
    maxWidth: 436,

    img: {
      width: '28rem',
      height: '25.5rem',
    },
  },

  '@media (max-width: 768px)': {
    height: 476,
    margin: '0 auto',
  },
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    marginTop: '1rem',
    fontSize: '$2xl',
    color: '$gray300',
  },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$2xl',
    color: '$green300',
  },

  p: {
    marginTop: '2.5rem',
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray300',
  },

  button: {
    marginTop: 'auto',
    backgroundColor: '$green500',
    color: '$white',
    border: 0,
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
      transition: 'background-color 0.2s',
    },

    '&:focus': {
      boxShadow: '0 0 0 2px $green300',
      transition: 'all 0.2s',
    },

    '@media (max-width: 768px)': {
      marginTop: '2rem',
    },
  },
})
