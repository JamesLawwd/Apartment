import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import social media icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold">Your Company Name</h2>
            <p className="text-sm">1234 Street Name, City, Country</p>
            <p className="text-sm">Phone: +254 714 178 292</p>
            <p className="text-sm">Email: info@yourcompany.com</p>
          </div>
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="hover:text-gray-400">
              <FaFacebook className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaTwitter className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaInstagram className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaLinkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
