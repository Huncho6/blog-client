import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { FORGOT_ADMIN_PASSWORD } from '../graphql/mutations';
import { useNavigate } from 'react-router-dom';

const ForgotAdminPassword = () => {
    const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [forgotAdminPassword, { data, loading, error }] = useMutation(FORGOT_ADMIN_PASSWORD);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await forgotAdminPassword({ variables: { email } });
      navigate('/reset-admin-password');
    } catch (err) {
      console.error('Error requesting password reset:', err);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-white dark:bg-black transition-colors duration-300">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-black p-6 rounded-lg shadow-md w-full max-w-sm space-y-4"
      >
        <h2 className="text-xl font-bold text-center text-black dark:text-green-600">
          Forgot Password
        </h2>
        <div className="space-y-2">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border border-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 text-black dark:text-green-600 dark:bg-black"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full p-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-300 disabled:opacity-50"
        >
          {loading ? 'Sending...' : 'Send Reset Token'}
        </button>
        {error && <p className="text-red-500 text-sm">Error: {error.message}</p>}
        {data && (
          <p className="text-green-600 text-sm">
            {data.forgotAdminPassword.message}
          </p>
        )}
      </form>
    </div>
  );
};

export default ForgotAdminPassword;
