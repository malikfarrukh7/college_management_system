import React from 'react'
import styles from './HeroSection.module.css'
import heroBanner from '../../assets/images/hero-banner4.webp'

const HeroSection = () => {




  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
           <span className={styles.small_font}>Free</span> 
           <span className={styles.bold_fonts}>Online</span>
           <span className={styles.small_font}>School</span> <br />
           <span className={styles.bold_fonts}>Management</span><br />
           <span className={styles.small_font}>Software</span> <br />
            
            <div className={styles.p}>

           <span>You can now manage your school, college, or any</span><br />
           <span>educational institution seamlessly with eSkooly — completely</span><br />
           <span>free for life, with no limitations.</span><br />

            </div>
          
          <div className={styles.heroActions}>
            <button className={`${styles.btnPrimary} ${styles.btnLarge}`}>Get Started, It's Free</button>
            <button className={styles.btnPlay}>▶ Play Demo</button>
          

          </div>
          <div className={styles.heroStats}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>125,000+</div>
              <div className={styles.statLabel}>Trusted Schools</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>4.6</div>
              <div className={styles.statLabel}>Rated on 9300+ Reviews</div>
            </div>
          </div>
        </div>
        <div className={styles.heroImage}>
         <img
  src={heroBanner}
  alt="Dashboard Preview"
  className={styles.heroBannerImage}
/>

        </div>
      </div>
    </section>
  )
}
export default HeroSection