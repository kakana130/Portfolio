import { profile } from '../data/profile.js'

export default function Terminal() {
  return (
    <div className="bg-sidebar text-[#D7DBE3] font-mono text-[13.5px] px-7 py-7 max-w-[640px] rounded leading-[2]">
      <div>
        <span className="text-teal">visitor@web</span>:<span className="text-amber">~$</span> whoami
      </div>
      <div className="text-[#9AA2B1]">
        {profile.name} — {profile.role}
      </div>
      <div>
        <span className="text-teal">visitor@web</span>:<span className="text-amber">~$</span> cat
        contact.txt
      </div>
      <div className="text-[#9AA2B1]">
        email &nbsp;: <a href={`mailto:${profile.email}`} className="text-sidebar-active border-b border-dotted border-[#555] hover:text-amber">{profile.email}</a>
      </div>
      <div className="text-[#9AA2B1]">
        phone &nbsp;: <a href={`tel:${profile.phone}`} className="text-sidebar-active border-b border-dotted border-[#555] hover:text-amber">{profile.phoneDisplay}</a>
      </div>
      <div className="text-[#9AA2B1]">line &nbsp;&nbsp;: {profile.line}</div>
      <div>
        <span className="text-teal">visitor@web</span>:<span className="text-amber">~$</span>{' '}
        <span className="cursor-blink" />
      </div>
    </div>
  )
}
