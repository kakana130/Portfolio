import { useEffect } from 'react'
import ImageCarousel from './ImageCarousel.jsx'

export default function ProjectModal({ project, onClose }) {
  // ปิด popup ด้วยปุ่ม Esc และล็อกการสกรอลพื้นหลัง — ทำงานเฉพาะตอนมี project เปิดอยู่เท่านั้น
  useEffect(() => {
    if (!project) return

    function handleKey(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-[200] flex items-start md:items-center justify-center
        bg-ink/70 backdrop-blur-[2px] p-4 md:p-8 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-paper border border-line max-w-3xl w-full my-8 md:my-0 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="ปิด"
          className="absolute top-3 right-3 md:top-4 md:right-4 z-10
            w-9 h-9 flex items-center justify-center rounded-full
            bg-paper border border-line font-mono text-ink hover:bg-ink hover:text-paper transition-colors"
        >
          ✕
        </button>

        <div className="p-6 md:p-9">
          <h3 className="font-display text-2xl md:text-[28px] font-semibold flex items-baseline gap-2.5 flex-wrap pr-10">
            <span className="font-mono text-xs text-amber">{project.no}</span>
            {project.title}
          </h3>
          <div className="font-mono text-xs text-teal my-2">{project.role}</div>
          <p>{project.description}</p>
          {project.note && (
            <p className="text-ink-soft text-[13px] italic mt-2">หมายเหตุ: {project.note}</p>
          )}

          <div className="flex flex-wrap gap-2 my-4">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] border border-line px-2.5 py-1 text-ink-soft rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4 mb-6">
            {project.codeUrl && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[12.5px] border-b border-ink hover:text-rust hover:border-rust"
              >
                ดูโค้ด (GitHub) →
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[12.5px] border-b border-ink hover:text-rust hover:border-rust"
              >
                ดูเว็บไซต์จริง →
              </a>
            )}
          </div>

          {project.screenshots && project.screenshots.length > 0 && (
            <div>
              <div className="font-mono text-xs text-amber uppercase tracking-wide mb-3">
                หน้าจอการทำงานของแอป
              </div>
              <ImageCarousel images={project.screenshots} alt={project.title} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}