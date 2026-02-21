

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
            
            
            <li className={styles.dropdown}>
            <span className={styles.dropdownToggle}>Products <span className={styles.arrow}>▾</span> </span>

            <div className={styles.dropdownMenu}>
              
              
              <div className={styles.dropdownColumn}>
              
                <h4>Cloud Solutions</h4>
                <p><strong>eSkooly Basic</strong><br />Free online school software</p>
                <p><strong>Mobile Apps</strong><br />Android & iOS apps</p>
                <p><strong>Desktop App</strong><br />Windows, macOS, Linux</p>
              </div>

              <div className={styles.dropdownColumn}>
                <h4>Self Hosted</h4>
                <p><strong>eSkooly Pro</strong><br />Advanced self-hosted solution</p>
                <p><strong>eSkooly LMS</strong><br />Learning Management System</p>
                <p><strong>Cloud Services</strong><br />Secure hosting</p>
              </div>
            
            </div>
          
          </li>
        
        </ul>
        
        <div className={styles.navActions}>
         
          <button onClick={() => navigate('/login')} className={styles['btn-login']}>Login</button>
          <button onClick={() => navigate('/register')} className={styles['btn-signup']}>Sign Up</button>
        
        </div>
      
      </div>
    
    </nav>
  )
}


