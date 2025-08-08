import React from "react";
import { FaPlay, FaStar } from "react-icons/fa";
import { MdHighQuality } from "react-icons/md";

const MovieCard = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 group"
          >
            <div className="relative">
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "https://via.placeholder.com/300x450?text=No+Poster"
                }
                alt={movie.title}
                className="w-full h-64 object-cover"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/300x450?text=No+Poster";
                }}
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
              <h3 className="font-bold text-lg mb-1 truncate">{movie.title}</h3>
              <div className="flex justify-between text-gray-400 text-sm">
                <span>
                  {movie.release_date
                    ? movie.release_date.substring(0, 4)
                    : "N/A"}
                </span>
                <div className="flex items-center">
                  <FaStar className="text-yellow-400 mr-1" />
                  <span>{(movie.vote_average / 2).toFixed(1)}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCard;
