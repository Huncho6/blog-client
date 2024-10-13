import React from 'react';
import { useSelector } from 'react-redux'; 
import ToggleButton from './ToggleButton'; 
import { CiSearch } from 'react-icons/ci';

const NavBar = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode); // Access dark mode state

  return (
    <nav className={`${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} px-6 py-4 flex justify-between items-center`}>
      {/* Logo Section */}
      <div className="flex items-center space-x-2 flex-1">
        <img src="/logo-icon.png" alt="Logo" className="w-6 h-6" /> {/* Replace with your logo */}
        <span className="font-bold text-xl">Electrica</span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6 text-sm">
        <a href="#" className={`${isDarkMode ? 'hover:text-gray-400' : 'hover:text-gray-600'}`}>HOME</a>
        <a href="#" className={`${isDarkMode ? 'hover:text-gray-400' : 'hover:text-gray-600'}`}>PAGES</a>
        <a href="#" className={`${isDarkMode ? 'hover:text-gray-400' : 'hover:text-gray-600'}`}>SERVICES</a>
        <a href="#" className={`${isDarkMode ? 'hover:text-gray-400' : 'hover:text-gray-600'}`}>PROJECTS</a>
        <a href="#" className={`${isDarkMode ? 'hover:text-gray-400' : 'hover:text-gray-600'}`}>BLOG</a>
        <a href="#" className={`${isDarkMode ? 'hover:text-gray-400' : 'hover:text-gray-600'}`}>CONTACT</a>
      </div>
      
      <div className="relative mt-[10px] hidden md:block">
            <input
              type="text"
              placeholder="search task"
              className="px-4 py-2 h-[32px] w-[200px] border border-gray-300 rounded-full focus:outline-none ml-1"
            />
            <span>
              <CiSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500" />{" "}
            </span>
          </div>

      <div className="flex justify-between items-center gap-2">
        <ToggleButton /> 
        </div>
    </nav>
  );
};

export default NavBar;
