export default function CertCard({ cert }) {
  return (
    <div className="border border-line bg-paper-2 p-5 flex flex-col gap-1.5">
      <div className="font-mono text-[11px] text-teal uppercase">{cert.org}</div>
      <h3 className="font-display text-xl font-semibold">{cert.title}</h3>
      <p className="text-[13.5px]">{cert.detail}</p>
      <div className="font-mono text-[11px] text-ink-soft mt-auto pt-2">{cert.date}</div>
    </div>
  )
}
