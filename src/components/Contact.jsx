import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className={styles.section}>
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
            <button type="submit" className={styles.btn}>
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
