import React, { useRef, useState } from 'react';
import { Facebook, Linkedin, Twitter } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import type { SwiperRef } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Team: React.FC = () => {
  const swiperRef = useRef<SwiperRef>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const teamMembers = [
    {
      id: 1,
      name: 'Thomas Anderson',
      role: 'Senior Front-end Developer',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      description: 'Our Front-End Developer brings creativity and technical expertise to deliver seamless, user-friendly interfaces',
      social: {
        facebook: '#',
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      id: 2,
      name: 'Sarah Mitchell',
      role: 'Full-Stack Developer',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
      description: 'Experienced full-stack developer specializing in modern web technologies and scalable solutions',
      social: {
        facebook: '#',
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'DevOps Engineer',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg',
      description: 'DevOps specialist focused on automation, deployment, and infrastructure optimization',
      social: {
        facebook: '#',
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      id: 4,
      name: 'Emma Rodriguez',
      role: 'UI/UX Designer',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      description: 'Creative designer passionate about crafting intuitive and beautiful user experiences',
      social: {
        facebook: '#',
        linkedin: '#',
        twitter: '#'
      }
    }
  ];

  const handleDotClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideToLoop(index);
      setActiveIndex(index);
    }
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary-600 text-xl font-medium mb-4 block">Our Team</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Meet the team behind the agency success
          </h2>
        </div>

        {/* Team Swiper */}
        <div className="mb-12">
          <Swiper
            ref={swiperRef}
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            onSlideChange={handleSlideChange}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="team-swiper"
          >
            {teamMembers.map((member) => (
              <SwiperSlide key={member.id}>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover"
                    />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  
                  <p className="text-primary-600 text-sm font-medium mb-4">
                    {member.role}
                  </p>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {member.description}{' '}
                    <button className="text-primary-600 hover:text-primary-700 font-medium">
                      Read more...
                    </button>
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex justify-center space-x-3">
                    <a
                      href={member.social.facebook}
                      className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                    >
                      <Facebook className="w-4 h-4 text-white" />
                    </a>
                    <a
                      href={member.social.linkedin}
                      className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-white" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                    >
                      <Twitter className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Functional Pagination Dots */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2, 3].map((index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === activeIndex ? 'bg-gray-900' : 'bg-gray-300 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;