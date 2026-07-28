export default function ActivityCard({ activity }) {
  return (
    <div className="grid md:grid-cols-[150px_1fr] gap-5 py-5 border-t border-line last:border-b">
      <div className="bg-paper-2 border border-line aspect-[4/3] flex items-center justify-center font-mono text-[10.5px] text-ink-soft text-center p-2">
        {activity.image ? (
          <img src={activity.image} alt={activity.title} className="w-full h-full object-cover" />
        ) : (
          <span>[ ภาพประกอบ ]</span>
        )}
      </div>
      <div>
        <h3 className="font-display text-xl font-semibold mb-1">{activity.title}</h3>
        <p>{activity.description}</p>
        <div className="font-mono text-[11.5px] text-ink-soft mt-1.5">{activity.meta}</div>
        {activity.badge && (
          <span className="inline-block font-mono text-[10.5px] bg-rust text-white px-2 py-1 mt-2">
            {activity.badge}
          </span>
        )}
      </div>
    </div>
  )
}
