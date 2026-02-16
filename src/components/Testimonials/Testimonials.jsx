import React from 'react'
import styles from './Testimonials.module.css'

export default function Testimonials() {
  const testimonials = [
    {
      initials: 'ML',
      name: 'Maheshwari Lall',
      title: 'School Head | Redhill School',
      text: "eSkooly's robust features have streamlined our school operations. It's reliable, intuitive, and has significantly enhanced our efficiency."
    },
    {
      initials: 'JL',
      name: 'Jane Lunnon',
      title: 'School Head | Alleyn\'s School',
      text: 'A game-changer for educational institutions. The platform is user-friendly and comprehensive.'
    },
    {
      initials: 'JF',
      name: 'Jamie Flegg',
      title: 'Class Teacher | Wellington College',
      text: "The best management software we've used. It saves us time and improves communication with parents."
    }
  ]

  return (
    <section className={styles.testimonials}>
      <div className="container">
        <h2 className={styles.testimonialsTitle}>What Our Clients Say About Us</h2>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className={styles.testimonialCard}>
              <div className={styles.testimonialHeader}>
                <div className={styles.testimonialAvatar}>{testimonial.initials}</div>
                <div>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.title}</p>
                </div>
              </div>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.testimonialText}>"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
