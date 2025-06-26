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
    <section id="blog" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute left-0 top-0 w-64 h-full opacity-5">
        <div className="grid grid-cols-8 gap-1 h-full">
          {Array.from({ length: 200 }).map((_, i) => (
            <div key={i} className="w-1 h-2 bg-primary-600 transform rotate-45"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary-600 text-xl font-medium mb-4 block">Our Blog</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Latest News From Our Blog
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover"
                />
                
                {/* Date Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-primary-600 text-white px-3 py-1 rounded-t-lg text-center">
                    <div className="text-sm font-bold">{post.month}</div>
                  </div>
                  <div className="bg-white text-primary-900 px-3 py-2 rounded-b-lg text-center shadow-lg">
                    <div className="text-xl font-bold">{post.date}</div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <User className="w-4 h-4 mr-2" />
                  <span>{post.author}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight hover:text-primary-600 transition-colors">
                  <a href="#" className="hover:underline">
                    {post.title}
                  </a>
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                
                <div className="w-6 h-0.5 bg-gray-900"></div>
              </div>
            </article>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-primary-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-700 transition-colors duration-300 transform hover:scale-105">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;