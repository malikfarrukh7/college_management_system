import React from 'react'
import styles from './HeroSection.module.css'
import heroBanner from '../../assets/images/hero-banner4.webp'

export default function HeroSection() {
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
          
          <button type="submit" className="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group">
      Explore
      <svg className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45" viewBox="0 0 16 19" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z" className="fill-gray-800 group-hover:fill-gray-800" />
      </svg>
    </button>


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
