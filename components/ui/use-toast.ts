"use client"

import type React from "react"

// Simplified version of the use-toast.ts file
import { useState } from "react"

type ToastProps = {
  title?: string
  description?: string
  action?: React.ReactNode
  id?: string
}

export function useToast() {
  const [toasts, setToasts] = useState<ToastProps[]>([])

  const toast = (props: Omit<ToastProps, "id">) => {
    const id = Math.random().toString(36).substring(2, 9)
    setToasts((prev) => [...prev, { ...props, id }])

    // Auto dismiss after 5 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id))
    }, 5000)
  }

  return { toast, toasts }
}
