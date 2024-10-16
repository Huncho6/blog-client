import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../graphql/mutations';
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginUser, { data, loading, error }] = useMutation(LOGIN_USER);
  const [isShown, setIsShown] = useState(false);

  const handleShowClick = () => {
    setIsShown(!isShown);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ variables: { email, password } });
      console.log('Login successful:', response.data.loginUser);
      localStorage.setItem('token', response.data.loginUser.token);
      navigate('/dashboard'); // Redirect to the dashboard after login
    } catch (err) {
      console.error('Login error:', err);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-white dark:bg-black transition-colors duration-300">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-black p-6 rounded-lg shadow-md w-full max-w-sm space-y-4"
      >
        <h2 className="text-xl font-bold text-center text-black dark:text-green-600">
          Login
        </h2>
        <div className="space-y-2">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 text-black dark:text-green-600 dark:bg-black"
          />
        <div className='relative'>
                <input
                type={isShown ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 text-black dark:text-green-600 dark:bg-black"
            />
              <span className="absolute right-3 top-3 text-gray-500 cursor-pointer" onClick={handleShowClick}>
              {isShown ? "Hide" : "Show"}
            </span>
            </div>

        </div>
        <div className="text-right">
            <button onClick={() => navigate("/forgot-user-password")} className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </button>
          </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full p-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-300 disabled:opacity-50"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
          <div className="text-left">
        Don't have an account?
            <button onClick={() => navigate("/create-user")} className="text-sm text-blue-600 hover:underline px-1">
              Sign Up For Free
            </button>
          </div>

        {error && <p className="text-red-500 text-sm">Error: {error.message}</p>}
        {data && (
          <p className="text-green-600 text-sm">
            Login successful! Welcome {data.loginUser.user.userName}
          </p>
        )}
      </form>
    </div>
  );
};

export default UserLogin;
