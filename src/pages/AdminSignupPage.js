import React, { useState } from 'react';
import axios from 'axios';
import API_ENDPOINTS from '../config/api';

const AdminSignup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName]   = useState('');
  const [username, setUsername]   = useState('');
  const [email, setEmail]         = useState('');
  const [password, setPassword]   = useState('');
  const [error, setError]         = useState('');
  const [success, setSuccess]     = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      const response = await axios.post(API_ENDPOINTS.SIGNUP, {
        fName: firstName,
        lName: lastName,
        username,
        email,
        password,
        authRole: 'admin',
        isActive: true,
      });

      setSuccess('Admin account created successfully!');
    } catch (err) {
      console.error(err);
      setError('Failed to sign up. Please try again.');
    }
  };

  return (
    <div className="admin-signup">
      <h2>Admin Signup</h2>
      { error && <p style={{ color: 'red' }}>{error}</p> }
      { success && <p style={{ color: 'green' }}>{success}</p> }
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" >Sign Up as Admin</button>
      </form>
    </div>
  );
};

export default AdminSignup;