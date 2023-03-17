import { styled } from '@/styles'

export const HeaderContainer = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  img: {
    width: '8.125rem',
    height: '3.25rem',
  },

  '@media (max-width: 1204px)': {
    padding: '2rem 1.5rem',
  },
})

export const ShopBagButton = styled('button', {
  width: '3rem',
  height: '3rem',

  backgroundColor: '$gray800',
  border: 0,
  borderRadius: 6,
  padding: '0.75rem',
  cursor: 'pointer',
  lineHeight: 0,
  position: 'relative',

  strong: {
    width: 'calc(1.5rem + 3px)',
    height: 'calc(1.5rem + 3px)',
    position: 'absolute',
    top: -7,
    right: -7,

    background: '$green500',
    color: '$white',
    border: '3px solid $gray900',
    borderRadius: '50%',
    fontSize: '$sm',

    span: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-45%, -50%)',
    },
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $green500',
    transition: 'all 0.2s',
  },

  variants: {
    variant: {
      empty: {
        svg: {
          color: '$gray400',
        },

        strong: {
          visibility: 'hidden',
        },
      },

      full: {
        svg: {
          color: '$gray300',
        },
      },
    },
  },
})
