import { React, useState } from "react";
import first_image from "../../assets/detectify_image.png";
import { NavLink } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false); // For Profile Dropdown
  const [issidebar, setSidebar] = useState(false); // For Sidebar Menu

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="h-20 flex items-center justify-between px-5">
        {/* Hamburger Button (Small Screens) */}
        <button className="sm:hidden text-3xl ml-4" onClick={() => setSidebar(true)}>
          ☰
        </button>

        {/* Logo Section */}
        <div className="flex items-center text-2xl font-medium">
          <strong className="text-4xl">D</strong>etectify
          <img
            src={first_image}
            className="w-[60px] hover:scale-125 transition-transform duration-300"
            alt="Logo"
          />
        </div>

        {/* User Profile Avatar */}
        <div className=" hidden relative order-3">
          {/* Profile Circle */}
          <div
            className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-500 text-white text-xl font-bold cursor-pointer hover:scale-110 hover:bg-indigo-500 transition duration-300 ease-in-out"
            onClick={() => setIsOpen(!isOpen)}
          >
            H
          </div>

          {/* Profile Dropdown Menu */}
          <div
            className={`fixed top-20 right-0 w-64 bg-gray-200 shadow-lg p-5 transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out`}
          >
            <button
              className="absolute top-4 right-4 text-gray-600"
              onClick={() => setIsOpen(false)}
            >
              ✖
            </button>
            <ul className="mt-10">
              <li className="p-3 border-b hover:bg-gray-100 cursor-pointer">
                ⚙️ Settings
              </li>
              <li className="p-3 border-b hover:bg-gray-100 cursor-pointer">
                🚪 Log Out
              </li>
            </ul>
          </div>
        </div>

        {/* Navigation Links (Hidden on Small Screens) */}
        <ul className="hidden sm:flex space-x-10 text-xl font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 border-b-2 border-blue-500 pb-1"
                : "hover:text-blue-500"
            }
          >
            <li>Home</li>
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 border-b-2 border-blue-500 pb-1"
                : "hover:text-blue-500"
            }
          >
            <li>About</li>
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 border-b-2 border-blue-500 pb-1"
                : "hover:text-blue-500"
            }
          >
            <li>Profile</li>
          </NavLink>
        </ul>

        {/* Contact Button (Hidden on Small Screens) */}
        <NavLink to="/contact" className="hidden sm:block">
          <button className="px-4 py-2 text-white font-bold bg-blue-500 rounded focus:ring-2 focus:ring-blue-500 transition duration-300 hover:scale-110 hover:bg-indigo-500">
            Contact
          </button>
        </NavLink>

        

        {/* Sidebar (Mobile Navigation) */}
        <div
          className={`fixed top-20 left-0  w-64 h-full bg-white shadow-lg p-5 transform ${
            issidebar ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out sm:hidden`}
        >
          <button
            className="absolute top-4 right-4 text-gray-600"
            onClick={() => setSidebar(false)}
          >
            ✖
          </button>

          <ul className="mt-10 space-y-6 text-lg font-medium">
            <NavLink
              to="/"
              className="block text-gray-800 hover:text-blue-500"
              onClick={() => setSidebar(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="block text-gray-800 hover:text-blue-500"
              onClick={() => setSidebar(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/profile"
              className="block text-gray-800 hover:text-blue-500"
              onClick={() => setSidebar(false)}
            >
              Profile
            </NavLink>
            <NavLink
              to="/contact"
              className="block text-gray-800 hover:text-blue-500"
              onClick={() => setSidebar(false)}
            >
              Contact
            </NavLink>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
