import { Link } from 'react-router-dom'
import styles from './PortfolioCard.module.css'
import useRevealOnScroll from '../hooks/useRevealOnScroll'

export default function PortfolioCard({ slug, title, description, tags, color, emoji, image, delay = 0 }) {
  const { elementRef, isVisible } = useRevealOnScroll({ threshold: 0.22 })

  return (
    <Link
      to={`/project/${slug}`}
      ref={elementRef}
      className={`${styles.card} ${isVisible ? styles.isVisible : ''}`}
      style={{ '--card-color': color, '--reveal-delay': `${delay}ms` }}
    >
      <div className={styles.image}>
        {image
          ? <img src={image} alt={title} />
          : <><div className={styles.imageBg} /><span className={styles.emoji}>{emoji}</span></>
        }
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
        <div className={styles.footer}>
          <ul className={styles.tags}>
            {tags.map((t) => (
              <li key={t} className={styles.tag}>{t}</li>
            ))}
          </ul>
          <span className={styles.link}>View &rarr;</span>
        </div>
      </div>
    </Link>
  )
}
