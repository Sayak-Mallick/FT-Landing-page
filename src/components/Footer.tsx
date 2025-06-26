import React, { useState } from 'react';
import { Facebook, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <img 
                    src="/src/assets/images/logo.png" 
                    alt="Future Transformations Logo" 
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <span className="text-white text-xl font-bold">Future Transformations</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Empowering businesses worldwide with cutting-edge software solutions. 
                We blend creativity with engineering excellence to deliver transformative results.
              </p>
              
              {/* Newsletter Signup */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
                <form onSubmit={handleNewsletterSubmit} className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent-400"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-accent-500 hover:bg-accent-600 px-6 py-3 rounded-r-lg transition-colors duration-200 flex items-center"
                  >
                    <Mail className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  <strong className="text-white">Phone:</strong><br />
                  +91-9433549417
                </p>
                <p>
                  <strong className="text-white">Email:</strong><br />
                  info@techcorp.com
                </p>
                <p>
                  <strong className="text-white">Address:</strong><br />
                  123 Tech Street, Digital City<br />
                  Tech Valley, TC 12345
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="border-t border-primary-800 py-8">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Future Transformations. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="#"
                className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
              >
                <Twitter className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;