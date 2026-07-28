/** เลื่อนหน้าจอไปยัง section ตาม id แบบ smooth scroll */
export function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
