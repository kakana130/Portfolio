import { profile, education, skillBars } from '../data/profile.js'
import SkillBar from './SkillBar.jsx'

export default function AboutSection() {
  return (
    <section id="about" className="px-6 md:px-12 py-16 md:py-20 border-b border-line max-w-[1080px]">
      <div className="eyebrow">About Me</div>
      <h2 className="section-title">เกี่ยวกับฉัน</h2>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="font-display text-xl font-semibold mb-2">ประวัติโดยย่อ</h3>
          <p className="mb-6">{profile.bio}</p>

          <h3 className="font-display text-xl font-semibold mb-2">การศึกษา</h3>
          {education.map((edu) => (
            <div key={edu.title} className="mb-4.5 pl-4 border-l-2 border-line">
              <div className="font-mono text-[11.5px] text-teal">{edu.year}</div>
              <strong>{edu.title}</strong>
              <p>{edu.detail}</p>
            </div>
          ))}
        </div>

        <div>
          <h3 className="font-display text-xl font-semibold mb-2">ทักษะและความเชี่ยวชาญ</h3>
          <div className="mt-1.5">
            {skillBars.map((s) => (
              <SkillBar key={s.label} label={s.label} value={s.value} />
            ))}
          </div>

          <h3 className="font-display text-xl font-semibold mt-6 mb-2">
            ประสบการณ์การทำงาน
          </h3>
          <p>
            {profile.bioWork}
          </p>
        </div>
      </div>
    </section>
  )
}
