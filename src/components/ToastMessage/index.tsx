import * as Toast from '@radix-ui/react-toast'
import { useTransition, animated, config } from '@react-spring/web'
import { CheckCircle, XCircle } from 'phosphor-react'

import { ToastMessageContainer, ToastViewport } from './style'

interface ToastMessageProps {
  type: 'success' | 'error'
  title: string
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
}

export function ToastMessage({
  type,
  title,
  isOpen,
  onOpenChange,
}: ToastMessageProps) {
  const transitions = useTransition(isOpen, {
    from: { opcity: 0, y: -120 },
    enter: { opcity: 1, y: 0 },
    leave: { opacity: 0, y: -120 },
    config: config.wobbly,
  })

  return (
    <Toast.Provider>
      {transitions((styles, item) => {
        return (
          item && (
            <>
              <ToastMessageContainer
                type={type}
                open={isOpen}
                onOpenChange={onOpenChange}
                forceMount
                asChild
              >
                <animated.div style={styles}>
                  {type === 'success' && <CheckCircle size={32} />}
                  {type === 'error' && <XCircle size={32} />}

                  <Toast.Title>{title}</Toast.Title>
                </animated.div>
              </ToastMessageContainer>

              <ToastViewport />
            </>
          )
        )
      })}
    </Toast.Provider>
  )
}
