export default function ProjectCard({ project }) {
  return (
    <div className="grid md:grid-cols-[220px_1fr] gap-6 md:gap-8 py-8 border-t border-line last:border-b">
      <div className="bg-paper-2 border border-line aspect-[4/3] flex items-center justify-center font-mono text-[11px] text-ink-soft text-center p-2.5 overflow-hidden">
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          <span>[ ภาพหน้าจอโปรเจกต์ {project.no} ]</span>
        )}
      </div>
      <div>
        <h3 className="font-display text-xl font-semibold flex items-baseline gap-2.5 flex-wrap">
          <span className="font-mono text-xs text-amber">{project.no}</span>
          {project.title}
        </h3>
        <div className="font-mono text-xs text-teal my-1.5">{project.role}</div>
        <p>{project.description}</p>
        {project.note && (
          <p className="text-ink-soft text-[13px] italic mt-2">หมายเหตุ: {project.note}</p>
        )}
        <div className="flex flex-wrap gap-2 my-3.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[11px] border border-line px-2.5 py-1 text-ink-soft rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-3">
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
              {project.codeUrl ? 'ดูเว็บไซต์จริง →' : 'ดูไฟล์ Figma →'}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
