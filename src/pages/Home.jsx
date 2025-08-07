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
