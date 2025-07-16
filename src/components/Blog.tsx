import React from 'react';
import { User } from 'lucide-react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'How To Own Web Design Agency For Free',
      author: 'Jessica Alford',
      date: '22',
      month: 'Oct',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      excerpt: 'Discover the essential steps to building a successful web design agency from scratch without initial investment.'
    },
    {
      id: 2,
      title: '5 Difficult Things About Web Design Agency',
      author: 'Jessica Alford',
      date: '20',
      month: 'Oct',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg',
      excerpt: 'Learn about the common challenges faced by web design agencies and how to overcome them effectively.'
    },
    {
      id: 3,
      title: 'Web Design Agency Is So Famous, But Why?',
      author: 'Jessica Alford',
      date: '18',
      month: 'Oct',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
      excerpt: 'Understanding the growing popularity of web design agencies in today\'s digital landscape.'
    }
  ];

  return (
    <section id="blog" className="section-padding bg-white relative overflow-hidden">
      {/* Background Pattern - Hidden on mobile */}
      <div className="absolute left-0 top-0 w-32 sm:w-48 md:w-64 h-full opacity-5 mobile-hidden">
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-1 h-full">
          {Array.from({ length: 200 }).map((_, i) => (
            <div key={i} className="w-1 h-2 bg-primary-600 transform rotate-45"></div>
          ))}
        </div>
      </div>

      <div className="container-responsive relative">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary-600 text-lg sm:text-xl font-medium mb-3 sm:mb-4 block">Our Blog</span>
          <h2 className="text-section-title font-bold text-gray-900">
            Latest News From Our Blog
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="projects-grid">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="blog-card"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="blog-card-image"
                />
                
                {/* Date Badge */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                  <div className="bg-primary-600 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-t-lg text-center">
                    <div className="text-xs sm:text-sm font-bold">{post.month}</div>
                  </div>
                  <div className="bg-white text-primary-900 px-2 py-1 sm:px-3 sm:py-2 rounded-b-lg text-center shadow-lg">
                    <div className="text-lg sm:text-xl font-bold">{post.date}</div>
                  </div>
                </div>
              </div>
              
              <div className="blog-card-content">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 hover:text-primary-600 transition-colors duration-200">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <User className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                    <span className="text-gray-600 text-sm sm:text-base">{post.author}</span>
                  </div>
                  <button className="text-primary-600 hover:text-primary-700 font-medium text-sm sm:text-base transition-colors duration-200">
                    Read More
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-8 sm:mt-12">
          <button className="bg-primary-600 text-white btn-responsive hover:bg-primary-700 transition-colors duration-300 transform hover:scale-105">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
