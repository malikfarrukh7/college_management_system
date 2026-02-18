import './Login.module.css'
import React, {useState} from 'react'

import { useNavigate } from 'react-router-dom'


export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')



  const handleSubmit = (e) => {
    e.preventDefault()
    // Add login logic here
    console.log('Login submitted')
    console.log('Email:', email  ,'Password:', password)
  }

  return (
    
         
    <div className="login-container">
      <div className="login-card">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="Enter your password" required />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
        <p className="signup-link">
          Don't have an account? <button onClick={() => navigate('/register')} className="link-btn">Register here</button>
        </p>
      </div>
    </div>
  )
}
