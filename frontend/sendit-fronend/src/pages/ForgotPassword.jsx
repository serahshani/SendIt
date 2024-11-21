src / components / ForgotPassword.jsx

import React, { useState } from 'react'
import { Link } from 'react-router-dom' // Import Link for navigation
import './ForgotPassword.css'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [successMessage, setSuccessMessage] = useState('') // State for success message

  const handleSubmit = e => {
    e.preventDefault()

    // Log the email to the console
    console.log('Requesting password reset for:', email)

    // Simulate a successful password reset request
    setSuccessMessage('A password reset link has been sent to your email!') // Set success message

    // Reset form field after submission (optional)
    setEmail('')
  }

  return (
    <div className='forgot-password-page'>
      {' '}
      {/* Wrapper for background color */}
      <div className='forgot-password-container'>
        <h2>Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <input
            type='email'
            placeholder='Enter your email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <button type='submit'>Send Reset Link</button>
        </form>
        {successMessage && <p className='success-message'>{successMessage}</p>}{' '}
        {/* Display success message */}
        {/* Back to Login Link */}
        <p className='reminder-text'>
          {' '}
          {/* Apply new class here */}
          Remembered your password?
          <Link to='/login' className='login-link'>
            {' '}
            Back to Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default ForgotPassword
