import { styled } from '@/styles'
import * as Toast from '@radix-ui/react-toast'

export const ToastViewport = styled(Toast.Viewport, {
  width: 'fit-content',
  minWidth: '17.5rem',
  maxWidth: '22.5rem',
  position: 'fixed',
  top: '1rem',
  margin: '0 auto',
  left: 0,
  right: 0,
  listStyle: 'none',
})

export const ToastMessageContainer = styled(Toast.Root, {
  borderRadius: 8,
  boxShadow: '0 0 60px $black',

  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  padding: '1rem',

  '&[data-state="closed"]': {
    transition: 'all 1s',
  },

  variants: {
    type: {
      success: {
        backgroundColor: '$green500',
      },

      error: {
        backgroundColor: '$red500',
      },
    },
  },
})
