import React from 'react';

function Header() {
  return (
    <header className="bg-gray-50 py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          Full Stack Developer
        </h1>
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          I code simple things and make them work beautifully.
        </p>

        {/* Image */}
        <img
          src="src/assets/code.png"
          alt="Coding Illustration"
          className="w-64 h-auto mt-4"
        />
      </div>
    </header>
  );
}

export default Header;
