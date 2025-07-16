import React from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { setCurrentTestimonial } from '../store/slices/uiSlice';

const Testimonials: React.FC = () => {
  const dispatch = useAppDispatch();
  const { currentTestimonial } = useAppSelector((state) => state.ui);

  const testimonials = [
    {
      id: 1,
      name: 'Alexander Gibson',
      position: 'CEO, TechStart Inc.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      quote: 'The team delivered exceptional results that exceeded our expectations. Their technical expertise and attention to detail transformed our business operations completely.',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'CTO, Digital Solutions',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
      quote: 'Working with this software agency was a game-changer for our company. They delivered a robust, scalable solution that has significantly improved our efficiency.',
    },
    {
      id: 3,
      name: 'Michael Chen',
      position: 'Founder, InnovateNow',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg',
      quote: 'Outstanding service and remarkable results. The team understood our vision perfectly and brought it to life with cutting-edge technology solutions.',
    },
  ];

  const nextTestimonial = () => {
    dispatch(setCurrentTestimonial((currentTestimonial + 1) % testimonials.length));
  };

  const prevTestimonial = () => {
    dispatch(setCurrentTestimonial(currentTestimonial === 0 ? testimonials.length - 1 : currentTestimonial - 1));
  };

  const currentTest = testimonials[currentTestimonial];

  return (
    <section className="section-padding bg-purple-50/30">
      <div className="container-responsive">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary-600 text-lg sm:text-xl font-medium mb-3 sm:mb-4 block">Our Testimonials</span>
          <h2 className="text-section-title font-bold text-gray-900">
            What Our Clients Say?
          </h2>
        </div>

        <div className="grid-responsive-1-2 items-center">
          {/* Left Side - Client Images */}
          <div className="relative mb-8 lg:mb-0">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto">
              {/* Outer circles */}
              <div className="absolute inset-0 border-2 border-gray-200 rounded-full"></div>
              <div className="absolute inset-2 sm:inset-4 border border-gray-300 rounded-full"></div>
              
              {/* Main client image */}
              <div className="absolute inset-8 sm:inset-12 lg:inset-16 rounded-full overflow-hidden">
                <img
                  src={currentTest.image}
                  alt={currentTest.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Quote icon */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-purple-100 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-primary-600" />
              </div>

              {/* Surrounding client images - Hidden on mobile */}
              <div className="mobile-hidden">
                {testimonials.map((testimonial, index) => {
                  if (index === currentTestimonial) return null;
                  const angle = (index * 120) - 60;
                  const radian = (angle * Math.PI) / 180;
                  const radius = 140;
                  const x = Math.cos(radian) * radius;
                  const y = Math.sin(radian) * radius;
                  
                  return (
                    <div
                      key={testimonial.id}
                      className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-white shadow-lg cursor-pointer transition-transform duration-300 hover:scale-110"
                      style={{
                        transform: `translate(${x}px, ${y}px)`,
                        top: '50%',
                        left: '50%',
                        marginTop: '-2rem',
                        marginLeft: '-2rem',
                      }}
                      onClick={() => dispatch(setCurrentTestimonial(index))}
                    >
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side - Testimonial Content */}
          <div className="testimonial-card">
            <div className="mb-6 sm:mb-8">
              <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-primary-600 mb-4 sm:mb-6" />
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed mb-6 sm:mb-8">
                "{currentTest.quote}"
              </p>
              <div className="flex items-center space-x-4">
                <img
                  src={currentTest.image}
                  alt={currentTest.name}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900">
                    {currentTest.name}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600">
                    {currentTest.position}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => dispatch(setCurrentTestimonial(index))}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-200 ${
                      index === currentTestimonial ? 'bg-primary-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <div className="flex space-x-2">
                <button
                  onClick={prevTestimonial}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors duration-200"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors duration-200"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
