// src/components/Login.jsx

import React, { useState } from 'react';
import './Login.css'; 

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState(''); // State for success message

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Log the email and password to the console
        console.log("Logging in with:", { email, password });

        // Simulate a successful login
        setSuccessMessage('Login successfully!'); // Set success message

        // Reset form fields after submission (optional)
        setEmail('');
        setPassword('');
    };

    return (
        <div className="login-page"> {/* Wrapper for background color */}
            <div className="login-container">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Log In</button>
                </form>
                {successMessage && <p className="success-message">{successMessage}</p>} {/* Display success message */}
            </div>
        </div>
    );
};

export default Login;