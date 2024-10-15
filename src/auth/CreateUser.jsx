// CreateUser.jsx
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../graphql/mutations';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [createUser, { data, loading, error }] = useMutation(CREATE_USER);
    const [isShown, setIsShown] = useState(false);

    const handleShowClick = () => {
      setIsShown(!isShown);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await createUser({ variables: { userName, email, password } });
            navigate('/admin-login');
            console.log('User created successfully:', response.data.createUser);
        } catch (err) {
            console.error('Error creating user:', err);
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-white dark:bg-black transition-colors duration-300">
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-black p-6 rounded-lg shadow-md w-full max-w-sm space-y-4"
        >
          <h2 className="text-xl font-bold text-center text-black dark:text-green-600">
            Create User
          </h2>
          <div className="space-y-2">
            <input
                type="text"
                placeholder="Username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
                className="w-full p-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 text-black dark:text-green-600 dark:bg-black"
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 text-black dark:text-green-600 dark:bg-black"
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
            <button type="submit" disabled={loading}
            className="w-full p-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-300 disabled:opacity-50"
            >
                {loading ? 'Creating...' : 'Create User'}
            </button>
            {error && <p className='text-red-600 text-sm'>Error: {error.message}</p>}
            {data && <p className='text-green-600 text-sm'>User created successfully! Welcome {data.createUser.user.userName}</p>}
        </form>
        </div>
    );
};

export default CreateUser;