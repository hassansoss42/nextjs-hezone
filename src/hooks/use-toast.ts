import { JSX, useState } from 'react'

type Toast = {
  description: string
  variant?: 'default' | 'destructive'
  action?: JSX.Element
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = (toast: Toast) => {
    setToasts((prevToasts) => [...prevToasts, toast])
  }

  const removeToast = (index: number) => {
    setToasts((prevToasts) => prevToasts.filter((_, i) => i !== index))
  }

  return { toasts, addToast, removeToast }
}
