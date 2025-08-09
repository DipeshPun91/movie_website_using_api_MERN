import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdMovie } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <MdMovie className="text-red-600 text-3xl mr-2" />
            <span className="text-2xl font-bold">CINEMAX</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-red-500 font-medium">
              Home
            </Link>
            <Link to="/movies" className="hover:text-red-500 font-medium">
              Movies
            </Link>
            <Link to="#" className="hover:text-red-500 font-medium">
              TV Shows
            </Link>
            <Link to="#" className="hover:text-red-500 font-medium">
              My List
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className="text-white hover:text-red-500 font-medium px-4 py-2 transition-colors"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded transition-colors"
            >
              Sign Up
            </Link>
          </div>

          <button
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 mt-4 rounded-lg p-4">
            <nav className="flex flex-col space-y-3">
              <Link
                to="/"
                className="hover:text-red-500 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/movies"
                className="hover:text-red-500 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Movies
              </Link>
              <Link
                to="#"
                className="hover:text-red-500 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                TV Shows
              </Link>
              <Link
                to="#"
                className="hover:text-red-500 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                My List
              </Link>

              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-700">
                <Link
                  to="/login"
                  className="text-white hover:text-red-500 font-medium py-2 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 rounded text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
