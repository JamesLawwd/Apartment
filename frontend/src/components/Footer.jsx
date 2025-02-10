import React from 'react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import logo from '../assets/LOGO.jpg';

const Footer = () => {
  return (
    <footer className="bg-purple-200 text-black py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo Section */}
        <div className="flex justify-center md:justify-start">
          <a href="/" className="flex items-center">
            <img
              src={logo}
              alt="Company Logo"
              className="h-16 w-auto rounded-full shadow-lg transition transform hover:scale-105 duration-200"
            />
          </a>
        </div>

        {/* Contact Information */}
        <div className="text-center">
          <p className="text-sm">stage87 Muhuri road, off waiyaki way </p>
          <p className="text-sm">
            Phone:{' '}
            <a
              href="tel:+254714178292"
              className="hover:text-black transition duration-200"
            >
              +254 714 178 292
            </a>
          </p>
          <p className="text-sm">
            Email:{' '}
            <a
              href="mailto:jleo56291@gmail.com"
              className="hover:text-black transition duration-200"
            >
              jleo56291@gmail.com
            </a>
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-end space-x-6">
          <a
            href="https://wa.me/254714178292"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-600 transition duration-200"
          >
            <FaWhatsapp className="h-8 w-8" />
          </a>
          <a
            href="tel:+254714178292"
            className="text-gray-600 hover:text-black transition duration-200"
          >
            <FaPhone className="h-8 w-8" />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 my-6"></div>

      {/* Copyright Section */}
      <div className="text-center text-sm text-gray-600">
        <p>&copy; {new Date().getFullYear()} James Tech Hub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
