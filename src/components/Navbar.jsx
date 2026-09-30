import { nav, profile } from '../data'

export default function Navbar() {
  return (
    <header className="nav container">
      <a href="#" className="logo">{profile.firstName.toUpperCase()}</a>
      <nav>
        {nav.map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
      </nav>
    </header>
  )
}
