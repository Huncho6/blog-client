import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';  
import { toggleTheme, setTheme } from '../Redux/features/theme/themeSlice'; 
import { FaToggleOff } from 'react-icons/fa';

const ToggleButton = () => {
  const dispatch = useDispatch();  
  const isDarkMode = useSelector((state) => state.theme.isDarkMode); 

  const [mounted, setMounted] = useState(false);  

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      dispatch(setTheme(true));  
    } else {
      dispatch(setTheme(false)); 
    }
  }, [dispatch, mounted]);

  useEffect(() => {
    if (!mounted) return;

    document.body.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode, mounted]);

  if (!mounted) return null;

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="fixed top-4 right-4 bg-gray-300 hover:bg-gray-500 text-black dark:text-white rounded-full p-3 shadow-lg z-50"
      style={{ zIndex: 1000 }}
    >
      <FaToggleOff className={`text-xl ${isDarkMode ? 'text-yellow-500' : 'text-gray-800'}`} />
    </button>
  );
};

export default ToggleButton;
