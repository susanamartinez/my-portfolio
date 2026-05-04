import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
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
