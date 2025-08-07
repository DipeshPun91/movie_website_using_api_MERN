import React from "react";

const Cta = () => {
  return (
    <div className="bg-gradient-to-r from-red-900 to-gray-900 py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to start streaming?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied viewers enjoying premium content in
          stunning quality.
        </p>
        <button className="bg-white text-gray-900 hover:bg-gray-200 px-10 py-4 rounded-md font-bold text-lg">
          Sign Up Now
        </button>
      </div>
    </div>
  );
};

export default Cta;
