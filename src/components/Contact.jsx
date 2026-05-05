import { useState } from 'react'
import styles from './Contact.module.css'
import useRevealOnScroll from '../hooks/useRevealOnScroll'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const { elementRef, isVisible } = useRevealOnScroll({ threshold: 0.12 })

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section
      id="contact"
      ref={elementRef}
      className={`${styles.section} ${isVisible ? styles.isVisible : ''}`}
    >
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.label}>Contact</p>
          <h2 className={styles.title}>Let's Work Together</h2>
          <p className={styles.sub}>
            Have a project in mind? I'd love to hear about it.
          </p>
        </div>

        {sent ? (
          <div className={styles.success}>
            <span className={styles.checkIcon}>✓</span>
            <p>Message sent! I'll get back to you soon.</p>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <label className={styles.field}>
                <span>Name</span>
                <input type="text" placeholder="Jane Smith" required />
              </label>
              <label className={styles.field}>
                <span>Email</span>
                <input type="email" placeholder="jane@example.com" required />
              </label>
            </div>
            <label className={styles.field}>
              <span>Message</span>
              <textarea rows={5} placeholder="Tell me about your project..." required />
            </label>
            <div className={styles.actions}>
              <button type="submit" className={styles.btn}>
                Send Message
              </button>
              <a href="/Susana_Martinez_CV.pdf" className={styles.btnOutline} download="Susana_Martinez_CV.pdf">
                Download CV
              </a>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
