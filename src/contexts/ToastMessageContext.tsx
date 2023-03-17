import { createContext, ReactNode, useState } from 'react'
import { ToastMessage } from '@/components/ToastMessage'

type ToastOptions = {
  type: 'success' | 'error'
  title: string
}

interface ToastMessageContextData {
  show: (options: ToastOptions) => void
}

export const ToastMessageContext = createContext({} as ToastMessageContextData)

interface ToastMessageProviderProps {
  children: ReactNode
}

export function ToastMessageProvider({ children }: ToastMessageProviderProps) {
  const [toastOptions, setToastOptions] = useState({} as ToastOptions)
  const [isOpen, setIsOpen] = useState(false)

  function show(options: ToastOptions) {
    setToastOptions(options)
    setIsOpen(true)
  }

  return (
    <ToastMessageContext.Provider value={{ show }}>
      {children}

      <ToastMessage
        type={toastOptions.type}
        title={toastOptions.title}
        isOpen={isOpen}
        onOpenChange={setIsOpen}
      />
    </ToastMessageContext.Provider>
  )
}
