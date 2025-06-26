import React from 'react';
import { Code, Server, Brain, Smartphone, Database, Shield } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Software Development',
      description: 'Bring to the table survival strategies to ensure proactive domination',
      color: 'bg-green-500'
    },
    {
      icon: Brain,
      title: 'AI Services',
      description: 'Leverage agile framework to provide a robust high level synopsis overviews',
      color: 'bg-purple-500'
    },
    {
      icon: Server,
      title: 'DevOps',
      description: 'Grow the holistic world view of disruptive innovation workspace',
      color: 'bg-pink-500',
      featured: true
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      color: 'bg-blue-500'
    },
    {
      icon: Database,
      title: 'Database Solutions',
      description: 'Scalable database architecture and optimization for your applications',
      color: 'bg-orange-500'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets',
      color: 'bg-red-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-primary-600 text-lg font-medium">Services</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Services Overview
            </h2>

            <p className="text-xl text-gray-600 mb-8 max-w-md">
              We will bring the breadth of our experience and industry knowledge to help you succeed
            </p>

            {/* Decorative Element */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full opacity-10 transform rotate-12"></div>
              <div className="relative bg-primary-600 text-white p-6 rounded-2xl max-w-sm">
                <h3 className="text-xl font-bold mb-2">Ready to Get Started?</h3>
                <p className="text-primary-100 mb-4">Let's discuss your project requirements</p>
                <button className="bg-white text-primary-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          {/* Right Content - Services Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  service.featured ? 'ring-2 ring-primary-500' : ''
                }`}
              >
                <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                {service.featured && (
                  <div className="mt-4 inline-flex items-center text-primary-600 font-medium">
                    <span className="text-sm">Most Popular</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;