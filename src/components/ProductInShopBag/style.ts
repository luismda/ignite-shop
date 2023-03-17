import { styled } from '@/styles'

export const ProductInShopBagContainer = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '1.25rem',
  minWidth: '24rem',

  '@media (max-width: 768px)': {
    minWidth: 0,
  },
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: '6.25rem',
  height: '5.75rem',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  img: {
    objectFit: 'cover',
    width: '5.875rem',
    height: '5.875rem',
  },

  '@media (max-width: 768px)': {
    maxWidth: '5.25rem',
    height: '4.75rem',

    img: {
      width: '4.875rem',
      height: '4.875rem',
    },
  },
})

export const ProductDetails = styled('div', {
  flex: 1,
  height: '100%',

  div: {
    span: {
      fontSize: '$md',
      lineHeight: 1.6,
      color: '$gray300',
    },

    strong: {
      display: 'block',
      marginTop: '0.125rem',
      fontSize: '$md',
      lineHeight: 1.6,
    },
  },

  footer: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',

    button: {
      marginTop: '0.5rem',
      background: 'transparent',
      border: 0,
      color: '$green500',
      fontWeight: 'bold',
      lineHeight: 1.6,
      cursor: 'pointer',

      '&:hover': {
        color: '$green300',
        transition: 'color 0.2s',
      },

      '&:focus': {
        color: '$green300',
        transition: 'color 0.2s',
      },
    },

    span: {
      fontSize: '$sm',
      lineHeight: 1.6,
      color: '$gray300',
      marginRight: '1rem',
    },
  },
})
