export default function ProjectCard({ project, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      className="grid md:grid-cols-[220px_1fr] gap-6 md:gap-8 py-8 border-t border-line last:border-b
        text-left w-full group cursor-pointer"
    >
      <div className="bg-paper-2 border border-line aspect-[4/3] flex items-center justify-center font-mono text-[11px] text-ink-soft text-center p-2.5 overflow-hidden relative">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <span>[ ภาพหน้าจอโปรเจกต์ {project.no} ]</span>
        )}
        <span
          className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-colors
            flex items-center justify-center opacity-0 group-hover:opacity-100"
        >
          <span className="font-mono text-[11px] text-paper border border-paper px-3 py-1.5">
            กดดูรายละเอียด →
          </span>
        </span>
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
        <span className="font-mono text-[12.5px] border-b border-ink inline-block mt-3 group-hover:text-rust group-hover:border-rust">
          ดูรายละเอียดและรูปหน้าจอการทำงาน →
        </span>
      </div>
    </button>
  )
}
