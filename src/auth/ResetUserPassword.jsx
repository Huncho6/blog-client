import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { RESET_USER_PASSWORD } from '../graphql/mutations';
import { useNavigate } from 'react-router-dom';

const ResetUserPassword = () => {
    const navigate = useNavigate();
  const [token, setToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [resetUserPassword, { data, loading, error }] = useMutation(RESET_USER_PASSWORD);
  const [isShown, setIsShown] = useState(false);

  const handleShowClick = () => {
    setIsShown(!isShown);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await resetUserPassword({ variables: { token, newPassword } });
      navigate('/user-login');
    } catch (err) {
      console.error('Error resetting password:', err);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-white dark:bg-black transition-colors duration-300">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-black p-6 rounded-lg shadow-md w-full max-w-sm space-y-4"
      >
        <h2 className="text-xl font-bold text-center text-black dark:text-green-600">
          Reset Password
        </h2>
        <div className="space-y-2">
          <input
            type="text"
            placeholder="Reset Token"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            required
            className="w-full p-2 border border-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 text-black dark:text-green-600 dark:bg-black"
          />
       <div className='relative'>
                <input
                type={isShown ? "text" : "password"}
                placeholder="Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                className="w-full p-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 text-black dark:text-green-600 dark:bg-black"
            />
              <span className="absolute right-3 top-3 text-gray-500 cursor-pointer" onClick={handleShowClick}>
              {isShown ? "Hide" : "Show"}
            </span>
            </div>

        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full p-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-300 disabled:opacity-50"
        >
          {loading ? 'Resetting...' : 'Reset Password'}
        </button>
        {error && <p className="text-red-500 text-sm">Error: {error.message}</p>}
        {data && <p className="text-green-600 text-sm">{data.resetUserPassword.message}</p>}
      </form>
    </div>
  );
};

export default ResetUserPassword;
