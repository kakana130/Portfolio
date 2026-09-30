import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { About, Projects, Skills, Activities, Certifications, Contacts } from './components/Sections'
import { profile } from './data'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Activities />
        <Certifications />
        <Contacts />
      </main>
      <footer className="container">© 2026 {profile.nameEn}</footer>
    </>
  )
}
