import { JSX, useState } from 'react'

type Toast = {
  id: string
  title?: string // <-- Add this line
  description: string
  variant?: 'default' | 'destructive'
  action?: JSX.Element
}

// Accept everything except 'id'
type ToastInput = Omit<Toast, 'id'>

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = (toast: ToastInput) => {
    setToasts((prevToasts) => [
      ...prevToasts,
      { ...toast, id: Date.now().toString() },
    ])
  }

  const removeToast = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
  }

  return { toasts, addToast, removeToast }
}
