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

      <div className="container mx-auto px-6 py-16 -mt-20 relative z-30 bg-gray-800 rounded-lg shadow-2xl">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="aspect-w-16 aspect-h-9 bg-gray-700 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt={featuredMovie.title}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="md:w-2/3 md:pl-12">
            <div className="flex items-center mb-4">
              <h2 className="text-3xl font-bold mr-4">{featuredMovie.title}</h2>
              <span className="text-gray-400">({featuredMovie.year})</span>
            </div>
            <div className="flex items-center mb-6">
              <div className="flex items-center mr-4">
                <FaStar className="text-yellow-400 mr-1" />
                <span>{featuredMovie.rating}/5</span>
              </div>
              <span className="bg-red-600 text-xs px-2 py-1 rounded">NEW</span>
            </div>
            <p className="text-lg text-gray-300 mb-8">
              {featuredMovie.description}
            </p>
            <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-md font-semibold">
              Watch Trailer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
