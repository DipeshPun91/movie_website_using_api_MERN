import React from "react";
import Hero from "../../component/home/Hero";
import Features from "../../component/home/Features";
import Cta from "../../component/home/Cta";
import PopularMovies from "../../component/home/PopularMovies";
import TopRated from "../../component/home/TopRated";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Hero />
      <TopRated />
      <PopularMovies />
      <Features />
      <Cta />
    </div>
  );
};

export default Home;
