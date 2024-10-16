import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ToggleButton from './ToggleButton';
import AddNewsModal from './AddNewsModal';
import { checkIsAdmin } from '../utils/auth';
import { CiSearch } from 'react-icons/ci';

const NavBar = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode); // Access dark mode state
  const isAdmin = checkIsAdmin(); // Check if user is admin
  const [showModal, setShowModal] = useState(false);

  return (
    <nav className={`${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} px-6 py-4 flex justify-between items-center`}>
      {/* Logo Section */}
      <div className="flex items-center space-x-2 flex-1">
        <img src="/logo-icon.png" alt="Logo" className="w-6 h-6" />
        <span className="font-bold text-xl">Ibrahim</span>
      </div>

      {/* Search Bar */}
      <div className="relative mt-[10px] hidden md:block">
        <input
          type="text"
          placeholder="search task"
          className="px-4 py-2 h-[32px] w-[200px] border border-gray-300 rounded-full focus:outline-none ml-1"
        />
        <span>
          <CiSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500" />
        </span>
      </div>

      {/* Admin and Toggle Button Section */}
      <div className="flex items-center gap-2">
        {isAdmin && (
          <button onClick={() => setShowModal(true)} className="bg-blue-500 text-white px-4 py-2 rounded">
            Add News
          </button>
        )}
        <ToggleButton />
      </div>

      {/* Modal for Adding News */}
      {showModal && <AddNewsModal onClose={() => setShowModal(false)} />}
    </nav>
  );
};

export default NavBar;
