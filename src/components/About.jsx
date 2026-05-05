import styles from './About.module.css'
import useRevealOnScroll from '../hooks/useRevealOnScroll'

export default function About() {
  const { elementRef, isVisible } = useRevealOnScroll({ threshold: 0.12 })

  return (
    <section
      id="about"
      ref={elementRef}
      className={`${styles.section} ${isVisible ? styles.isVisible : ''}`}
    >
      <div className={styles.inner}>
        <p className={styles.label}>About Me</p>
        <h2 className={styles.title}>Design-minded, product-focused, and detail-driven.</h2>
        <p className={styles.copy}>
          I am Susana, a Lead UX Designer who turns complex ideas into clear digital experiences.
          I care about usability, thoughtful interactions, and clean handoff-ready implementation.
        </p>
      </div>
    </section>
  )
}
