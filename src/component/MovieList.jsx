import React, { useEffect, useState } from "react";
import { getPopularMovies } from "../services/api";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      getPopularMovies()
        .then((data) => setMovies(data))
        .catch((error) => console.error("Error fetching movies:", error));
    };
    fetchMovies();
  });

  return (
    <div>
      Home
      <h2 className="text-2xl font-bold mb-4">Popular Movies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-gray-800 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-auto rounded-lg mb-2"
            />
            <h3 className="text-lg font-semibold">{movie.title}</h3>
            <p className="text-sm text-gray-400">{movie.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
