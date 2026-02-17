import React from 'react'
import styles from './FeaturesOverview.module.css'

export default function FeaturesOverview() {
  const features = [
    {
      title: 'Multi-User Access',
      description: 'Dedicated portals for admin, teachers, students, and parents.'
    },
    {
      title: 'Stay Connected',
      description: 'Built-in real-time Chat and secure file sharing enable seamless team communication.'
    },
    {
      title: 'Comprehensive Reports',
      description: "AI-powered performance reports instantly pinpoint every learner's strengths and gaps."
    },
    {
      title: 'Communication Tools',
      description: 'Send Unlimited Free SMS and WhatsApp alerts instantly.'
    },
    {
      title: 'Live Classes',
      description: 'Conduct Free live classes with eSkooly. No third-party apps needed!'
    },
    {
      title: 'Single Stop Solution',
      description: "eSkooly's robust feature set covers every aspect of school management."
    }
  ]

  return (
    <section className={styles.featuresOverview}>
      <div className={styles.container}>
        <h2 className={styles.overviewTitle}>Everything your institute needs—delivered free, fast, and future-proof</h2>
        <div className={styles.featuresGrid}>
          {features.map((feature, idx) => (
            <div key={idx} className={styles.featureCard}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
