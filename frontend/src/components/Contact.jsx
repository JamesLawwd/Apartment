import React from "react";
import { FaPhone, FaWhatsapp } from "react-icons/fa"; // Importing phone and WhatsApp icons
import { Phone, MessageCircle } from "lucide-react"; // Importing Phone and WhatsApp icons

export default function ContactSection() {
  const phoneNumber = "+254714178292"; // Your phone number
  const destination = "Rungiri, Nairobi"; // Destination for directions

  return (
    <div className="bg-gray-100 min-h-screen p-4 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side - Google Map */}
        <div className="w-full h-[400px] md:h-[500px]">
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full rounded-lg shadow-md block"
          >
            <iframe
              className="w-full h-full rounded-lg shadow-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63821.79929184159!2d36.6505217948431!3d-1.2542032758504642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1edc7274635d%3A0x951e95c3042ce058!2sRungiri!5e0!3m2!1sen!2ske!4v1738257385896!5m2!1sen!2ske"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </a>
        </div>

        {/* Right Side - Contact Icons and Information */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Contact Us</h2>
          
          {/* Icons Section */}
          <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-8 mt-6">
            <a
              href={`tel:${phoneNumber.replace("+", "")}`} // Phone link
              className="flex flex-col items-center text-blue-500 hover:text-blue-600 mb-4 md:mb-0"
            >
              <Phone className="w-12 h-12" />
              <span className="mt-2 text-lg">Call Us</span>
            </a>
            <a
              href={`https://wa.me/${phoneNumber.replace("+", "")}`} // WhatsApp link
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-green-500 hover:text-green-600"
            >
              <MessageCircle className="w-12 h-12" />
              <span className="mt-2 text-lg">WhatsApp Us</span>
            </a>
          </div>

          {/* Updated Information Text */}
          <p className="text-gray-600 mt-6 text-sm md:text-base">
            For any inquiries or detailed information, our team is readily available to assist you. We are committed to providing clear and helpful guidance to ensure you have all the details you need. Your comfort and satisfaction are our priority, and we look forward to welcoming you as our valued tenant!
          </p>
        </div>
      </div>
    </div>
  );
}
