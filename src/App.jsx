import Sidebar from './components/Sidebar.jsx'
import MobileNavToggle from './components/MobileNavToggle.jsx'
import Home from './pages/Home.jsx'
import { navItems } from './data/nav.js'
import { useScrollSpy } from './hooks/useScrollSpy.js'
import { useMobileNav } from './hooks/useMobileNav.js'

const sectionIds = navItems.map((n) => n.id)

export default function App() {
  const activeId = useScrollSpy(sectionIds)
  const { isOpen, toggle, close } = useMobileNav()

  return (
    <>
      <MobileNavToggle onClick={toggle} />
      <div className="grid md:grid-cols-[260px_1fr] min-h-screen">
        <Sidebar activeId={activeId} isOpen={isOpen} onNavClick={close} />
        <Home />
      </div>
    </>
  )
}
