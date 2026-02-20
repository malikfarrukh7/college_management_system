import './Register.module.css'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import { supabase } from '../../lib/supabaseClient'

export default function Register() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSignup = async (e) => {
    e.preventDefault()

    // Validate inputs
    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields')
      return
    }

    // Confirm password check
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    // Password length validation
    if (password.length < 6) {
      setError('Password must be at least 6 characters long')
      return
    }

    setError('')
    setSuccess('')
    setLoading(true)

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      })

      if (error) {
        setError(error.message)
        setLoading(false)
        return
      }

      setSuccess('Account created successfully! Redirecting to login...')
      setLoading(false)

      // Redirect to login after 2 seconds
      setTimeout(() => {
        navigate('/login')
      }, 2000)
    } catch (err) {
      setError(err.message || 'An unexpected error occurred')
      setLoading(false)
    }
  }

  return (
    <div className="register-container">
      <div className="register-card">
        <h1>Register</h1>

        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}

        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? 'Please wait...' : 'Sign Up'}
          </button>
        </form>

        <p className="login-link">
          Already have an account?{' '}
          <button onClick={() => navigate('/login')} className="link-btn">
            Login here
          </button>
        </p>
      </div>
    </div>
  )
}
