import React from 'react'
import styles from './CTASection.module.css'

export default function CTASection() {
  return (
    <section className={styles.cta}>
      <div className="container">
        <h2 className={styles.ctaTitle}>Ready to Transform Your Institution?</h2>
        <p className={styles.ctaText}>With eSkooly, you're not just managing a school—you're building a brighter future for education.</p>
        <button className="btn-primary btn-large">Get Started Today</button>
      </div>
    </section>
  )
}
