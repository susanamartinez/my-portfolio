import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'

const links = [
  { label: 'Home', id: 'home' },
  { label: 'Work', id: 'work' },
  { label: 'About Me', id: 'about' },
  { label: 'Contact', id: 'contact' },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = ['home', 'work', 'about', 'contact']
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const inView = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (inView?.target.id) {
          setActiveSection(inView.target.id)
        }
      },
      {
        threshold: [0.25, 0.5, 0.75],
        rootMargin: '-30% 0px -50% 0px',
      },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  function handleNav(e, id) {
    e.preventDefault()
    setActiveSection(id)
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.links}>
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={activeSection === link.id ? styles.activeLink : ''}
                onClick={(e) => handleNav(e, link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
