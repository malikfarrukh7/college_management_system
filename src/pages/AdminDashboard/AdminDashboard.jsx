import './AdminDashboard.module.css'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../lib/supabaseClient'

export default function AdminDashboard() {
  const navigate = useNavigate()

  const [adminEmail, setAdminEmail] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    // Check if user is logged in and get their email
    const checkAuth = async () => {
      try {
        const { data } = await supabase.auth.getSession()

        if (!data.session) {
          // User not logged in, redirect to login
          navigate('/login')
          return
        }

        setAdminEmail(data.session.user.email)
        setLoading(false)
      } catch (err) {
        setError('Failed to load admin info')
        setLoading(false)
      }
    }

    checkAuth()
  }, [navigate])

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut()

      if (error) {
        setError('Failed to logout')
        return
      }

      // Clear localStorage
      localStorage.removeItem('adminEmail')
      localStorage.removeItem('userId')

      navigate('/login')
    } catch (err) {
      setError('An unexpected error occurred during logout')
    }
  }

  if (loading) {
    return (
      <div className="admin-dashboard-container">
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div className="admin-dashboard-container">
      <div className="admin-dashboard-card">
        <div className="dashboard-header">
          <h1>Admin Dashboard</h1>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>

        {error && <p className="error-message">{error}</p>}

        <div className="admin-info-section">
          <div className="info-card">
            <h2>Admin Information</h2>
            <div className="info-item">
              <label>Email:</label>
              <p className="admin-email">{adminEmail}</p>
            </div>
          </div>
        </div>

        <div className="dashboard-content">
          <div className="stats-grid">
            <div className="stat-card">
              <h3>Total Users</h3>
              <p className="stat-value">0</p>
            </div>
            <div className="stat-card">
              <h3>Active Sessions</h3>
              <p className="stat-value">0</p>
            </div>
            <div className="stat-card">
              <h3>System Status</h3>
              <p className="stat-value">Healthy</p>
            </div>
          </div>
        </div>

        <div className="welcome-section">
          <h2>Welcome to the College Management System</h2>
          <p>You are logged in as an administrator. Manage your system from this dashboard.</p>
        </div>
      </div>
    </div>
  )
}
