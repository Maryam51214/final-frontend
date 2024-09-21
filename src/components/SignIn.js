// SignIn.js
import React, { useState } from 'react';
import axios from 'axios'; // Import axios for API calls
import './SignIn.css'; // Import the CSS file for styling

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State to store error messages

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/auth/signin', {
        email,
        password,
      });
      // Handle successful sign-in (e.g., save token, redirect user)
      console.log("Signed in with:", response.data);
      localStorage.setItem('token', response.data.token); // Save token if needed
      // Redirect or perform other actions after sign-in
    } catch (err) {
      setError(err.response?.data || 'Sign-in failed'); // Set error message
      console.error("Error signing in:", err);
    }
  };

  return (
    <div className="signin-container">
      <h2 className="signin-title">Sign In</h2>
      {error && <div className="error-message">{error}</div>} {/* Display error message */}
      <form className="signin-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn; // Export the SignIn component
