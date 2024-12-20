import React from 'react';

function ProductCard() {
  const projects = [
    {
      name: "THS_X",
      description: "A social media app with notifications, followers, and bookmarks.",
      image: "/public/thsx.png", // Replace with the actual image URL
      liveLink: "https://thsx.dearfood.app/",
      // githubLink: "https://github.com/your-thsx-repo",
    },
    {
      name: "E-Commerce App",
      description: "An online store with product search, cart, and payment integration.",
      image: "/public/ecom.png", // Replace with the actual image URL
      liveLink: "https://ecom.dearfood.app",
      githubLink: "https://github.com/Ridaaawww/E-commerce",
    },
    // Add more projects as needed
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
          >
            {/* Project Image */}
            {project.image && (
              <img
                className="w-full h-48 object-cover"
                src={project.image}
                alt={project.name}
              />
            )}
            {/* Project Details */}
            <div className="p-6">
              <h5 className="text-xl font-semibold text-gray-800 mb-2">{project.name}</h5>
              <p className="text-gray-600 mb-4">{project.description}</p>

              {/* Links */}
              <div className="flex justify-between items-center">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  View Live
                </a>
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;
