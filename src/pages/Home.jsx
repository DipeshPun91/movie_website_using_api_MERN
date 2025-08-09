import React from "react";
import Hero from "../component/home/Hero";
import Features from "../component/home/Features";
import Cta from "../component/home/Cta";
import Featured from "../component/home/Featured";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Hero />
      <Featured />
      <Features />
      <Cta />
    </div>
  );
};

export default Home;
