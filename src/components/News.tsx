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
    <div className={`${bgColor} rounded-2xl p-8 shadow-lg hover:shadow-xl h-72 flex flex-col justify-between group hover:scale-105 transition-all duration-300 ease-in-out`}>
      <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div>
        <h3 className="text-slate-800 text-lg font-medium font-sans mb-4 leading-normal">
          {title}
        </h3>
        <p className="text-gray-500 text-base font-normal font-sans leading-relaxed">
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
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      title: "Software development",
      description: "Bring to the table survival strategies to ensure proactive domination",
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      id: 5,
      title: "DevOps",
      description: "Grow the holistic world view of disruptive innovation workspace",
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.4" d="M36.6667 13.0167V25.2667C36.1834 25.0334 35.65 24.8667 35.05 24.7667L34.5334 24.6834L34.1 23.7834C33.1834 21.9167 31.6834 20.8334 30 20.8334C28.3167 20.8334 26.8167 21.9167 25.9001 23.7834L25.45 24.6834L24.95 24.7667C22.9667 25.1 21.5333 26.2 21.0167 27.7667C20.5167 29.35 21.0334 31.0834 22.45 32.5167L22.9667 33.0334L22.9167 33.2334C22.5834 34.7167 22.7167 35.85 23.0334 36.6667H13.0167C6.95004 36.6667 3.33337 33.05 3.33337 26.9834V13.0167C3.33337 6.95004 6.95004 3.33337 13.0167 3.33337H26.9834C33.05 3.33337 36.6667 6.95004 36.6667 13.0167Z" fill="#FB3F6C" />
          <path d="M31.8667 24.9L32.4 25.9834C32.6667 26.5167 33.35 27.0167 33.9167 27.1167L34.6333 27.2334C36.8167 27.6 37.3167 29.2 35.7667 30.7667L35.1 31.4334C34.65 31.8834 34.4167 32.75 34.55 33.3834L34.6333 33.7834C35.2333 36.4167 33.8333 37.4334 31.55 36.05L31.0667 35.75C30.4834 35.4 29.5166 35.4 28.9333 35.75L28.45 36.05C26.15 37.4334 24.7667 36.4167 25.3667 33.7834L25.45 33.3834C25.5833 32.7667 25.35 31.8834 24.9 31.4334L24.2334 30.7667C22.6834 29.1834 23.1833 27.6 25.3667 27.2334L26.0833 27.1167C26.6667 27.0167 27.3333 26.5167 27.6 25.9834L28.1333 24.9C29.1667 22.8167 30.8333 22.8167 31.8667 24.9Z" fill="#FB3F6C" />
          <path fillRule="evenodd" clipRule="evenodd" d="M26.8825 13.1954C27.4281 13.6183 27.5276 14.4035 27.1046 14.9491L23.2472 19.9253C22.2558 21.1792 20.4277 21.4079 19.1524 20.4224L19.1437 20.4157L16.0994 18.0201C15.9113 17.8773 15.649 17.9128 15.5062 18.0971C15.506 18.0973 15.5063 18.0969 15.5062 18.0971L11.5403 23.2461C11.119 23.793 10.3342 23.8949 9.78723 23.4736C9.2403 23.0523 9.13843 22.2675 9.55969 21.7205L13.5276 16.569C14.5174 15.288 16.3528 15.0565 17.631 16.0442L17.6397 16.0509L20.684 18.4465C20.874 18.5908 21.1418 18.5536 21.2836 18.3778L25.1288 13.4175C25.5517 12.8718 26.3369 12.7724 26.8825 13.1954Z" fill="#FB3F6C" />
        </svg>
      )
    }
  ];

  return (
    <section className="w-full py-16 px-4 bg-cyan-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Content Section */}
          <div className="flex-1 max-w-md">
            <span className="text-indigo-800 text-base font-normal mb-2 block">
              Services
            </span>
            <h2 className="text-slate-800 text-4xl font-bold font-sans leading-tight tracking-wide mb-6">
              Services Overview
            </h2>
            <p className="text-gray-500 text-xl font-normal font-sans leading-relaxed">
              We will bring the breadth of our experience and industry knowledge to help you succeed
            </p>
          </div>

          {/* Services Cards Slider */}
          <div className="flex-1 max-w-4xl">
            <div className="pb-12">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={24}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
