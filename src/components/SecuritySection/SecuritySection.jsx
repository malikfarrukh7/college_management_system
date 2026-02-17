import React from 'react'
import styles from './SecuritySection.module.css'

export default function SecuritySection() {
  return (
    <section className={styles.security}>
      <div className={styles.container}>
        <h2 className={styles.securityTitle}>Why eSkooly Stands Out</h2>
        <div className={styles.securityContent}>
          <div className={styles.securityText}>
            <p>Fortified by GDPR, CCPA, and Cyber Essentials, eSkooly encrypts every byte across seven global data centers for 99.9% uptime and instant, limitless scale.</p>
            <ul className={styles.securityList}>
              <li>✓ GDPR, CCPA, UK Cyber Essentials & ISO 27001 controls</li>
              <li>✓ AES-256 encryption at rest & in transit</li>
              <li>✓ 99.9% uptime SLA + daily off-site backups</li>
              <li>✓ 7 global data centers (US-East, US-West, London, Frankfurt, Mumbai, Singapore, Sydney)</li>
            </ul>
            <button className="btn-primary">Sign Up Now</button>
          </div>
          <div className={styles.securityImage}>
            <div className="placeholder-image">Security Illustration</div>
          </div>
        </div>
      </div>
    </section>
  )
}
