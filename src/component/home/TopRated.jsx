import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { getTopRatedMovies } from "../../services/api";

const TopRated = () => {
  const [topRatedMovie, setTopRatedMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopRatedMovie = async () => {
      try {
        setLoading(true);
        const movies = await getTopRatedMovies();
        setTopRatedMovie(transformMovieData(movies[0]));
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTopRatedMovie();
  }, []);

  const transformMovieData = (movie) => {
    return {
      id: movie.id,
      title: movie.title,
      year: movie.release_date ? movie.release_date.substring(0, 4) : "N/A",
      rating: movie.vote_average ? (movie.vote_average / 2).toFixed(1) : "N/A",
      description: movie.overview,
      posterUrl: movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "https://via.placeholder.com/500x750",
    };
  };

  if (loading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[400px] flex items-center justify-center text-red-500">
        <p>Error loading top rated movie: {error}</p>
      </div>
    );
  }

  if (!topRatedMovie) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <p>No top rated movie found</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-16 -mt-20 relative z-30 bg-gray-800 rounded-lg shadow-2xl">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <div className="w-full h-[350px] bg-gray-700 rounded-lg overflow-hidden">
            <img
              src={topRatedMovie.posterUrl}
              alt={topRatedMovie.title}
              className="object-cover w-full h-full"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://via.placeholder.com/500x750?text=No+Poster";
              }}
            />
          </div>
        </div>
        <div className="md:w-2/3 md:pl-12">
          <div className="flex items-center mb-4">
            <h2 className="text-3xl font-bold mr-4">{topRatedMovie.title}</h2>
            <span className="text-gray-400">({topRatedMovie.year})</span>
          </div>
          <div className="flex items-center mb-6">
            <div className="flex items-center mr-4">
              <FaStar className="text-yellow-400 mr-1" />
              <span>{topRatedMovie.rating}/5</span>
            </div>
            <span className="bg-red-600 text-xs px-2 py-1 rounded">
              TOP RATED
            </span>
          </div>
          <p className="text-lg text-gray-300 mb-8 line-clamp-4">
            {topRatedMovie.description}
          </p>
          <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-md font-semibold transition duration-300">
            Watch Trailer
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopRated;
