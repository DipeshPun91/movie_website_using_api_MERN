import React from "react";
import { MdHighQuality, MdDevices } from "react-icons/md";
import { BiMovie } from "react-icons/bi";

const Features = () => {
  const features = [
    {
      icon: <MdHighQuality size={40} />,
      title: "4K Ultra HD",
      description: "Crystal clear picture quality",
    },
    {
      icon: <BiMovie size={40} />,
      title: "10,000+ Titles",
      description: "Movies, TV shows, and more",
    },
    {
      icon: <MdDevices size={40} />,
      title: "Watch Anywhere",
      description: "Stream on all your devices",
    },
  ];

  return (
    <div className="bg-gray-800 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-red-500 mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
