import React from 'react';
import { Users, Building, Award } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    {
      icon: Users,
      number: '3K+',
      label: 'Expert Team',
      subtitle: 'Complete Projects',
      bgColor: 'bg-primary-800'
    },
    {
      icon: Building,
      number: '50+',
      label: 'Branches',
      subtitle: 'Company Sector',
      bgColor: 'bg-accent-500'
    },
    {
      icon: Award,
      number: '15+',
      label: 'Awards Won',
      subtitle: 'Industry Recognition',
      bgColor: 'bg-secondary-600'
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-responsive">
        <div className="grid-responsive-1-2 items-center">
          {/* Left Content */}
          <div className="about-image-container">
            <img
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
              alt="Team collaboration"
              className="about-image shadow-2xl"
            />
            <div className="about-badge">
              <div className="text-2xl sm:text-3xl font-bold">10+</div>
              <div className="text-xs sm:text-sm">Years Experience</div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-responsive-y">
            <div className="flex items-center space-x-2 sm:space-x-4 mb-4 sm:mb-6">
              <div className="w-8 sm:w-12 h-0.5 bg-primary-600"></div>
              <span className="text-primary-600 text-lg sm:text-xl font-medium">About us</span>
            </div>
            
            <h2 className="text-section-title font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Empowering Your Vision with Cutting-Edge Software Solutions
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
              To empower businesses worldwide by crafting intelligent, scalable software 
              solutions — driving growth, efficiency, and innovation.
            </p>

            <div className="space-responsive-y mb-6 sm:mb-8">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">
                    Advanced Innovative Agency
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Leading the industry with cutting-edge technology solutions
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">
                    Web Architecture and Development
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Building robust, scalable web applications with modern technologies
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className={`${stat.bgColor} text-white p-4 sm:p-6 rounded-2xl transform hover:scale-105 transition-transform duration-300`}>
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-3 opacity-80" />
                  <div className="text-2xl sm:text-3xl font-bold mb-1">{stat.number}</div>
                  <div className="text-xs sm:text-sm font-medium mb-1">{stat.label}</div>
                  <div className="text-xs opacity-80">{stat.subtitle}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
