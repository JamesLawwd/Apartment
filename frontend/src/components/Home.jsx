import React from 'react';
import { Link } from 'react-scroll';
import home from '../assets/home.jpeg'; 

function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative h-[95vh]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={home}
            alt="Luxury Interior"
            className="w-full h-full object-cover object-center"
            style={{ 
              objectPosition: 'center 25%',
              maxHeight: '95vh',
              width: '100%'
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-30" />
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Location Tag */}
          <div className="flex items-center space-x-2 text-white mb-4">
            <svg 
              className="h-6 w-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
              />
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
              />
            </svg>
            <span className="text-lg">DAGORETTI, NAIROBI COUNTY</span>
            
           
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2">
            VINDEN APARTMENTS
          </h1>
         
          {/* Property Tags */}
          <div className="flex items-center space-x-4 text-white mb-8">
            <span className="flex items-center">
              <svg 
                className="h-5 w-5 mr-2" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              RESIDENTIAL
            </span>
            <span className="flex items-center">
              <svg 
                className="h-5 w-5 mr-2" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
              </svg>
              FOR RENT
            </span>
           
          </div>
          <span className="flex items-center text-white text-2xl underline">
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                {/* SVG for price tag */}
              </svg>
               2Bedroom KESX,XXX/month
            </span>

         

          {/* Scroll Indicator */}
          <Link 
            to="explore"
            smooth={true} 
            duration={500} 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-center cursor-pointer"
          >
            <p className="text-sm mb-2">SCROLL FOR MORE INFO</p>
            <svg 
              className="h-6 w-6 mx-auto animate-bounce" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Additional sections will go here */}
    </div>
  );
}

export default Home;
