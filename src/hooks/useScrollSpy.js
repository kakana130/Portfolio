import { useEffect, useState } from 'react'

/**
 * ติดตามว่าผู้ใช้กำลังเลื่อนดู section ไหนอยู่ เพื่อไฮไลต์เมนูที่ตรงกัน
 * @param {string[]} ids - รายการ id ของ section เรียงตามลำดับในหน้า
 * @param {number} offset - ระยะชดเชยจากขอบบน (px)
 */
export function useScrollSpy(ids, offset = 140) {
  const [activeId, setActiveId] = useState(ids[0])

  useEffect(() => {
    function handleScroll() {
      const y = window.scrollY + offset
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= y) current = id
      }
      setActiveId(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [ids, offset])

  return activeId
}
