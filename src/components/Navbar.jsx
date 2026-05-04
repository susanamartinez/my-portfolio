import styles from './Navbar.module.css'

const links = ['Home', 'Work', 'Contact']

export default function Navbar() {
  function handleNav(e, id) {
    e.preventDefault()
    const el = document.getElementById(id.toLowerCase())
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.links}>
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} onClick={(e) => handleNav(e, l)}>
                {l}
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.ctaGroup}>
          <a href="/Susana_Martinez_CV.pdf" className={styles.ctaOutline} download="Susana_Martinez_CV.pdf">
            Download CV
          </a>
          <a
            href="#contact"
            className={styles.cta}
            onClick={(e) => handleNav(e, 'Contact')}
          >
            Hire me
          </a>
        </div>
      </nav>
    </header>
  )
}
