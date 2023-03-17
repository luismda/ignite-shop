import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: 656,

  position: 'relative',

  '@media (max-width: 1520px)': {
    minHeight: 536,
  },
})

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  boxShadow: '0 0 48px $black',
  borderRadius: 8,
  position: 'relative',
  overflow: 'hidden',

  a: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  img: {
    objectFit: 'cover',
    width: '32.5rem',
    height: '30rem',
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '1.25rem 2rem 1.25rem 1.25rem',

    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    background: 'rgba(0, 0, 0, 0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    div: {
      strong: {
        fontSize: '$lg',
        lineHeight: 1.6,
        color: '$gray100',
      },

      span: {
        display: 'block',
        marginTop: '0.25rem',

        fontSize: '$xl',
        fontWeight: 'bold',
        lineHeight: 1.4,
        color: '$green300',
      },
    },

    button: {
      backgroundColor: '$green500',
      border: 0,
      borderRadius: 6,
      padding: '0.75rem',
      cursor: 'pointer',
      lineHeight: 0,

      svg: {
        color: '$white',
      },

      '&:focus': {
        boxShadow: '0 0 0 2px $green300',
        transition: 'all 0.2s',
      },
    },

    '&:focus-within': {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },

  'a:focus + footer': {
    transform: 'translateY(0%)',
    opacity: 1,
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },

  '@media (max-width: 768px)': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,

      flexDirection: 'column',
      justifyContent: 'center',

      div: {
        textAlign: 'center',
      },

      button: {
        visibility: 'hidden',
        padding: 0,
        maxHeight: 0,
      },
    },
  },
})

const BaseSlideButton = styled('button', {
  width: '8.5rem',
  height: '100%',
  cursor: 'pointer',
  border: 0,
  transition: 'all 0.2s',

  position: 'absolute',
  zIndex: 1,

  svg: {
    color: '$gray300',
  },

  '&:hover': {
    svg: {
      color: '$gray100',
      transition: 'color 0.2s',
    },
  },

  '&:focus': {
    svg: {
      color: '$gray100',
      transition: 'color 0.2s',
    },
  },

  '&:disabled': {
    opacity: 0,
    pointerEvents: 'none',
  },
})

export const PrevSlideButton = styled(BaseSlideButton, {
  left: 0,
  background: 'linear-gradient(90deg, $gray900, transparent)',
})

export const NextSlideButton = styled(BaseSlideButton, {
  right: 0,
  background: 'linear-gradient(90deg, transparent, $gray900 90%)',
})
