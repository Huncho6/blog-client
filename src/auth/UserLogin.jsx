// src/components/UserLogin.js
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../graphql/mutations';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginAdmin, { data, loading, error }] = useMutation(LOGIN_USER);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginAdmin({
        variables: {
          email,
          password,
        },
      });
      console.log('Login successful:', response.data);
      // Handle the successful login, e.g., store the token in localStorage
      localStorage.setItem('token', response.data.loginAdmin.token);
    } catch (err) {
      console.error('Login error:', err);
    }
  };

  return (
    <div className="login-form">
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      {error && <p className="error-message">Login failed: {error.message}</p>}
      {data && <p className="success-message">Login successful!</p>}
    </div>
  );
};

export default UserLogin;
