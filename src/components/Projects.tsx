import React from 'react';
import { ExternalLink, Eye } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Tech Website Solution',
      category: 'Technology',
      image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg',
      description: 'Modern web application with advanced features'
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      category: 'E-commerce',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg',
      description: 'Full-featured online shopping platform'
    },
    {
      id: 3,
      title: 'Mobile Banking App',
      category: 'FinTech',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg',
      description: 'Secure mobile banking solution'
    },
    {
      id: 4,
      title: 'Healthcare Management',
      category: 'Healthcare',
      image: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg',
      description: 'Comprehensive healthcare management system'
    },
    {
      id: 5,
      title: 'Learning Management System',
      category: 'Education',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      description: 'Advanced e-learning platform'
    },
    {
      id: 6,
      title: 'Real Estate Platform',
      category: 'Real Estate',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg',
      description: 'Property management and listing platform'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary-600 text-xl font-medium mb-4 block">Our Projects</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Recently Completed Creative Works
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <button className="bg-white text-primary-900 p-3 rounded-full hover:bg-gray-100 transition-colors">
                      <Eye className="w-5 h-5" />
                    </button>
                    <button className="bg-white text-primary-900 p-3 rounded-full hover:bg-gray-100 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-primary-600 text-sm font-medium bg-primary-50 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-primary-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-700 transition-colors duration-300 transform hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;