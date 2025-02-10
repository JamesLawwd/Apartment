import React, { useEffect, useRef } from "react";
import vbalcony from "../assets/vbalcony.mp4";
import vbath from "../assets/vbath.mp4";
import vbedroom from "../assets/vbedroom.mp4";
import vbedroom2 from "../assets/vbedroom2.mp4";
import vcordal from "../assets/vcordal.mp4";
import vkitchen from "../assets/vkitchen.mp4";
import vlivingroom from "../assets/vlivingroom.mp4";
import shower from "../assets/shower.mp4";

function ExploreHouses() {
  const properties = [
    { id: 1, video: vbedroom, title: "" },
    { id: 2, video: vkitchen, title: "" },
    { id: 3, video: vcordal, title: "" },
    { id: 4, video: vbath, title: "" },
    { id: 5, video: vlivingroom, title: "" },
    { id: 6, video: vbedroom2, title: "" },
    { id: 7, video: vbalcony, title: "" },
    { id: 8, video: shower, title: "" },
  ];

  // Create an array of refs to control the playbackRate dynamically
  const videoRefs = useRef([]);

  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.playbackRate = 0.25; // Adjust speed
      }
    });
  }, []);

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
        <div className="mt-4 bg-purple-600 text-white text-sm font-bold px-3 py-2 rounded-lg inline-block">
          2 units remaining
        </div>
      </div>

      {/* Videos Grid Section */}
      <div className="relative max-w-7xl mx-auto px-4 bg-purple-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {properties.map((property, index) => (
            <div key={property.id} className="relative overflow-hidden rounded-lg shadow-lg group">
              <video
                ref={(el) => (videoRefs.current[index] = el)} // Assign ref dynamically
                src={property.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-x-0 bottom text-white text-lg font-semibold font-sans text-center py-2">
                {property.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExploreHouses;
