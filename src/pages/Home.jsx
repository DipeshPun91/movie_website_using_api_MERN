import React from "react";
import Hero from "../component/home/Hero";
import Features from "../component/home/Features";
import Cta from "../component/home/Cta";

const Home = () => {
  const movies = [
    { title: "Midnight Run", genre: "Action", year: 2022 },
    { title: "Eternal Sunshine", genre: "Drama", year: 2023 },
    { title: "Cosmic Journey", genre: "Sci-Fi", year: 2021 },
    { title: "Shadow Protocol", genre: "Thriller", year: 2023 },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Hero />

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

      <Features />

      <Cta />
    </div>
  );
};

export default Home;
