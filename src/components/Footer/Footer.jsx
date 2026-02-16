import React, { useState } from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    alert(`Subscribed with email: ${email}`)
    setEmail('')
  }

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div className={styles.footerSection}>
            <h3>Information</h3>
            <ul>
              <li><a href="#products">Products</a></li>
              <li><a href="#pricing">Plans & Pricing</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#affiliate">Affiliate Program</a></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h3>Support</h3>
            <ul>
              <li><a href="#kb">Knowledge Base</a></li>
              <li><a href="#tutorials">Video Tutorials</a></li>
              <li><a href="#blogs">Our Blogs</a></li>
              <li><a href="#changelog">Changelogs</a></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h3>Legal</h3>
            <ul>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#saas">SaaS Services</a></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h3>Mobile Apps</h3>
            <ul>
              <li><a href="#google">Google Play</a></li>
              <li><a href="#apple">App Store</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerContact}>
            <h3>Contact Us</h3>
            <p>103, Oxford House, Oxford Rd, Manchester M1 7ED, UK</p>
            <p>Email: support@eskooly.com</p>
            <p>Phone: +44 (740) 407 4252</p>
          </div>
          <div className={styles.footerNewsletter}>
            <h3>Subscribe</h3>
            <form className={styles.footerNewsletterForm} onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={styles.footerNewsletterInput}
              />
              <button type="submit" className="btn-primary">Subscribe</button>
            </form>
          </div>
        </div>

        <div className={styles.footerCopyright}>
          <p>Copyright © 2026 eSkooly Inc. - All rights reserved. | eSkooly — The world's #1 free online school management software</p>
          <div className={styles.socialLinks}>
            <a href="#facebook">f</a>
            <a href="#twitter">𝕏</a>
            <a href="#linkedin">in</a>
            <a href="#instagram">📷</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
