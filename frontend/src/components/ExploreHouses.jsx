import React from 'react';
import { useState } from 'react';
import bathroomImage from '../assets/bath.jpg';
import kitchenImage from '../assets/kitchen.jpeg'
import restroom from '../assets/restroom1.jpg'

function ExploreHouses() {
  const [currentIndex, setCurrentIndex] = useState(0);

  
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
      image: restroom,
      title: "RestRoom"
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




  

  return (
    <div className="py-20 bg-purple-50">
      {/* Heading Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Check Out Our Rooms
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our carefully designed spaces that blend comfort with modern elegance
        </p>
        <div className="mt-4 bg-purple-400 text-white text-sm font-bold px-3 py-2 rounded-lg inline-block">
          4 units remaining
        </div>
      </div>

      {/* Existing Image Grid Section */}
      <div className="relative max-w-7xl mx-auto px-4  bg-purple-50">
        
        
    

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
