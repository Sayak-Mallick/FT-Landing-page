import React, { useState } from 'react';
import { Facebook, Linkedin, Twitter, Mail } from 'lucide-react';
import logoImg from '../assets/images/logo.png';

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
    <footer className="text-white" style={{ backgroundColor: '#000D9ACC' }}>
      <div className="container-responsive">
        {/* Main Footer Content */}
        <div className="section-padding">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                <div className="logo-responsive bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <img 
                    src={logoImg} 
                    alt="Future Transformations Logo" 
                    className="logo-img-responsive object-contain"
                  />
                </div>
                <span className="text-white text-lg sm:text-xl font-bold">Future Transformations</span>
              </div>
              <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6">
                Empowering businesses worldwide with cutting-edge software solutions. 
                We blend creativity with engineering excellence to deliver transformative results.
              </p>
              
              {/* Newsletter Signup */}
              <div className="mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Stay Updated</h3>
                <form onSubmit={handleNewsletterSubmit} className="footer-newsletter">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 sm:px-4 sm:py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent-400 text-sm sm:text-base"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-accent-500 hover:bg-accent-600 px-4 py-2 sm:px-6 sm:py-3 rounded-r-lg transition-colors duration-200 flex items-center"
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </form>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Quick Links</h3>
              <ul className="space-y-3 sm:space-y-4">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Contact Info</h3>
              <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base">
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
        <div className="border-t border-primary-800 py-6 sm:py-8">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-3 sm:space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-800 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
              © {new Date().getFullYear()} Future Transformations. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="#"
                className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Facebook className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors"
              >
                <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
              >
                <Twitter className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
