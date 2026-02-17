import React from 'react'
import styles from './AboutSection.module.css'

export default function AboutSection() {
  const aboutItems = [
    {
      icon: '🚀',
      title: 'Innovation at our core',
      description: 'eSkooly stands as the vanguard of school-management solutions, consistently pioneering the integration of next-generation technologies.'
    },
    {
      icon: '📊',
      title: 'Simplifying complexity',
      description: 'Infographics & animations distill complex academic data into intuitive visuals for students, parents, and educators.'
    },
    {
      icon: '📈',
      title: 'Empowering institutional growth',
      description: 'Our platform equips schools with automated workflows, real-time analytics, and streamlined communication.'
    }
  ]

  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.aboutTitle}>eSkooly is a revolution in education management</h2>
        <div className={styles.aboutGrid}>
          {aboutItems.map((item, idx) => (
            <div key={idx} className={styles.aboutItem}>
              <div className={styles.aboutIcon}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
