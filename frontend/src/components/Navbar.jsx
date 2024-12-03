import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, UserCircle } from "lucide-react"; // Importing UserCircle icon

const Navbar = ({ user }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 shadow-lg py-4 h-[70px] z-50">
      <div className="container px-4 sm:px-10 flex justify-between items-center w-full">
        {/* Logo or Brand Name */}
        <div className="text-white text-2xl font-bold">
          <Link to="/">Prebook</Link>
        </div>

        {/* Hamburger Menu Icon */}
        <button
          className="sm:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } sm:flex space-x-6 absolute sm:static top-[70px] left-0 w-full sm:w-auto bg-blue-600 sm:bg-transparent sm:space-x-6 flex-col sm:flex-row sm:items-center`}
        >
          <Link
            to="/"
            className="text-white text-lg font-medium hover:text-blue-200 transition duration-300 py-2 sm:py-0 px-4 sm:px-0"
          >
            Home
          </Link>
          <Link
            to="/register"
            className="text-white text-lg font-medium hover:text-blue-200 transition duration-300 py-2 sm:py-0 px-4 sm:px-0"
          >
            Register Restaurant
          </Link>
          <Link
            to="/book"
            className="text-white text-lg font-medium hover:text-blue-200 transition duration-300 py-2 sm:py-0 px-4 sm:px-0"
          >
            Book Table
          </Link>
          <Link
            to="/restaurants"
            className="text-white text-lg font-medium hover:text-blue-200 transition duration-300 py-2 sm:py-0 px-4 sm:px-0"
          >
            Restaurants
          </Link>
          {!user && (
            <Link
              to="/login"
              className="text-white text-lg font-medium hover:text-blue-200 transition duration-300 py-2 sm:py-0 px-4 sm:px-0"
            >
              Login
            </Link>
          )}
        </div>

        {/* User Icon */}
        {user && (
          <div className="relative">
            <button
              className="text-white"
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            >
              <UserCircle size={36} />
            </button>
            {/* Logout Menu */}
            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg py-2 w-32">
                <button
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    // Handle Logout
                    alert("Logged out!");
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
