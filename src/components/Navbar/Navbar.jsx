import React from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navbarContainer}`}>
        <div className={styles.navBrand}>eSkooly</div>
        <ul className={styles.navLinks}>
          <li><a href="#products">Products</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#support">Support</a></li>
        </ul>
        <div className={styles.navActions}>
          <button className="btn-login">Login</button>
          <button className="btn-signup">Sign Up</button>
        </div>
      </div>
    </nav>
  )
}
