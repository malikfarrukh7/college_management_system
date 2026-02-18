import './Register.module.css'
import { useNavigate } from 'react-router-dom'
import React, {useState} from 'react'
import { supabase } from '../../lib/supabaseClient'
export default function Register() {
  
  
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [user, setUser] = useState(null);
  const [error,setError] = useState("");
  const [loading, setLoading] = useState(false);
  
  
  const handleSignup = async ()=>{
     
      setError("");
      setLoading(true);
      const { data, error} =await supabase.auth.signUp({ email, password});
      setLoading(false);
      if(error)return setError(error.message);
      setUser(data.user?? null);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add registration logic here
    console.log('Registration submitted')
  }


  return (
    <div className="register-container">
      <div className="register-card">
        <h1>Register</h1>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email"value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input 
            type="password" 
            id="confirm-password" 
            value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm your password" required />
          </div>
          <button 
          type="submit" 
          className="register-btn"
          onClick={handleSignup}
          disabled={loading}
          > {loading ? "Please wait..." : "Register"} </button>
        </form>
        <p className="login-link">
          Already have an account? <button onClick={() => navigate('/login')} className="link-btn">Login here</button>
        </p>
      </div>
    </div>
  )
}