import React from "react";
import { MdHighQuality, MdDevices } from "react-icons/md";
import { BiMovie } from "react-icons/bi";

const Features = () => {
  const features = [
    {
      icon: <MdHighQuality className="feature-icon" />,
      title: "4K Ultra HD",
      description:
        "Experience crystal clear picture quality with our premium 4K streaming",
      highlight: "Premium Quality",
    },
    {
      icon: <BiMovie className="feature-icon" />,
      title: "10,000+ Titles",
      description:
        "Explore our vast library of movies, TV shows, documentaries, and exclusive content",
      highlight: "Extensive Library",
    },
    {
      icon: <MdDevices className="feature-icon" />,
      title: "Multi-Device Support",
      description:
        "Seamless streaming across all your devices, anytime, anywhere",
      highlight: "Cross-Platform",
    },
  ];

  return (
    <section className="bg-gray-800 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Choose Our Platform
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-lg p-8 hover:bg-gray-600 transition-all duration-300 transform hover:-translate-y-2 shadow-xl"
            >
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-gray-600 rounded-full text-red-500 hover:bg-gray-500 transition-colors duration-300">
                  {React.cloneElement(feature.icon, { className: "text-4xl" })}
                </div>
              </div>
              <div className="text-center">
                <span className="text-xs font-semibold tracking-wider text-red-400 uppercase">
                  {feature.highlight}
                </span>
                <h3 className="text-xl font-bold text-white mt-2 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
