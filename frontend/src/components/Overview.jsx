import React from 'react';
import { 
  FaWifi, 
  FaTools, 
  FaTint, 
  FaVideo, 
  FaBroom, 
  FaCar, 
  FaShieldAlt, 
  FaPaw 
} from 'react-icons/fa';
import apartmentImg from '../assets/home1.jpeg'; // Replace with your actual image

function ServicesOffered() {
  const services = [
    { id: 1, icon: <FaWifi className="h-12 w-12 text-purple-600" />, title: "Reliable Fibre Internet" },
    { id: 2, icon: <FaTools className="h-12 w-12 text-purple-600" />, title: "Fast Repair Services" }, // Updated Icon
    { id: 3, icon: <FaTint className="h-12 w-12 text-purple-600" />, title: "Uninterrupted Water Access" },
    { id: 4, icon: <FaVideo className="h-12 w-12 text-purple-600" />, title: "CCTV Surveillance" },
    { id: 5, icon: <FaBroom className="h-12 w-12 text-purple-600" />, title: "Flawless Living Environment" },
    { id: 6, icon: <FaCar className="h-12 w-12 text-purple-600" />, title: "Spacious Parking Lot" },
    { id: 7, icon: <FaShieldAlt className="h-12 w-12 text-purple-600" />, title: "24/7 Security" },
    { id: 8, icon: <FaPaw className="h-12 w-12 text-purple-600" />, title: "Pet-Friendly Spaces" },
  ];

  return (
    <div className="py-20 bg-purple-50">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Our Expertise</h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Experience the convenience and quality of our apartment amenities designed for your comfort and safety.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column: Apartment Image */}
          <div>
            <img
              src={apartmentImg}
              alt="Apartment"
              className="w-full rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Right Column: Services Grid (2 icons per row) */}
          <div className="grid grid-cols-2 gap-6">
            {/* Waving Emoji Above the Services */}
            <div className="col-span-2 text-center mb-4">
              <span className="text-6xl" role="img" aria-label="waving hand">👋</span>
            </div>
            {services.map((service) => (
              <div
                key={service.id}
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow hover:shadow-lg transition duration-200"
              >
                {service.icon}
                <p className="mt-2 text-center text-gray-800 font-semibold text-sm">
                  {service.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesOffered;
