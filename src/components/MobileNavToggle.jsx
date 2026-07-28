export default function MobileNavToggle({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="md:hidden fixed top-3.5 left-3.5 z-[100] bg-sidebar text-sidebar-active
        border border-sidebar-line font-mono text-xs px-3 py-2 rounded-sm"
    >
      ☰ เมนู
    </button>
  )
}
