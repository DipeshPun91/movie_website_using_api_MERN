import React from "react";
import {
  FiHome,
  FiCompass,
  FiBookmark,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";
import { BsCollectionPlay, BsClockHistory } from "react-icons/bs";

const Dashboard = () => {
  // Mock user data - replace with actual user data from your auth system
  const user = {
    name: "Alex Johnson",
    email: "alex@example.com",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    plan: "Premium",
    watchlist: 24,
    continueWatching: 5,
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar Navigation */}
      <div className="w-64 bg-gray-800 p-6 hidden md:block">
        <div className="flex items-center mb-10">
          <h1 className="text-2xl font-bold text-red-500">StreamHub</h1>
        </div>

        <div className="flex items-center mb-10">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h3 className="font-bold">{user.name}</h3>
            <p className="text-sm text-gray-400">{user.email}</p>
          </div>
        </div>

        <nav>
          <ul className="space-y-4">
            <li>
              <a
                href="#"
                className="flex items-center p-3 rounded-lg bg-gray-700 text-red-400"
              >
                <FiHome className="mr-3" />
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-3 rounded-lg hover:bg-gray-700"
              >
                <FiCompass className="mr-3" />
                Browse
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-3 rounded-lg hover:bg-gray-700"
              >
                <BsCollectionPlay className="mr-3" />
                My Library
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-3 rounded-lg hover:bg-gray-700"
              >
                <FiBookmark className="mr-3" />
                Watchlist
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-3 rounded-lg hover:bg-gray-700"
              >
                <BsClockHistory className="mr-3" />
                Continue Watching
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-3 rounded-lg hover:bg-gray-700"
              >
                <FiSettings className="mr-3" />
                Settings
              </a>
            </li>
          </ul>
        </nav>

        <button className="flex items-center mt-10 p-3 text-gray-400 hover:text-white">
          <FiLogOut className="mr-3" />
          Log Out
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Welcome back, {user.name}</h2>
          <p className="text-gray-400">Your {user.plan} plan is active</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-gray-400 mb-2">Watchlist</h3>
            <p className="text-3xl font-bold">{user.watchlist} titles</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-gray-400 mb-2">Continue Watching</h3>
            <p className="text-3xl font-bold">{user.continueWatching} shows</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-gray-400 mb-2">Subscription</h3>
            <p className="text-3xl font-bold">{user.plan}</p>
          </div>
        </div>

        {/* Continue Watching Section */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold">Continue Watching</h3>
            <a href="#" className="text-red-400 hover:underline">
              View All
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="relative group">
                <img
                  src={`https://source.unsplash.com/random/300x450/?movie,${item}`}
                  alt={`Continue watching ${item}`}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 rounded-b-lg">
                  <h4 className="font-bold">Movie Title {item}</h4>
                  <div className="w-full bg-gray-600 rounded-full h-1.5 mt-2">
                    <div
                      className="bg-red-500 h-1.5 rounded-full"
                      style={{ width: `${70 + item * 5}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Section */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold">Recommended For You</h3>
            <a href="#" className="text-red-400 hover:underline">
              View All
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="group">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={`https://source.unsplash.com/random/300x450/?movie,${
                      item + 5
                    }`}
                    alt={`Recommended ${item}`}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <button className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-red-500 text-white px-4 py-2 rounded-full font-bold">
                      Watch Now
                    </button>
                  </div>
                </div>
                <h4 className="mt-2 font-bold">Recommended Title {item}</h4>
                <p className="text-sm text-gray-400">Action, Adventure</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
