import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, bgColor = 'bg-white' }) => {
  return (
    <div className={`service-card ${bgColor} group hover:scale-105 transition-all duration-300 ease-in-out`}>
      <div className="mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div>
        <h3 className="text-slate-800 text-base sm:text-lg font-medium font-sans mb-3 sm:mb-4 leading-normal">
          {title}
        </h3>
        <p className="text-gray-500 text-sm sm:text-base font-normal font-sans leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const News: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Website Designing",
      description: "Create stunning, responsive websites that captivate your audience and drive engagement",
      icon: (
        <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-10 sm:h-10">
          <path opacity="0.4" d="M31.6667 8.33337V31.6667C31.6667 35 28.3333 35 28.3333 35H11.6667C8.33333 35 8.33333 31.6667 8.33333 31.6667V8.33337C8.33333 5.00004 11.6667 5.00004 11.6667 5.00004H28.3333C31.6667 5.00004 31.6667 8.33337 31.6667 8.33337Z" fill="#593FFB" />
          <path d="M8.33333 13.3334H31.6667" stroke="#593FFB" strokeWidth="2" strokeLinecap="round" />
          <path d="M13.3333 25H26.6667" stroke="#593FFB" strokeWidth="2" strokeLinecap="round" />
          <path d="M13.3333 28.3334H23.3333" stroke="#593FFB" strokeWidth="2" strokeLinecap="round" />
          <circle cx="13.3333" cy="9.16671" r="1.66667" fill="#593FFB" />
          <circle cx="16.6667" cy="9.16671" r="1.66667" fill="#593FFB" />
          <circle cx="20" cy="9.16671" r="1.66667" fill="#593FFB" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Web Development",
      description: "Build powerful, scalable web applications with modern technologies and best practices",
      icon: (
        <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-10 sm:h-10">
          <path opacity="0.4" d="M31.6667 17.1333V29.05C31.6167 33.8 30.3167 35 25.3667 35H9.63342C4.60009 35 3.33337 33.75 3.33337 28.7833V17.1333C3.33337 12.6333 4.38337 11.1833 8.33337 10.95C8.73337 10.9333 9.16676 10.9166 9.63342 10.9166H25.3667C30.4 10.9166 31.6667 12.1666 31.6667 17.1333Z" fill="#80CC28" />
          <path d="M36.6667 11.2167V22.8667C36.6667 27.3667 35.6167 28.8167 31.6667 29.05V17.1333C31.6667 12.1667 30.4 10.9167 25.3667 10.9167H9.63342C9.16676 10.9167 8.73337 10.9333 8.33337 10.95C8.38337 6.2 9.68342 5 14.6334 5H30.3667C35.4 5 36.6667 6.25 36.6667 11.2167Z" fill="#80CC28" />
          <path d="M11.6 30.9333H8.73328C8.04994 30.9333 7.48328 30.3667 7.48328 29.6833C7.48328 29 8.04994 28.4333 8.73328 28.4333H11.6C12.2833 28.4333 12.85 29 12.85 29.6833C12.85 30.3667 12.3 30.9333 11.6 30.9333Z" fill="#80CC28" />
          <path d="M20.9167 30.9333H15.1833C14.5 30.9333 13.9333 30.3667 13.9333 29.6833C13.9333 29 14.5 28.4333 15.1833 28.4333H20.9167C21.6 28.4333 22.1667 29 22.1667 29.6833C22.1667 30.3667 21.6167 30.9333 20.9167 30.9333Z" fill="#80CC28" />
          <path d="M31.6667 19.7666H3.33337V22.2666H31.6667V19.7666Z" fill="#80CC28" />
        </svg>
      ),
      bgColor: 'bg-gray-50'
    },
    {
      id: 3,
      title: "AI Solutions",
      description: "Leverage cutting-edge AI technology to automate processes and enhance user experiences",
      icon: (
        <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-10 sm:h-10">
          <path opacity="0.4" d="M35.6166 18.9833V28.9666C35.6166 33.5666 31.8833 37.2999 27.2833 37.2999H12.7166C8.11663 37.2999 4.3833 33.5666 4.3833 28.9666V19.0999C5.64997 20.4666 7.44997 21.2499 9.39997 21.2499C11.5 21.2499 13.5166 20.1999 14.7833 18.5166C15.9166 20.1999 17.85 21.2499 20 21.2499C22.1333 21.2499 24.0333 20.2499 25.1833 18.5833C26.4666 20.2333 28.45 21.2499 30.5166 21.2499C32.5333 21.2499 34.3666 20.4333 35.6166 18.9833Z" fill="#593FFB" />
          <path d="M24.9834 2.08337H14.9834L13.75 14.35C13.65 15.4834 13.8167 16.55 14.2334 17.5167C15.2 19.7834 17.4667 21.25 20 21.25C22.5667 21.25 24.7834 19.8167 25.7834 17.5334C26.0834 16.8167 26.2667 15.9834 26.2834 15.1334V14.8167L24.9834 2.08337Z" fill="#593FFB" />
          <path opacity="0.6" d="M37.2667 13.7834L36.7834 9.16671C36.0834 4.13337 33.8001 2.08337 28.9167 2.08337H22.5167L23.7501 14.5834C23.7667 14.75 23.7834 14.9334 23.7834 15.25C23.8834 16.1167 24.1501 16.9167 24.5501 17.6334C25.7501 19.8334 28.0834 21.25 30.5167 21.25C32.7334 21.25 34.7334 20.2667 35.9834 18.5334C36.9834 17.2 37.4334 15.5167 37.2667 13.7834Z" fill="#593FFB" />
          <path opacity="0.6" d="M10.9834 2.08337C6.08336 2.08337 3.81669 4.13337 3.10003 9.21671L2.65003 13.8C2.48336 15.5834 2.96669 17.3167 4.01669 18.6667C5.28336 20.3167 7.23336 21.25 9.40003 21.25C11.8334 21.25 14.1667 19.8334 15.35 17.6667C15.7834 16.9167 16.0667 16.05 16.15 15.15L17.45 2.10004H10.9834V2.08337Z" fill="#593FFB" />
          <path d="M18.9166 27.7666C16.8 27.9833 15.2 29.7833 15.2 31.9166V37.3H24.7833V32.5C24.7999 29.0166 22.7499 27.3666 18.9166 27.7666Z" fill="#593FFB" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Mobile Applications",
      description: "Design and develop native and cross-platform mobile apps for iOS and Android",
      icon: (
        <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-10 sm:h-10">
          <path opacity="0.4" d="M25 3.33337H15C9.16667 3.33337 6.66667 5.83337 6.66667 11.6667V28.3334C6.66667 34.1667 9.16667 36.6667 15 36.6667H25C30.8333 36.6667 33.3333 34.1667 33.3333 28.3334V11.6667C33.3333 5.83337 30.8333 3.33337 25 3.33337Z" fill="#593FFB" />
          <path d="M20 30C21.3807 30 22.5 28.8807 22.5 27.5C22.5 26.1193 21.3807 25 20 25C18.6193 25 17.5 26.1193 17.5 27.5C17.5 28.8807 18.6193 30 20 30Z" fill="#593FFB" />
          <path d="M25 10H15C14.3083 10 13.75 9.44167 13.75 8.75C13.75 8.05833 14.3083 7.5 15 7.5H25C25.6917 7.5 26.25 8.05833 26.25 8.75C26.25 9.44167 25.6917 10 25 10Z" fill="#593FFB" />
        </svg>
      ),
      bgColor: 'bg-gray-50'
    },
    {
      id: 5,
      title: "Cloud Solutions",
      description: "Implement scalable cloud infrastructure and migration services for modern businesses",
      icon: (
        <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-10 sm:h-10">
          <path opacity="0.4" d="M31.6667 23.3334C34.0583 23.3334 36 25.275 36 27.6667C36 30.0584 34.0583 32 31.6667 32H10C6.31667 32 3.33333 29.0167 3.33333 25.3334C3.33333 21.65 6.31667 18.6667 10 18.6667C10.4167 18.6667 10.8167 18.725 11.2 18.8334C12.6833 14.85 16.5 12 21 12C26.5167 12 31 16.4834 31 22C31 22.45 30.95 22.8917 30.8667 23.3334H31.6667Z" fill="#593FFB" />
          <path d="M20 32V22" stroke="#593FFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M23.3333 25.3334L20 22L16.6667 25.3334" stroke="#593FFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Digital Marketing",
      description: "Boost your online presence with SEO, social media marketing, and digital advertising",
      icon: (
        <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-10 sm:h-10">
          <path opacity="0.4" d="M28.3333 15C31.0947 15 33.3333 17.2386 33.3333 20C33.3333 22.7614 31.0947 25 28.3333 25C25.5719 25 23.3333 22.7614 23.3333 20C23.3333 17.2386 25.5719 15 28.3333 15Z" fill="#593FFB" />
          <path d="M11.6667 15C14.428 15 16.6667 17.2386 16.6667 20C16.6667 22.7614 14.428 25 11.6667 25C8.90533 25 6.66667 22.7614 6.66667 20C6.66667 17.2386 8.90533 15 11.6667 15Z" fill="#593FFB" />
          <path d="M20 8.33337C22.7614 8.33337 25 10.572 25 13.3334C25 16.0948 22.7614 18.3334 20 18.3334C17.2386 18.3334 15 16.0948 15 13.3334C15 10.572 17.2386 8.33337 20 8.33337Z" fill="#593FFB" />
          <path d="M20 21.6667C22.7614 21.6667 25 23.9053 25 26.6667C25 29.428 22.7614 31.6667 20 31.6667C17.2386 31.6667 15 29.428 15 26.6667C15 23.9053 17.2386 21.6667 20 21.6667Z" fill="#593FFB" />
        </svg>
      ),
      bgColor: 'bg-gray-50'
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-responsive">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary-600 text-lg sm:text-xl font-medium mb-3 sm:mb-4 block">Our Services</span>
          <h2 className="text-section-title font-bold text-gray-900 mb-4 sm:mb-6">
            What We Offer for Your Business
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            We provide comprehensive software solutions to help your business thrive in the digital age
          </p>
        </div>

        {/* Services Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          breakpoints={{
            480: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="services-slider"
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                bgColor={service.bgColor}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default News;
