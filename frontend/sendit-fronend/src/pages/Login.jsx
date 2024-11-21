import React, { useState } from 'react'
import { Link } from 'react-router-dom' // Import Link for navigation
import './Login.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false) // State for Remember Me checkbox
  const [successMessage, setSuccessMessage] = useState('') // State for success message

  const handleSubmit = e => {
    e.preventDefault()

    // Log the email and password to the console
    console.log('Logging in with:', { email, password, rememberMe })

    // Simulate a successful login
    setSuccessMessage('Login successfully!') // Set success message

    // Reset form fields after submission (optional)
    setEmail('')
    setPassword('')
    setRememberMe(false) // Reset Remember Me checkbox
  }

  return (
    <div className='login-page'>
      {' '}
      {/* Wrapper for background color */}
      <div className='login-container'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <div className='remember-me'>
            <input
              type='checkbox'
              id='rememberMe'
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label htmlFor='rememberMe'>Remember Me</label>
          </div>
          <button type='submit'>Log In</button>
        </form>
        {successMessage && <p className='success-message'>{successMessage}</p>}{' '}
        {/* Display success message */}
        {/* Links for Signup and Forgot Password */}
        <p>
          Don't have an account?
          <Link to='/signup' className='signup-link'>
            {' '}
            Sign Up
          </Link>
        </p>
        <p>
          <Link to='/forgotpassword' className='forgot-password-link'>
            Forgot Password?
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
