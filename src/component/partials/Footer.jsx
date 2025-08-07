import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">CINEMAX</h3>
            <p className="text-gray-400 mt-2">The ultimate movie experience</p>
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
  );
};

export default Footer;
