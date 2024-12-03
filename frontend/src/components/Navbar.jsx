import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 shadow-lg py-4">
      <div className="container px-10 flex justify-between items-center w-full">
        {/* Logo or Brand Name */}
        <div className="text-white text-2xl font-bold">
          <Link to="/">Prebook</Link>
        </div>
        {/* Navigation Links */}
        <div className="space-x-6">
          <Link
            to="/"
            className="text-white text-lg font-medium hover:text-blue-200 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/register"
            className="text-white text-lg font-medium hover:text-blue-200 transition duration-300"
          >
            Register Restaurant
          </Link>
          <Link
            to="/book"
            className="text-white text-lg font-medium hover:text-blue-200 transition duration-300"
          >
            Book Table
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
