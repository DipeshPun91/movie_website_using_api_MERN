import React from "react";

const Hero = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
      <div
        className="h-96 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1925&q=80')",
        }}
      >
        <div className="container mx-auto px-6 relative z-20 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Browse Our Movie Collection
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Thousands of movies from every genre you can imagine
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
