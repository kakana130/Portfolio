import { activities } from '../data/activities.js'
import ActivityCard from './ActivityCard.jsx'

const groups = [
  { key: 'competitions', label: 'การแข่งขันด้านโปรแกรมมิ่ง / แฮกกาธอน' },
]

export default function ActivitiesSection() {
  return (
    <section id="activities" className="px-6 md:px-12 py-16 md:py-20 border-b border-line max-w-[1080px]">
      <div className="eyebrow">Activities & Contributions</div>
      <h2 className="section-title">กิจกรรมและการมีส่วนร่วม</h2>

      {groups.map((g) => (
        <div key={g.key} className="mb-11 last:mb-0">
          <div className="font-mono text-xs text-teal uppercase tracking-wide mb-4.5">
            {g.label}
          </div>
          {activities[g.key].map((item) => (
            <ActivityCard key={item.title} activity={item} />
          ))}
        </div>
      ))}
    </section>
  )
}
