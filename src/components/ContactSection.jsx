import { socialLinks } from '../data/profile.js'
import Terminal from './Terminal.jsx'

export default function ContactSection() {
  return (
    <section id="contact" className="px-6 md:px-12 py-16 md:py-20 pb-24 max-w-[1080px]">
      <div className="eyebrow">Contact</div>
      <h2 className="section-title">ติดต่อฉัน</h2>
      <Terminal />

      <h3 className="font-display text-xl font-semibold mt-11 mb-1.5">ลิงก์โซเชียลมีเดีย</h3>
      <p className="mb-0">ช่องทางที่เปิดเผยต่อสาธารณะสำหรับติดตามผลงานและติดต่องาน</p>
      <div className="flex gap-4 mt-7 flex-wrap">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm border border-ink px-4 py-2.5 flex items-center gap-2 hover:bg-ink hover:text-paper"
          >
            {link.label} ↗
          </a>
        ))}
      </div>
    </section>
  )
}
