import React, { useState } from "react";
import home1 from '../assets/home1.jpeg'


const services = [
  {
    title: "Property Advisory",
    content: (
      <ul className="list-disc pl-4">
        <li>Property development</li>
        <li>Transactions management on pre, during, and post construction</li>
        <li>Market studies, Feasibility studies, and development appraisal</li>
        <li>Financial Management</li>
        <li>Land development options and strategy</li>
        <li>Project Funding Proposals</li>
      </ul>
    ),
  },
  { title: "Agency Services", content: "Details about agency services." },
  { title: "Facilities Management", content: "Details about facilities management." },
  { title: "Real Estate Marketing", content: "Details about real estate marketing." },
  { title: "3D Virtual Reality", content: "Details about 3D virtual reality." },
];

const RealEstatePage = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-row p-6 bg-gray-100 min-h-screen">
      
      <div className="w-full md:w-1/2 p-4">
        <img
          src={home1}
          alt="Modern Apartment"
          className="rounded-lg shadow-lg w-full h-30"
        />
      </div>

      {/* Services Section */}
      <div className="w-full md:w-1/2 p-4">
        {services.map((service, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              className="w-full text-left font-semibold p-3 flex justify-between items-center"
              onClick={() => toggleAccordion(index)}
            >
              {service.title}
              <span>{openIndex === index ? "-" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="p-3 text-gray-600">{service.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RealEstatePage;
