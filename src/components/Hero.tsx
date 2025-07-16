import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import heroBackgroundImg from '../assets/images/hero-background.png';
import heroImg from '../assets/images/hero.png';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url("${heroBackgroundImg}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10" style={{ backgroundColor: '#000D9ACC' }} />

      <div className="relative z-30 container-responsive hero-content">
        <div className="grid-responsive-1-2 items-start">
          {/* Left Content */}
          <div className="text-white animate-[fadeUp_1s_ease-out_0.2s_both] space-responsive-y">
            <div className="flex items-center space-x-2 sm:space-x-4 mb-4 sm:mb-6 animate-[fadeUp_1s_ease-out_0.4s_both]">
              <div className="w-8 sm:w-12 h-0.5 bg-white"></div>
              <span className="text-base sm:text-lg font-medium">Software Agency</span>
            </div>

            <h1 className="text-hero font-bold leading-tight mb-4 sm:mb-6 animate-[fadeUp_1s_ease-out_0.6s_both]">
              Empowering Your Future with{' '}
              <span className="text-accent-400">Cutting-Edge</span>{' '}
              Software Solutions
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-4 sm:mb-6 animate-[fadeUp_1s_ease-out_0.8s_both]">
              Innovative. Reliable. Tailored to your success.
            </p>

            <p className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8 animate-[fadeUp_1s_ease-out_1s_both]">
              We believe technology should simplify, elevate, and transform your business.
              As a forward-thinking software service provider, we blend creativity with
              engineering excellence to deliver solutions that not only meet today's needs
              but also anticipate tomorrow's challenges.
            </p>

            <button className="bg-white text-primary-900 btn-responsive hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2 animate-[fadeUp_1s_ease-out_1.2s_both]">
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Right Content - Image and CTA Card */}
          <div className="flex flex-col space-y-6 sm:space-y-8 animate-[fadeUp_1s_ease-out_0.4s_both]">
            {/* Hero Image */}
            <img
              src={heroImg}
              alt="Professional businessman"
              className="hero-image mx-auto"
            />

            {/* CTA Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl hero-cta-card">
              <h3 className="text-lg sm:text-xl font-bold text-primary-900 mb-3 sm:mb-4">
                For Further Inquiries Call:
              </h3>
              <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" />
                </div>
                <span className="text-xl sm:text-2xl font-bold text-primary-900">
                  +91-9433549417
                </span>
              </div>
              <p className="text-gray-600 text-sm sm:text-base">
                Ready to elevate your business? Contact us to explore tailored software solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
