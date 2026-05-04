import PortfolioCard from './PortfolioCard'
import styles from './Portfolio.module.css'
import projects from '../data/projects'

export default function Portfolio() {
  return (
    <section id="work" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.label}>Portfolio</p>
          <h2 className={styles.title}>Selected Work</h2>
          <p className={styles.sub}>
            A handful of projects I'm proud of. Each one solved a real problem.
          </p>
        </div>
        <div className={styles.grid}>
          {projects.map((p) => (
            <PortfolioCard key={p.slug} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
