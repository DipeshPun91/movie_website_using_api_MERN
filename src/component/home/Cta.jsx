import React from "react";

const Cta = () => {
  return (
    <section className="bg-gradient-to-r from-red-900 via-red-800 to-gray-900 py-24 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Streaming Journey?
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied viewers enjoying our premium content
            library in stunning 4K quality, available anytime, anywhere.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-gray-900 hover:bg-gray-100 px-12 py-4 rounded-md font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Start Your Free Trial
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-12 py-4 rounded-md font-bold text-lg transition-all duration-300">
            Explore Plans
          </button>
        </div>

        <p className="mt-8 text-gray-300 text-sm">
          No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default Cta;
