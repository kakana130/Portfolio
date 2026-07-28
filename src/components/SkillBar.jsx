export default function SkillBar({ label, value }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between font-mono text-[12.5px] mb-1.5 text-ink">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-1.5 bg-paper-2 border border-line">
        <div className="h-full bg-amber" style={{ width: `${value}%` }} />
      </div>
    </div>
  )
}
