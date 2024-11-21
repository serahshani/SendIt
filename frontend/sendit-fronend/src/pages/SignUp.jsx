// src/components/SignUp.js

import React, { useState } from 'react'
import { Link } from 'react-router-dom' // For navigation
import './SignUp.css'

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [agreeTerms, setAgreeTerms] = useState(false)

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleTermsChange = () => {
    setAgreeTerms(!agreeTerms)
  }

  const handleSubmit = e => {
    e.preventDefault()

    // Validate password confirmation
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match.')
      setSuccessMessage('')
      return
    }

    if (!agreeTerms) {
      setErrorMessage('You must agree to the terms and conditions.')
      setSuccessMessage('')
      return
    }

    // Log the form data to the console (simulating account creation)
    console.log('Account Created:', formData)

    // Set success message
    setSuccessMessage('Account created successfully!')
    setErrorMessage('')

    // Reset form fields after submission
    setFormData({
      firstName: '',
      lastName: '',
      username: '',
      phoneNumber: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
    setAgreeTerms(false)
  }

  return (
    <div className='signup-page'>
      {' '}
      {/* Use new class for styling */}
      <div className='signup-container'>
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='firstName'
            placeholder='First Name'
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type='text'
            name='lastName'
            placeholder='Last Name'
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            type='text'
            name='username'
            placeholder='Username'
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type='tel'
            name='phoneNumber'
            placeholder='Phone Number'
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
          <input
            type='email'
            name='email'
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type='password'
            name='confirmPassword'
            placeholder='Confirm Password'
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <div className='terms-container'>
            <input
              type='checkbox'
              id='terms'
              checked={agreeTerms}
              onChange={handleTermsChange}
              required
            />
            <label htmlFor='terms'>I agree to the terms and conditions</label>
          </div>

          <button type='submit'>Create Account</button>
        </form>

        {/* Message boxes now at the bottom of the signup container */}
        {errorMessage && (
          <div className='error-message-box'>
            <p>{errorMessage}</p>
          </div>
        )}
        {successMessage && (
          <div className='success-message-box'>
            <p>{successMessage}</p>
          </div>
        )}
        <p className='login-prompt'>
          Already have an account?{' '}
          <Link to='/login' className='signup-link'>
            Log in here
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp
