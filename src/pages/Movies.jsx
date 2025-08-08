import React, { useState } from "react";
import {
  FaPlay,
  FaSearch,
  FaStar,
  FaFilter,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { MdMovie, MdHighQuality } from "react-icons/md";
import Hero from "../component/movies/Hero";

const Movies = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");

  const genres = [
    "All",
    "Action",
    "Adventure",
    "Comedy",
    "Drama",
    "Horror",
    "Sci-Fi",
    "Thriller",
  ];
  const years = ["All", "2023", "2022", "2021", "2020", "2019"];

  const movies = [
    {
      id: 1,
      title: "The Last Adventure",
      year: 2023,
      rating: 4.8,
      genre: "Adventure",
      image: "https://source.unsplash.com/random/300x450/?adventure,movie",
      featured: true,
    },
    {
      id: 2,
      title: "Midnight Run",
      year: 2022,
      rating: 4.5,
      genre: "Action",
      image: "https://source.unsplash.com/random/300x450/?action,movie",
      featured: false,
    },
    {
      id: 3,
      title: "Eternal Sunshine",
      year: 2023,
      rating: 4.7,
      genre: "Drama",
      image: "https://source.unsplash.com/random/300x450/?drama,movie",
      featured: false,
    },
    {
      id: 4,
      title: "Cosmic Journey",
      year: 2021,
      rating: 4.3,
      genre: "Sci-Fi",
      image: "https://source.unsplash.com/random/300x450/?scifi,movie",
      featured: false,
    },
    {
      id: 5,
      title: "Shadow Protocol",
      year: 2023,
      rating: 4.6,
      genre: "Thriller",
      image: "https://source.unsplash.com/random/300x450/?thriller,movie",
      featured: false,
    },
    {
      id: 6,
      title: "Laugh Out Loud",
      year: 2022,
      rating: 4.2,
      genre: "Comedy",
      image: "https://source.unsplash.com/random/300x450/?comedy,movie",
      featured: false,
    },
    {
      id: 7,
      title: "Nightmare Alley",
      year: 2021,
      rating: 4.4,
      genre: "Horror",
      image: "https://source.unsplash.com/random/300x450/?horror,movie",
      featured: false,
    },
    {
      id: 8,
      title: "The Lost City",
      year: 2023,
      rating: 4.5,
      genre: "Adventure",
      image: "https://source.unsplash.com/random/300x450/?adventure,film",
      featured: false,
    },
  ];

  const filteredMovies = movies.filter((movie) => {
    return (
      (selectedGenre === "All" || movie.genre === selectedGenre) &&
      (selectedYear === "All" || movie.year.toString() === selectedYear) &&
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Hero />

      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <form className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search movies..."
              className="bg-gray-800 rounded-full py-3 px-6 pl-12 focus:outline-none focus:ring-2 focus:ring-red-500 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaSearch className="absolute left-5 top-4 text-gray-400" />
          </form>

          <div className="w-full md:w-auto">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center bg-gray-800 hover:bg-gray-700 py-3 px-6 rounded-full"
            >
              <FaFilter className="mr-2" />
              Filters
              {showFilters ? (
                <FaChevronUp className="ml-2" />
              ) : (
                <FaChevronDown className="ml-2" />
              )}
            </button>
          </div>
        </div>

        {showFilters && (
          <div className="bg-gray-800 p-6 rounded-lg mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Genre</h3>
                <div className="flex flex-wrap gap-2">
                  {genres.map((genre) => (
                    <button
                      key={genre}
                      onClick={() => setSelectedGenre(genre)}
                      className={`px-4 py-2 rounded-full text-sm ${
                        selectedGenre === genre
                          ? "bg-red-600"
                          : "bg-gray-700 hover:bg-gray-600"
                      }`}
                    >
                      {genre}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Release Year</h3>
                <div className="flex flex-wrap gap-2">
                  {years.map((year) => (
                    <button
                      key={year}
                      onClick={() => setSelectedYear(year)}
                      className={`px-4 py-2 rounded-full text-sm ${
                        selectedYear === year
                          ? "bg-red-600"
                          : "bg-gray-700 hover:bg-gray-600"
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {filteredMovies.some((movie) => movie.featured) && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Featured Movie</h2>
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
              {filteredMovies
                .filter((movie) => movie.featured)
                .map((movie) => (
                  <div key={movie.id} className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <img
                        src={movie.image}
                        alt={movie.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6 md:p-8">
                      <div className="flex items-center mb-4">
                        <h3 className="text-2xl font-bold mr-4">
                          {movie.title}
                        </h3>
                        <span className="text-gray-400">({movie.year})</span>
                      </div>
                      <div className="flex items-center mb-4">
                        <div className="flex items-center mr-4">
                          <FaStar className="text-yellow-400 mr-1" />
                          <span>{movie.rating}/5</span>
                        </div>
                        <span className="bg-gray-700 text-sm px-3 py-1 rounded">
                          {movie.genre}
                        </span>
                      </div>
                      <p className="text-gray-300 mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <div className="flex space-x-4">
                        <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md font-semibold flex items-center">
                          <FaPlay className="mr-2" /> Watch Now
                        </button>
                        <button className="border border-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-md font-semibold">
                          Add to List
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">
              {selectedGenre !== "All" ? selectedGenre : ""}
              {selectedYear !== "All" ? ` ${selectedYear}` : ""}
              Movies
              {selectedGenre === "All" && selectedYear === "All"
                ? "All Movies"
                : ""}
            </h2>
            <div className="text-gray-400">
              Showing {filteredMovies.length} of {movies.length} movies
            </div>
          </div>

          {filteredMovies.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredMovies
                .filter((movie) => !movie.featured)
                .map((movie) => (
                  <div
                    key={movie.id}
                    className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 group"
                  >
                    <div className="relative">
                      <img
                        src={movie.image}
                        alt={movie.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md font-semibold flex items-center">
                          <FaPlay className="mr-2" /> Play
                        </button>
                      </div>
                      <div className="absolute top-2 right-2 bg-gray-900 bg-opacity-80 px-2 py-1 rounded flex items-center">
                        <MdHighQuality className="text-blue-400 mr-1" />
                        <span className="text-xs">HD</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-1 truncate">
                        {movie.title}
                      </h3>
                      <div className="flex justify-between text-gray-400 text-sm">
                        <span>{movie.year}</span>
                        <div className="flex items-center">
                          <FaStar className="text-yellow-400 mr-1" />
                          <span>{movie.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <div className="bg-gray-800 rounded-lg p-12 text-center">
              <h3 className="text-xl font-semibold mb-2">No movies found</h3>
              <p className="text-gray-400">
                Try adjusting your search or filters
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Movies;
