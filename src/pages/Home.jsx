import React from "react";
import { FaPlay, FaStar, FaRegHeart, FaHeart } from "react-icons/fa";
import { MdHighQuality, MdDevices } from "react-icons/md";
import { BiMovie } from "react-icons/bi";

const Home = () => {
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

  const movies = [
    { title: "Midnight Run", genre: "Action", year: 2022 },
    { title: "Eternal Sunshine", genre: "Drama", year: 2023 },
    { title: "Cosmic Journey", genre: "Sci-Fi", year: 2021 },
    { title: "Shadow Protocol", genre: "Thriller", year: 2023 },
  ];

  const features = [
    {
      icon: <MdHighQuality size={40} />,
      title: "4K Ultra HD",
      description: "Crystal clear picture quality",
    },
    {
      icon: <BiMovie size={40} />,
      title: "10,000+ Titles",
      description: "Movies, TV shows, and more",
    },
    {
      icon: <MdDevices size={40} />,
      title: "Watch Anywhere",
      description: "Stream on all your devices",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
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

      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Popular This Week
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {movies.map((movie, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-700">
                <img
                  src={`https://source.unsplash.com/random/300x450/?movie,${index}`}
                  alt={movie.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{movie.title}</h3>
                <div className="flex justify-between text-gray-400 text-sm">
                  <span>{movie.genre}</span>
                  <span>{movie.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="border border-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-md font-semibold">
            Browse All Movies
          </button>
        </div>
      </div>

      <div className="bg-gray-800 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-red-500 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-red-900 to-gray-900 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to start streaming?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied viewers enjoying premium content in
            stunning quality.
          </p>
          <button className="bg-white text-gray-900 hover:bg-gray-200 px-10 py-4 rounded-md font-bold text-lg">
            Sign Up Now
          </button>
        </div>
      </div>

      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold">CINEMAX</h3>
              <p className="text-gray-400 mt-2">
                The ultimate movie experience
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-red-500">
                Terms
              </a>
              <a href="#" className="hover:text-red-500">
                Privacy
              </a>
              <a href="#" className="hover:text-red-500">
                Help
              </a>
              <a href="#" className="hover:text-red-500">
                Contact
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>© 2023 CINEMAX. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
