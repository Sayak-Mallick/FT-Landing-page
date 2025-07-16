import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { toggleMobileMenu, closeMobileMenu } from '../store/slices/uiSlice';
import logoImg from '../assets/images/logo.png';

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
      <nav className="container-responsive">
        <div className="header-nav">
          {/* Logo */}
          <div className="header-logo-container">
            <div className={`header-logo-box ${isScrolled ? 'bg-white shadow-md' : 'bg-primary backdrop-blur-sm'} transition-all duration-300`}>
              <img 
                src={logoImg} 
                alt="Future Transformations Logo" 
                className="header-logo-img"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="header-nav-desktop">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`text-sm lg:text-base font-medium transition-colors duration-200 ${
                  isScrolled ? 'text-primary-600 hover:text-primary-900' : 'text-white hover:text-accent-400'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button className={`btn-responsive font-semibold transition-colors duration-200 ${
              isScrolled ? 'bg-primary-600 text-white hover:bg-primary-700' : 'bg-white text-primary-900 hover:bg-gray-100'
            }`}>
              Let's Talk
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="header-nav-mobile">
            <button
              onClick={() => dispatch(toggleMobileMenu())}
              className={`p-2 transition-colors duration-200 ${
                isScrolled ? 'text-primary-600 hover:text-primary-900' : 'text-white hover:text-accent-400'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="mobile-nav md:hidden">
            <div className="space-responsive-y">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="mobile-nav-item"
                >
                  {item.name}
                </button>
              ))}
              <button className="bg-white text-primary-900 btn-responsive hover:bg-gray-100 transition-colors duration-200 w-fit">
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
