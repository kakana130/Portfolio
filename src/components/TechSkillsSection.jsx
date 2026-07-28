import { techSkills } from '../data/techSkills.js'
import TechChip from './TechChip.jsx'

export default function TechSkillsSection() {
  return (
    <section id="techskills" className="px-6 md:px-12 py-16 md:py-20 border-b border-line max-w-[1080px]">
      <div className="eyebrow">Technical Skills</div>
      <h2 className="section-title">ทักษะทางเทคนิค</h2>
      <div className="grid md:grid-cols-2 gap-9">
        {techSkills.map((group) => (
          <div key={group.category}>
            <div className="font-mono text-xs text-amber uppercase tracking-wide mb-3.5">
              {group.category}
            </div>
            <div className="flex flex-wrap gap-2.5">
              {group.items.map((item) => (
                <TechChip key={item.name} name={item.name} level={item.level} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
