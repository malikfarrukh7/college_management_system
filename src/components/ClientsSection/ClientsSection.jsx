import React from 'react'
import styles from './ClientsSection.module.css'

export default function ClientsSection() {
  return (
    <section className={styles.clients}>
      <div className="container">
        <h2 className={styles.clientsTitle}>Join 125,000+ schools and a galaxy of users</h2>
        <div className={styles.logosGrid}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((logo) => (
            <div key={logo} className={styles.logoItem}>
              <div className={styles.logoPlaceholder}>Client {logo}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
