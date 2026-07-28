import { profile } from '../data/profile.js'

export default function Footer() {
  return (
    <footer className="px-6 md:px-12 py-6 font-mono text-[11.5px] text-ink-soft border-t border-line">
      © 2026 {profile.name} — สร้างด้วย React + Vite + Tailwind CSS · แก้ไขข้อมูลได้ในโฟลเดอร์ src/data
    </footer>
  )
}
