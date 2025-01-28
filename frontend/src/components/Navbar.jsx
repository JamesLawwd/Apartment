import { useState } from 'react';
import LOGO from '../assets/LOGO.jpg'; 

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50 font-serif">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Updated to more compact dimensions */}
          <div className="flex-shrink-0 flex items-center">
            <img 
              src={LOGO} 
              alt="Company Logo" 
              className="h-20 w-20 cursor-pointer object-contain" // Made dimensions square and removed padding
            />
          </div>

          {/* Desktop Menu - Updated positioning and font size */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-12"> {/* Increased space between links */}
              <a href="/" className="text-lg text-gray-700 hover:text-red-600 px-3 py-2 font-medium transition-colors duration-300 font-serif">
                Home
              </a>
              <a href="/explore" className="text-lg text-gray-700 hover:text-red-600 px-3 py-2 font-medium transition-colors duration-300 font-serif">
                Explore Houses
              </a>
              <a href="/about" className="text-lg text-gray-700 hover:text-red-600 px-3 py-2 font-medium transition-colors duration-300 font-serif">
                About
              </a>
              <a href="/contact" className="text-lg text-gray-700 hover:text-red-600 px-3 py-2 font-medium transition-colors duration-300 font-serif">
                Contact Us
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-red-600 focus:outline-none transition-colors duration-300"
            >
              <svg
                className="h-6 w-6 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Updated font size */}
      <div 
        className={`md:hidden transition-all duration-700 ease-in-out ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="/" className="block text-lg text-gray-700 hover:text-red-600 px-3 py-2 font-medium transition-colors duration-300 font-serif">
            Home
          </a>
          <a href="/explore" className="block text-lg text-gray-700 hover:text-red-600 px-3 py-2 font-medium transition-colors duration-300 font-serif">
            Explore Houses
          </a>
          <a href="/about" className="block text-lg text-gray-700 hover:text-red-600 px-3 py-2 font-medium transition-colors duration-300 font-serif">
            About
          </a>
          <a href="/contact" className="block text-lg text-gray-700 hover:text-red-600 px-3 py-2 font-medium transition-colors duration-300 font-serif">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;