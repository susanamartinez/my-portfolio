import { useParams, Link } from 'react-router-dom'
import projects from '../data/projects'
import styles from './ProjectPage.module.css'

export default function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className={styles.notFound}>
        <h2>Project not found</h2>
        <Link to="/" className={styles.back}>← Back to portfolio</Link>
      </div>
    )
  }

  return (
    <div className={styles.page} style={{ '--card-color': project.color }}>
      <div className={styles.inner}>
        <Link to="/" className={styles.back}>← Back to portfolio</Link>

        <div className={styles.hero}>
          <div className={styles.imagePlaceholder}>
            {project.image
              ? <img src={project.image} alt={project.title} />
              : <><div className={styles.imageBg} /><span className={styles.emoji}>{project.emoji}</span></>
            }
          </div>
        </div>

        <div className={styles.content}>
          <ul className={styles.tags}>
            {project.tags.map((t) => (
              <li key={t} className={styles.tag}>{t}</li>
            ))}
          </ul>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.lead}>{project.description}</p>
          <p className={styles.body}>{project.longDescription}</p>
        </div>
      </div>
    </div>
  )
}
