import React from 'react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import logo from '../assets/LOGO.jpg'; 

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-3 mb-6 md:mb-0">
          <img src={logo} alt="Company Logo" className="h-14 w-auto" />
          <h2 className="text-2xl font-semibold tracking-wide">Your Company Name</h2>
        </div>

        {/* Contact Information */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <p className="text-sm">1234 Street Name, City, Country</p>
          <p className="text-sm">Phone: <a href="tel:+254714178292" className="hover:text-gray-400">+254 714 178 292</a></p>
          <p className="text-sm">Email: <a href="mailto:info@yourcompany.com" className="hover:text-gray-400">info@yourcompany.com</a></p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6">
          <a href="https://wa.me/254714178292" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">
            <FaWhatsapp className="h-8 w-8" />
          </a>
          <a href="tel:+254714178292" className="text-gray-300 hover:text-gray-400">
            <FaPhone className="h-8 w-8" />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-6"></div>

      {/* Copyright Section */}
      <div className="text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
