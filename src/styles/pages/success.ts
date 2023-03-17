import { styled } from '..'

export const Header = styled('header', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  padding: '2rem 0',
})

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
    marginTop: '3rem',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
    lineHeight: 1.4,
  },

  a: {
    display: 'block',
    marginTop: '5rem',
    fontSize: '$lg',
    fontWeight: 'bold',
    color: '$green500',
    textDecoration: 'none',

    '&:hover': {
      color: '$green300',
      transition: 'color 0.2s',
    },
  },

  '@media (max-width: 1520px)': {
    height: 536,
  },

  '@media (max-width: 618px)': {
    margin: '0 1.5rem',
  },
})

export const ImagesContainer = styled('div', {
  width: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const CircleContainerImage = styled('div', {
  width: '100%',
  maxWidth: '8.75rem',
  height: '8.75rem',
  padding: '0.25rem',
  borderRadius: '50%',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  boxShadow: '0 0 60px $black',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '& + &': {
    marginLeft: '-3.25rem',
  },

  img: {
    objectFit: 'cover',
  },

  '@media (max-width: 768px)': {
    maxWidth: '5rem',
    height: '5rem',

    img: {
      width: '4.5rem',
      height: '4.5rem',
    },
  },
})
