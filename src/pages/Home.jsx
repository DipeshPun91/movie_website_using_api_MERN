import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import Hero from "../component/home/Hero";
import Features from "../component/home/Features";
import Cta from "../component/home/Cta";
import MovieCard from "../component/ui/MovieCard";
import { getPopularMovies } from "../services/api";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        setLoading(true);
        const movies = await getPopularMovies();
        setPopularMovies(movies.slice(1, 9));
        setFeaturedMovie(transformMovieData(movies[0]));
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPopularMovies();
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
      backdropUrl: movie.backdrop_path
        ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
        : "https://via.placeholder.com/1920x1080",
    };
  };

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

      {featuredMovie && (
        <div className="container mx-auto px-6 py-16 -mt-20 relative z-30 bg-gray-800 rounded-lg shadow-2xl">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className="w-full h-[350px] bg-gray-700 rounded-lg overflow-hidden">
                <img
                  src={featuredMovie.posterUrl}
                  alt={featuredMovie.title}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="md:w-2/3 md:pl-12">
              <div className="flex items-center mb-4">
                <h2 className="text-3xl font-bold mr-4">
                  {featuredMovie.title}
                </h2>
                <span className="text-gray-400">({featuredMovie.year})</span>
              </div>
              <div className="flex items-center mb-6">
                <div className="flex items-center mr-4">
                  <FaStar className="text-yellow-400 mr-1" />
                  <span>{featuredMovie.rating}/5</span>
                </div>
                <span className="bg-red-600 text-xs px-2 py-1 rounded">
                  NEW
                </span>
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
      )}

      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Popular This Week
        </h2>

        <MovieCard
          title="Popular Movies"
          movies={popularMovies}
          hideTitle={true}
        />

        <div className="text-center mt-12">
          <button
            className="border border-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-md font-semibold"
            onClick={() => (window.location.href = "/movies")}
          >
            Browse All Movies
          </button>
        </div>
      </div>

      <Features />
      <Cta />
    </div>
  );
};

export default Home;
