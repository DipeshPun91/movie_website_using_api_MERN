import React, { useState, useEffect } from "react";
import Hero from "../component/home/Hero";
import Features from "../component/home/Features";
import Cta from "../component/home/Cta";
import MovieCard from "../component/ui/MovieCard";
import { getPopularMovies } from "../services/api";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        setLoading(true);
        const movies = await getPopularMovies();
        setPopularMovies(movies.slice(0, 8));
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPopularMovies();
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
