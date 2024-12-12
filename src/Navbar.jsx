import React from 'react';


function Navbar() {
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

          {/* Button Section */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button
                className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition duration-200"
              >
                Say Hello
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
