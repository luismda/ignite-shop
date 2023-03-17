import { useContext } from 'react'
import { ToastMessageContext } from '@/contexts/ToastMessageContext'

export function useToastMessage() {
  const context = useContext(ToastMessageContext)

  return context
}
