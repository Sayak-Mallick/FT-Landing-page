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

      {/* Gradient Overlay - reduced opacity from 95 to 90 */}
      <div className="absolute inset-0 z-10" style={{ backgroundColor: '#000D9ACC' }} />

      {/* Background Circles */}
      {/* <div className="absolute right-0 top-20 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl z-20"></div>
      <div className="absolute right-20 top-40 w-80 h-80 bg-secondary-500/30 rounded-full blur-2xl z-20"></div>
      <div className="absolute right-10 top-32 w-72 h-72 bg-primary-600/50 rounded-full z-20"></div> */}

      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="text-white animate-[fadeUp_1s_ease-out_0.2s_both]">
            <div className="flex items-center space-x-4 mb-6 animate-[fadeUp_1s_ease-out_0.4s_both]">
              <div className="w-12 h-0.5 bg-white"></div>
              <span className="text-lg font-medium">Software Agency</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-[fadeUp_1s_ease-out_0.6s_both]">
              Empowering Your Future with{' '}
              <span className="text-accent-400">Cutting-Edge</span>{' '}
              Software Solutions
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-6 animate-[fadeUp_1s_ease-out_0.8s_both]">
              Innovative. Reliable. Tailored to your success.
            </p>

            <p className="text-lg text-gray-400 mb-8 max-w-2xl animate-[fadeUp_1s_ease-out_1s_both]">
              We believe technology should simplify, elevate, and transform your business.
              As a forward-thinking software service provider, we blend creativity with
              engineering excellence to deliver solutions that not only meet today's needs
              but also anticipate tomorrow's challenges.
            </p>

            <button className="bg-white text-primary-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2 animate-[fadeUp_1s_ease-out_1.2s_both]">
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Content - Image and CTA Card */}
          <div className="flex flex-col space-y-8 animate-[fadeUp_1s_ease-out_0.4s_both]">
            {/* Hero Image */}
            <img
              src={heroImg}
              alt="Professional businessman"
              className="rounded-2xl w-4/5 h-100 object-cover object-top mx-auto"
            />

            {/* CTA Card */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl" style={{ top: '-175px', position: 'relative' }}>
              <h3 className="text-xl font-bold text-primary-900 mb-4">
                For Further Inquiries Call:
              </h3>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary-600" />
                </div>
                <span className="text-2xl font-bold text-primary-900">
                  +91-9433549417
                </span>
              </div>
              <p className="text-gray-600 text-md">
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
