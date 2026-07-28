import { navItems } from '../data/nav.js'
import { profile } from '../data/profile.js'

export default function Sidebar({ activeId, isOpen, onNavClick }) {
  return (
    <nav
      className={`bg-sidebar text-sidebar-text border-r border-sidebar-line
        fixed md:sticky top-0 h-screen w-[250px] md:w-[260px] z-50
        flex flex-col transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
    >
      <div className="px-5 pt-5 pb-4 border-b border-sidebar-line">
        <div className="font-mono text-[11px] tracking-wide text-teal uppercase mb-1.5">
          // portfolio.explorer
        </div>
        <div className="font-display text-[22px] text-sidebar-active font-semibold">
          {profile.name}
        </div>
        <div className="font-mono text-[11.5px] mt-1 text-sidebar-text">
          {profile.nameEn} — {profile.role}
        </div>
      </div>

      <div className="px-2 py-3.5 flex-1 overflow-y-auto">
        <div className="font-mono text-[10.5px] tracking-widest text-[#5C6474] uppercase px-3 pt-2.5 pb-1.5">
          workspace
        </div>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => onNavClick?.(item.id)}
            className={`flex items-center gap-2.5 px-3 py-2 font-mono text-[13px] rounded-sm border-l-2 transition-colors
              ${
                activeId === item.id
                  ? 'bg-sidebar-2 text-sidebar-active border-amber'
                  : 'border-transparent hover:bg-sidebar-2 hover:text-sidebar-active'
              }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                activeId === item.id ? 'bg-amber' : 'bg-[#454C59]'
              }`}
            />
            {item.file}
          </a>
        ))}
      </div>

      <div className="px-5 py-4 border-t border-sidebar-line flex gap-3.5">
        <a
          href="https://github.com/kakana130"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[11px] hover:text-amber"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/nattapong-kanyarat-24ab10214"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[11px] hover:text-amber"
        >
          LinkedIn
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="font-mono text-[11px] hover:text-amber"
        >
          Email
        </a>
      </div>
    </nav>
  )
}
