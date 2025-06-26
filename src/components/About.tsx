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
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
              alt="Team collaboration"
              className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
            />
            <div className="absolute -bottom-8 -right-8 bg-primary-600 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-3xl font-bold">10+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-0.5 bg-primary-600"></div>
              <span className="text-primary-600 text-xl font-medium">About us</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Empowering Your Vision with Cutting-Edge Software Solutions
            </h2>

            <p className="text-xl text-gray-600 mb-8">
              To empower businesses worldwide by crafting intelligent, scalable software 
              solutions — driving growth, efficiency, and innovation.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Advanced Innovative Agency
                  </h3>
                  <p className="text-gray-600">
                    Leading the industry with cutting-edge technology solutions
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Web Architecture and Development
                  </h3>
                  <p className="text-gray-600">
                    Building robust, scalable web applications with modern technologies
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className={`${stat.bgColor} text-white p-6 rounded-2xl transform hover:scale-105 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 mb-3 opacity-80" />
                  <div className="text-3xl font-bold mb-1">{stat.number}</div>
                  <div className="text-sm font-medium mb-1">{stat.label}</div>
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