import React from 'react'
import styles from './Navbar.module.css'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()
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
          <button onClick={() => navigate('/login')} className={styles['btn-login']}>Login</button>
          <button onClick={() => navigate('/register')} className={styles['btn-signup']}>Sign Up</button>
        </div>
      </div>
    </nav>
  )
}
