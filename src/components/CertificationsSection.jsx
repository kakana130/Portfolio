import { certificationImage } from '../data/certifications.js'

export default function CertificationsSection() {
  return (
    <section id="certs" className="px-6 md:px-12 py-16 md:py-20 border-b border-line max-w-[1080px]">
      <div className="eyebrow">Certifications</div>
      <h2 className="section-title">ใบรับรอง</h2>

      <div className="border border-line bg-paper-2 max-w-[560px] aspect-[4/3] flex items-center justify-center overflow-hidden">
        {certificationImage ? (
          <img
            src={certificationImage}
            alt="ใบรับรอง"
            className="w-full h-full object-contain"
          />
        ) : (
          <span className="font-mono text-[12px] text-ink-soft text-center p-6">
            [ วางรูปใบรับรองที่ src/assets/ แล้วแก้ path ใน
            src/data/certifications.js ]
          </span>
        )}
      </div>
    </section>
  )
}