import { useState, useCallback } from 'react'

/** จัดการสถานะเปิด/ปิดเมนูบนมือถือ */
export function useMobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = useCallback(() => setIsOpen((v) => !v), [])
  const close = useCallback(() => setIsOpen(false), [])

  return { isOpen, toggle, close }
}
