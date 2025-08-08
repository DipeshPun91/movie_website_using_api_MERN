import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { getPopularMovies, getSearchMovies } from "../../services/api";

const Hero = ({ searchQuery }) => {
  const [heroMovie, setHeroMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeroMovie = async () => {
      try {
        setLoading(true);

        if (searchQuery && searchQuery.trim() !== "") {
          const results = await getSearchMovies(searchQuery);
          if (results.length > 0) {
            setHeroMovie(results[0]);
          } else {
            const popular = await getPopularMovies();
            setHeroMovie(popular[0]);
          }
        } else {
          const popular = await getPopularMovies();
          setHeroMovie(popular[0]);
        }
      } catch (error) {
        console.error("Error fetching hero movie:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroMovie();
  }, [searchQuery]);

  if (loading) {
    return (
      <div className="relative h-96 bg-gray-800 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
      <div
        className="h-96 bg-cover bg-center"
        style={{
          backgroundImage: heroMovie?.backdrop_path
            ? `url(https://image.tmdb.org/t/p/original${heroMovie.backdrop_path})`
            : "url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1925&q=80')",
        }}
      >
        <div className="container mx-auto px-6 relative z-20 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {heroMovie?.title || "Browse Our Movie Collection"}
            </h1>
            <p className="text-lg md:text-xl mb-8 line-clamp-2">
              {heroMovie?.overview ||
                "Thousands of movies from every genre you can imagine"}
            </p>
            {heroMovie && (
              <button className="flex items-center bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md font-semibold">
                <FaPlay className="mr-2" /> Watch Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
