import React from 'react';
import first_image from '../../assets/detectify_image.png';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="h-20 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center px-10 py-4 text-2xl font-medium">
          <strong className="text-4xl">D</strong>etectify
          <img src={first_image} className="w-[60px] hover:scale-125 transition-transform duration-300" alt="Logo" />
        </div>

        {/* Navigation Links */}
        <ul className="hidden sm:flex space-x-10 items-center px-10 py-4 text-xl font-medium">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-blue-500 pb-1' : 'hover:text-blue-500'}
          >
            <li>Home</li>
          </NavLink>
          
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-blue-500 pb-1' : 'hover:text-blue-500'}
          >
            <li>About</li>
          </NavLink>
          
          <NavLink 
            to="/Profile" 
            className={({ isActive }) => isActive ? 'text-blue-500 border-b-2 border-blue-500 pb-1' : 'hover:text-blue-500'}
          >
            <li>Profile</li>
          </NavLink>
        </ul>

        {/* Contact Button */}
        <NavLink to="/contact">
          <button className="px-4 py-2 text-white font-bold rounded mr-11 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-blue-500 transition duration-300 ease-in-out hover:scale-110 hover:bg-indigo-500">
            Contact
          </button>
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
