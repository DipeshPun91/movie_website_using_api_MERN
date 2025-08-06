import React, { useState } from "react";
import { FaSearch, FaUser, FaBell, FaBars, FaTimes } from "react-icons/fa";
import { MdMovie } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
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

          <div className="hidden md:flex items-center space-x-6">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search movies..."
                className="bg-gray-800 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-red-500 w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </form>
            <button className="text-gray-300 hover:text-white">
              <FaBell size={20} />
            </button>
            <button className="bg-red-600 hover:bg-red-700 rounded-full p-2">
              <FaUser size={20} />
            </button>
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
            <form onSubmit={handleSearch} className="relative mb-4">
              <input
                type="text"
                placeholder="Search movies..."
                className="bg-gray-700 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-red-500 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </form>
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="hover:text-red-500 font-medium py-2">
                Home
              </Link>
              <Link
                to="/movies"
                className="hover:text-red-500 font-medium py-2"
              >
                Movies
              </Link>
              <Link to="#" className="hover:text-red-500 font-medium py-2">
                TV Shows
              </Link>
              <Link to="#" className="hover:text-red-500 font-medium py-2">
                My List
              </Link>
              <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                <button className="text-gray-300 hover:text-white">
                  <FaBell size={20} />
                </button>
                <button className="bg-red-600 hover:bg-red-700 rounded-full p-2">
                  <FaUser size={20} />
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
