import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { toggleMobileMenu, closeMobileMenu } from '../store/slices/uiSlice';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isMobileMenuOpen } = useAppSelector((state) => state.ui);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    dispatch(closeMobileMenu());
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 ${isScrolled ? 'bg-white shadow-md' : 'bg-primary backdrop-blur-sm'} rounded-xl flex items-center justify-center transition-all duration-300`}>
              <img 
                src="/src/assets/images/logo.png" 
                alt="Future Transformations Logo" 
                className="w-16 h-16 object-contain"
              />
            </div>
            {/* <span className={`text-xl font-bold ${isScrolled ? 'text-primary-900' : 'text-white'} transition-colors duration-300`}>Future Transformations</span> */}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`transition-colors duration-200 ${
                  isScrolled ? 'text-primary-600 hover:text-primary-900' : 'text-white hover:text-accent-400'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button className={`px-6 py-2 rounded-full font-semibold transition-colors duration-200 ${
              isScrolled ? 'bg-primary-600 text-white hover:bg-primary-700' : 'bg-white text-primary-900 hover:bg-gray-100'
            }`}>
              Let's Talk
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => dispatch(toggleMobileMenu())}
              className={`transition-colors duration-200 ${
                isScrolled ? 'text-primary-600 hover:text-primary-900' : 'text-white hover:text-accent-400'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-primary-900/95 backdrop-blur-sm rounded-lg mt-2 mb-4 p-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-white hover:text-accent-400 transition-colors duration-200 text-left"
                >
                  {item.name}
                </button>
              ))}
              <button className="bg-white text-primary-900 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 w-fit">
                Let's Talk
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;