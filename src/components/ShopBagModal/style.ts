import { styled } from '@/styles'
import * as Dialog from '@radix-ui/react-dialog'
import * as ScrollArea from '@radix-ui/react-scroll-area'

export const Content = styled(Dialog.Content, {
  minWidth: '30rem',
  height: '100vh',
  position: 'fixed',
  zIndex: 2,
  top: 0,
  right: 0,
  padding: '3rem',

  backgroundColor: '$gray800',
  boxShadow: '-4px 0 30px $black',

  display: 'flex',
  flexDirection: 'column',

  h2: {
    marginTop: '1.5rem',
    fontSize: '$lg',
    lineHeight: 1.6,
  },

  '@media (max-width: 768px)': {
    minWidth: 0,
    width: '100vw',
  },
})

export const CloseButton = styled(Dialog.Close, {
  position: 'absolute',
  top: '1.5rem',
  right: '1.5rem',
  padding: '0.25rem',

  background: 'transparent',
  color: '$gray400',
  border: 0,
  borderRadius: '50%',
  lineHeight: 0,
  cursor: 'pointer',

  svg: {
    color: '$gray400',
  },

  '&:hover': {
    svg: {
      color: '$gray300',
      transition: 'color 0.2s',
    },
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $green500',
    transition: 'all 0.2s',
  },
})

export const ProductEmptyList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.5rem',
  paddingBottom: '1.5rem',

  svg: {
    color: '$gray300',
  },

  p: {
    maxWidth: '18rem',
    textAlign: 'center',
    color: '$gray300',
    lineHeight: 1.6,
  },
})

export const ProductList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  paddingBottom: '1.5rem',
})

export const ScrollAreaRoot = styled(ScrollArea.Root, {
  marginTop: '2rem',
  height: '22.5rem',
  overflow: 'hidden',

  position: 'relative',

  '&::after': {
    content: '',
    width: '100%',
    height: '1.5rem',
    position: 'absolute',
    bottom: 0,
    background: 'linear-gradient(180deg, transparent, $gray800 80%)',
  },
})

export const ScrollAreaViewport = styled(ScrollArea.Viewport, {
  width: '100%',
  height: '100%',
})

export const ScrollAreaScrollbar = styled(ScrollArea.Scrollbar, {
  display: 'flex',
  userSelect: 'none',
  touchAction: 'none',

  '&[data-orientation="vertical"]': {
    width: 10,
  },

  '&[data-orientation="horizontal"]': {
    flexDirection: 'column',
    height: 10,
  },
})

export const ScrollAreaThumb = styled(ScrollArea.Thumb, {
  flex: 1,
  background: '$gray600',
  borderRadius: 8,
  position: 'relative',

  '&::before': {
    content: '',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    minWidth: 44,
    minHeight: 44,
  },
})

export const ScrollAreaCorner = styled(ScrollArea.Corner, {
  background: 'transparent',
})

export const Details = styled('div', {
  marginTop: 'auto',
  paddingTop: '1rem',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',

  'div:first-child': {
    span: {
      lineHeight: 1.6,
    },

    strong: {
      display: 'block',
      marginTop: '0.1875rem',
      fontSize: '$md',
      lineHeight: 1.6,
    },
  },

  'div:last-child': {
    textAlign: 'right',

    span: {
      fontSize: '$md',
      lineHeight: 1.4,
      color: '$gray300',
    },

    strong: {
      display: 'block',
      marginTop: '0.1875rem',

      fontSize: '$xl',
      lineHeight: 1.4,
    },
  },
})

export const FinishBuyButton = styled('button', {
  marginTop: '3.5rem',
  backgroundColor: '$green500',
  color: '$white',
  border: 0,
  borderRadius: 8,
  padding: '1.25rem 2rem',
  fontSize: '$md',
  fontWeight: 'bold',
  lineHeight: 1.6,
  cursor: 'pointer',

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
})
