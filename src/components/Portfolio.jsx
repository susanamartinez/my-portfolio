import PortfolioCard from './PortfolioCard'
import styles from './Portfolio.module.css'
import projects from '../data/projects'
import useRevealOnScroll from '../hooks/useRevealOnScroll'

export default function Portfolio() {
  const { elementRef, isVisible } = useRevealOnScroll({ threshold: 0.12 })

  return (
    <section
      id="work"
      ref={elementRef}
      className={`${styles.section} ${isVisible ? styles.isVisible : ''}`}
    >
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.label}>Portfolio</p>
          <h2 className={styles.title}>Selected Work</h2>
          <p className={styles.sub}>
            A handful of projects I'm proud of. Each one solved a real problem.
          </p>
        </div>
        <div className={styles.grid}>
          {projects.map((p, index) => (
            <PortfolioCard key={p.slug} delay={index * 60} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
