import { navItems } from '../data/nav.js'
import TabHeader from '../components/TabHeader.jsx'
import HomeSection from '../components/HomeSection.jsx'
import AboutSection from '../components/AboutSection.jsx'
import ProjectsSection from '../components/ProjectsSection.jsx'
import TechSkillsSection from '../components/TechSkillsSection.jsx'
import ActivitiesSection from '../components/ActivitiesSection.jsx'
import CertificationsSection from '../components/CertificationsSection.jsx'
import ContactSection from '../components/ContactSection.jsx'
import Footer from '../components/Footer.jsx'

const fileOf = (id) => navItems.find((n) => n.id === id)?.file

export default function Home() {
  return (
    <main className="min-w-0">
      <TabHeader file={fileOf('home')} />
      <HomeSection />

      <TabHeader file={fileOf('about')} />
      <AboutSection />

      <TabHeader file={fileOf('projects')} />
      <ProjectsSection />

      <TabHeader file={fileOf('techskills')} />
      <TechSkillsSection />

      <TabHeader file={fileOf('activities')} />
      <ActivitiesSection />

      <TabHeader file={fileOf('certs')} />
      <CertificationsSection />

      <TabHeader file={fileOf('contact')} />
      <ContactSection />

      <Footer />
    </main>
  )
}
