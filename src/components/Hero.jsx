import styles from './Hero.module.css'
import useRevealOnScroll from '../hooks/useRevealOnScroll'

export default function Hero() {
  const { elementRef, isVisible } = useRevealOnScroll({ threshold: 0.15 })

  return (
    <section
      id="home"
      ref={elementRef}
      className={`${styles.hero} ${isVisible ? styles.isVisible : ''}`}
    >
      <h1 className={styles.heading}>
        Hi, I'm <span className={styles.accent}>Susana</span>
        <br />
        Lead UX Designer
      </h1>
      <p className={styles.sub}>
        I build fast, beautiful web experiences with React and modern tooling.
        Focused on clean code and delightful UI.
      </p>
      <div className={styles.actions}>
        <a href="#work" className={styles.primary}>View My Work</a>
        <a href="#contact" className={styles.secondary}>Get In Touch</a>
      </div>
    </section>
  )
}
