import { useState } from 'react'
import { projects } from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'
import ProjectModal from './ProjectModal.jsx'

export default function ProjectsSection() {
  const [openProject, setOpenProject] = useState(null)

  return (
    <section id="projects" className="px-6 md:px-12 py-16 md:py-20 border-b border-line max-w-[1080px]">
      <div className="eyebrow">Projects</div>
      <h2 className="section-title">ผลงาน</h2>
      <div className="flex flex-col">
        {projects.map((project) => (
          <ProjectCard key={project.no} project={project} onOpen={setOpenProject} />
        ))}
      </div>

      <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
    </section>
  )
}
