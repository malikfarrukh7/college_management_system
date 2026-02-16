import React from 'react'
import styles from './ComprehensiveFeatures.module.css'

export default function ComprehensiveFeatures() {
  const features = [
    { name: 'Certificates & Reports', desc: 'Design and issue certificates using customizable templates' },
    { name: 'Behavior & Skills Tracking', desc: 'Monitor & generate detailed reports on affective domains' },
    { name: 'Institute Profile', desc: "Customize your institution's details, logo, and branding" },
    { name: 'Fee Structure', desc: 'Define and manage fee categories and discounts effortlessly' },
    { name: 'Theme & Language', desc: 'Personalize the dashboard with customizable themes' },
    { name: 'Classes & Subjects', desc: 'Create and assign classes, subjects, and chapters' },
    { name: 'Admissions', desc: 'Simplify student enrollment with automated username generation' },
    { name: 'Timetable Management', desc: 'Design schedules for classes and teachers' },
    { name: 'Accounts', desc: 'Manage income, expenses for transparent financial tracking' },
    { name: 'Exams & Tests', desc: 'Create exams, manage marks, generate result cards' },
    { name: 'Employee Management', desc: 'Add and manage staff, process salary, track logins' },
    { name: 'Fee Management', desc: 'Generate invoices, collect fees, track defaulters' },
  ]

  return (
    <section className={styles.comprehensiveFeatures} id="features">
      <div className="container">
        <h2 className={styles.featuresTitle}>Comprehensive Features for Every Need</h2>
        <div className={styles.featuresShowcase}>
          {features.map((feature, idx) => (
            <div key={idx} className={styles.featureShowcaseItem}>
              <h4>{feature.name}</h4>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
