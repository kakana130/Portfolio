import { profile, education, projects, techSkills, activities, certificationImage } from '../data'

export function About() {
  return (
    <section id="about" className="section container">
      <h2>About me</h2>
      <p className="lead">{profile.name} ({profile.nameEn})</p>
      <p>{profile.summary}</p>
      <p>{profile.bio}</p>

      <div className="two-col">
        <div>
          <h3>Education</h3>
          <ul className="timeline">
            {education.map((e) => (
              <li key={e.title}>
                <strong>{e.title}</strong>
                <span>{e.detail}</span>
                <span>{e.year}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export function Projects() {
  return (
    <section id="projects" className="section container">
      <h2>Projects</h2>
      <div className="projects">
        {projects.map((p) => (
          <article key={p.title} className="project">
            <img src={p.image} alt={p.title} loading="lazy" />
            <div>
              <h3>{p.title}</h3>
              <p className="meta">{p.role}</p>
              <p>{p.description}</p>
              <ul className="chips">
                {p.stack.map((s) => <li key={s}>{s}</li>)}
              </ul>
              <p className="links">
                <a href={p.codeUrl} target="_blank" rel="noreferrer">Code</a>
                {p.liveUrl && <> / <a href={p.liveUrl} target="_blank" rel="noreferrer">Live demo</a></>}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export function Skills() {
  return (
    <section id="skills" className="section container">
      <h2>Technical skills</h2>
      <div className="skills">
        {techSkills.map((g) => (
          <div key={g.category}>
            <h3>{g.category}</h3>
            <ul className="skill-list">
              {g.items.map((i) => (
                <li key={i.name}>
                  <span>{i.name}</span>
                  {i.level > 0 && (
                    <span className="dots" aria-label={`level ${i.level} of 4`}>
                      {[1, 2, 3, 4].map((n) => <i key={n} className={n <= i.level ? 'on' : ''} />)}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Activities() {
  return (
    <section id="activities" className="section container">
      <h2>Activities</h2>
      <div className="projects">
        {activities.map((a) => (
          <article key={a.title} className="project">
            <img src={a.image} alt={a.title} loading="lazy" />
            <div>
              <h3>{a.title}</h3>
              {a.badge && <p className="badge">{a.badge}</p>}
              <p>{a.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export function Certifications() {
  return (
    <section id="certs" className="section container">
      <h2>Certifications</h2>
      <a href={certificationImage} target="_blank" rel="noreferrer">
        <img className="cert" src={certificationImage} alt="Certificate" loading="lazy" />
      </a>
    </section>
  )
}

export function Contacts() {
  return (
    <section id="contacts" className="section container">
      <h2>Contacts</h2>
      <ul className="contact-list">
        <li>Email: <a href={`mailto:${profile.email}`}>{profile.email}</a></li>
        <li>Phone: <a href={`tel:${profile.phoneHref}`}>{profile.phone}</a></li>
        <li>Line: {profile.line}</li>
        {profile.socials.map((s) => (
          <li key={s.label}>{s.label}: <a href={s.href} target="_blank" rel="noreferrer">{s.href.replace('https://', '')}</a></li>
        ))}
      </ul>
    </section>
  )
}
