import React from 'react';
import { FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-4xl font-semibold text-gray-800 mb-4 text-center">
          Let's Connect!
        </h2>
        <p className="text-gray-600 text-center mb-6 text-lg">
          "Got an idea or just want to say hi? My inbox is always open!"
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://twitter.com/ridaaawww"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full"
            title="Twitter"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com/_ridaaawww"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded-full hover:opacity-90 transition duration-200"
            title="Instagram"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="mailto:mahveenrida4@gmail.com"
            className="flex items-center justify-center w-12 h-12 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-200"
            title="Email"
          >
            <FaEnvelope size={24} />
          </a>
        </div>

       </div>
       </div>
      
  );
}

export default Contact;
