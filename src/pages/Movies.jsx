import React, { useState, useEffect } from "react";
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
import MovieCard from "../component/ui/MovieCard";
import {
  getPopularMovies,
  getTopRatedMovies,
  getHorrorMovies,
  getSciFiMovies,
  getComedyMovies,
  getActionMovies,
} from "../services/api";

const Movies = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [movieCategories, setMovieCategories] = useState({
    popular: [],
    topRated: [],
    horror: [],
    action: [],
    comedy: [],
    sciFi: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllMovies = async () => {
      try {
        setLoading(true);

        const [popular, topRated, horror, action, comedy, sciFi] =
          await Promise.all([
            getPopularMovies(),
            getTopRatedMovies(),
            getHorrorMovies(),
            getActionMovies(),
            getComedyMovies(),
            getSciFiMovies(),
          ]);

        setMovieCategories({
          popular,
          topRated,
          horror,
          action,
          comedy,
          sciFi,
        });

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchAllMovies();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500 mx-auto mb-4"></div>
          <p>Loading movies...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center text-red-500">
          <p>Error loading movies: {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

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

        <div className="space-y-12">
          <MovieCard
            title="Popular"
            movies={movieCategories.popular.slice(0, 8)}
          />
          <MovieCard
            title="Top Rated"
            movies={movieCategories.topRated.slice(0, 8)}
          />
          <MovieCard
            title="Horror"
            movies={movieCategories.horror.slice(0, 8)}
          />
          <MovieCard
            title="Action"
            movies={movieCategories.action.slice(0, 8)}
          />
          <MovieCard
            title="Comedy"
            movies={movieCategories.comedy.slice(0, 8)}
          />
          <MovieCard
            title="Sci-Fi"
            movies={movieCategories.sciFi.slice(0, 8)}
          />
        </div>
      </div>
    </div>
  );
};

export default Movies;
