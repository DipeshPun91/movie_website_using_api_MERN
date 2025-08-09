import React from "react";
import { FaPlay, FaStar, FaRegHeart, FaHeart } from "react-icons/fa";

const Hero = () => {
  const [featuredMovie, setFeaturedMovie] = React.useState({
    title: "The Last Adventure",
    year: 2023,
    rating: 4.8,
    description:
      "An epic journey through uncharted territories where a group of explorers discover a civilization lost in time.",
    isFavorite: false,
  });

  const toggleFavorite = () => {
    setFeaturedMovie((prev) => ({ ...prev, isFavorite: !prev.isFavorite }));
  };

  return (
    <section>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
        <div
          className="h-screen bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80')",
          }}
        >
          <div className="container mx-auto px-6 relative z-20 h-full flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold mb-4">
                Unlimited Movies, TV Shows, and More.
              </h1>
              <p className="text-xl mb-8">Watch anywhere. Cancel anytime.</p>
              <div className="flex space-x-4">
                <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-md font-semibold flex items-center">
                  <FaPlay className="mr-2" /> Watch Now
                </button>
                <button
                  className="border border-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-md font-semibold flex items-center"
                  onClick={toggleFavorite}
                >
                  {featuredMovie.isFavorite ? (
                    <FaHeart className="mr-2 text-red-500" />
                  ) : (
                    <FaRegHeart className="mr-2" />
                  )}
                  Favorite
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
