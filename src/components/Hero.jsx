import { profile } from '../data'

export default function Hero() {
  return (
    <section className="hero container">
      <div className="hero-text">
        <h1>Hi, I am {profile.firstName}, a {profile.role}</h1>
        <a className="btn" href="#contacts">Contact me</a>
        <p className="social">
          {profile.socials.map((s, i) => (
            <span key={s.label}>
              {i > 0 && ' / '}
              <a href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
            </span>
          ))}
        </p>
      </div>
      <div className="hero-photo">
        <img src={profile.photo} alt={profile.nameEn} />
      </div>
    </section>
  )
}
