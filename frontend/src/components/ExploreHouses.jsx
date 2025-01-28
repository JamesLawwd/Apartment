import React from 'react';
import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import bathroomImage from '../assets/bathroom.jpeg';
import kitchenImage from '../assets/kitchen.jpeg'

function ExploreHouses() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample data - replace with your actual images
  const properties = [
    {
      id: 1,
      image: "/path-to-image1.jpg",
      title: "Living Room"
    },
    {
      id: 2,
      image: "/path-to-image2.jpg",
      title: "Bedroom"
    },
    {
      id: 3,
      image: "/path-to-image3.jpg",
      title: "Study Room"
    },
    {
      id: 4,
      image: kitchenImage,
      title: "Kitchen"
    },
    {
      id: 5,
      image: "/path-to-image5.jpg",
      title: "Dining Room"
    },
    {
      id: 6,
      image: bathroomImage,
      title: "Bathroom"
    },
    {
      id: 7,
      image: "/path-to-image7.jpg",
      title: "Balcony"
    },
    {
      id: 8,
      image: "/path-to-image8.jpg",
      title: "Master Bedroom"
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === properties.length - 4 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? properties.length - 4 : prevIndex - 1
    );
  };

  return (
    <div className="py-20 bg-gray-50">
      {/* Heading Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Check Out Our Rooms
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our carefully designed spaces that blend comfort with modern elegance
        </p>
      </div>

      {/* Existing Image Grid Section */}
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Navigation Arrows */}
        {/* <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all"
        > */}
          <ChevronLeftIcon className="h-6 w-6 text-gray-800" />
        {/* </button>
        
        <button  */}
          {/* onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all"
        >
          <ChevronRightIcon className="h-6 w-6 text-gray-800" />
        </button> */}

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {properties.map((property) => (
            <div 
              key={property.id}
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">
                  {property.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExploreHouses;
