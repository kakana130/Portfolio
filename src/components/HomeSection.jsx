import { profile } from '../data/profile.js'
import { scrollToSection } from '../utils/scrollToSection.js'

export default function HomeSection() {
  return (
    <section
      id="home"
      className="px-6 md:px-12 py-16 md:py-[70px] border-b border-line max-w-[1080px]
        grid md:grid-cols-[1.1fr_.9fr] gap-10 md:gap-14 items-center"
    >
      <div>
        <div className="eyebrow">Home</div>
        <h1 className="font-display text-[34px] md:text-[56px] leading-[1.12] -tracking-wide text-ink mb-5">
          {profile.headline} <em className="italic text-rust">{profile.headlineEm}</em>{' '}
          {profile.headlineEnd}
        </h1>
        <p className="text-[17px] max-w-[520px] mb-7 text-ink-soft">{profile.summary}</p>
        <div className="flex gap-3.5 flex-wrap">
          <button onClick={() => scrollToSection('projects')} className="btn btn-primary">
            ดูผลงานของฉัน →
          </button>
          <button onClick={() => scrollToSection('contact')} className="btn btn-ghost">
            ติดต่อฉัน
          </button>
        </div>
      </div>

      <div className="flex justify-center relative">
        <div className="w-full max-w-[340px] aspect-square border-2 border-ink relative bg-paper-2 flex items-center justify-center font-mono text-ink-soft text-[13px] text-center p-5 before:content-[''] before:absolute before:top-3 before:left-3 before:-right-3 before:-bottom-3 before:border-2 before:border-amber before:-z-10">
          {profile.avatar ? (
            <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover" />
          ) : (
            <span>
              วางรูปโปรไฟล์ หรือโลโก้ส่วนตัว
              <br />
              ขนาดแนะนำ 600×600px
            </span>
          )}
        </div>
      </div>
    </section>
  )
}
