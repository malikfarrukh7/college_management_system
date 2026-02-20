import styles from './Login.module.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../lib/supabaseClient'

export default function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validate inputs
    if (!email || !password) {
      setError('Please fill in all fields')
      return
    }

    setError('')
    setLoading(true)

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        setError(error.message)
        setLoading(false)
        return
      }

      // Store user email in localStorage for dashboard access
      if (data.user) {
        localStorage.setItem('adminEmail', data.user.email)
        localStorage.setItem('userId', data.user.id)
      }

      setLoading(false)
      navigate('/admin-dashboard')
    } catch (err) {
      setError('An unexpected error occurred')
      setLoading(false)
    }
  }

  return (
    
         
    <div className={styles.login_container}>
      <div className={styles.login_box}>
        <h1>Login</h1>
        {error && <p className={styles['error-message']}>{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className={styles['form-group']}>
            <label htmlFor="email">Email</label>
            <input className={styles.input} type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="password">Password</label>
            <input className={styles.input} type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="Enter your password" required />
          </div>
          <button type="submit" className={styles['login-btn']} disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button>
        </form>
        <p className={styles['signup-link']}>
          Don't have an account? <button type="button" onClick={() => navigate('/register')} className={styles['link-btn']}>Sign UP</button>
        </p>
      </div>
    </div>
  )
}
