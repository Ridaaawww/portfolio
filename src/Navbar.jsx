import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {/* Replace with your logo */}
              <a href="/" className="text-2xl font-bold text-indigo-600">
                R.
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>

          {/* Button Section for Desktop */}
          <div className="hidden md:block">
            <a
              href="https://drive.google.com/file/d/1rGmg5W4v5rXHfPU5pQZ9XJY9L-giWK75/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition duration-200"
            >
              Resume
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <a
            href="https://drive.google.com/file/d/1rGmg5W4v5rXHfPU5pQZ9XJY9L-giWK75/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition duration-200"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
