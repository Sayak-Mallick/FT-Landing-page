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
    <section className="py-20 bg-purple-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary-600 text-xl font-medium mb-4 block">Our Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            What Our Clients Say?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Client Images */}
          <div className="relative">
            <div className="relative w-96 h-96 mx-auto">
              {/* Outer circles */}
              <div className="absolute inset-0 border-2 border-gray-200 rounded-full"></div>
              <div className="absolute inset-4 border border-gray-300 rounded-full"></div>
              
              {/* Main client image */}
              <div className="absolute inset-16 rounded-full overflow-hidden">
                <img
                  src={currentTest.image}
                  alt={currentTest.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Quote icon */}
              <div className="absolute bottom-8 right-8 w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                <Quote className="w-8 h-8 text-primary-600" />
              </div>

              {/* Surrounding client images */}
              {testimonials.map((testimonial, index) => {
                if (index === currentTestimonial) return null;
                const angle = (index * 120) - 60;
                const x = Math.cos((angle * Math.PI) / 180) * 140;
                const y = Math.sin((angle * Math.PI) / 180) * 140;
                
                return (
                  <div
                    key={testimonial.id}
                    className="absolute w-20 h-20 rounded-full overflow-hidden cursor-pointer hover:scale-110 transition-transform"
                    style={{
                      left: `calc(50% + ${x}px - 40px)`,
                      top: `calc(50% + ${y}px - 40px)`,
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

          {/* Right Side - Testimonial Content */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <Quote className="w-12 h-12 text-primary-600 mb-6 mx-auto lg:mx-0" />
              <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                "{currentTest.quote}"
              </blockquote>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {currentTest.name}
              </h3>
              <p className="text-gray-600 text-lg">
                {currentTest.position}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center lg:justify-start space-x-4">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-gray-200 hover:bg-primary-600 hover:text-white rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-primary-600 text-white hover:bg-primary-700 rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;