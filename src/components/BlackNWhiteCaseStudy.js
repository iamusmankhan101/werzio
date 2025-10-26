import React from 'react';
import Header from './Header';
import Footer from './Footer';
import InfiniteImageMarquee from './InfiniteImageMarquee';

// Import all black folder images
import blackImg1 from '../images/black/Screenshot 2025-10-20 114845.png';
import blackImg2 from '../images/black/Screenshot 2025-10-20 114932.png';
import blackImg3 from '../images/black/Screenshot 2025-10-20 114955.png';
import blackImg4 from '../images/black/Screenshot 2025-10-20 115009.png';
import blackImg5 from '../images/black/Screenshot 2025-10-20 115025.png';
import blackImg6 from '../images/black/Screenshot 2025-10-20 115049.png';
import blackImg7 from '../images/black/Screenshot 2025-10-20 115109.png';

const BlackNWhiteCaseStudy = () => {
  const blackImages = [
    blackImg1, blackImg2, blackImg3, blackImg4, 
    blackImg5, blackImg6, blackImg7
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 sm:pt-32 bg-gradient-to-br from-gray-100 to-white">
        {/* Back Button */}
        <div className="absolute top-32 left-4 sm:left-8 z-20">
          <button 
            onClick={() => window.location.hash = ''}
            className="flex items-center gap-2 text-black hover:text-gray-700 transition-colors duration-300"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm font-medium">Back to Work</span>
          </button>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
          {/* Project Categories */}
          <div className="flex justify-center gap-2 mb-6">
            <span className="px-3 py-1 bg-white text-black text-sm rounded-full shadow-sm">Fashion</span>
            <span className="px-3 py-1 bg-white text-black text-sm rounded-full shadow-sm">E-commerce</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4 mb-8">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight text-black">
              Black n White
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 font-light">
              Sophisticated Fashion E-commerce Platform
            </p>
          </div>

          {/* Project URL */}
          <div className="mb-12">
            <a 
              href="https://www.blackenwhiteofficial.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-black hover:text-gray-700 transition-colors duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span className="text-lg">blackenwhiteofficial.com</span>
            </a>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <a 
              href="https://werzio.youcanbook.me/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300"
            >
              Book Discovery Call
            </a>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Project Overview</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Black n White Official represents the perfect fusion of minimalist design and powerful e-commerce functionality. 
                We created a sophisticated online fashion destination that embodies the brand's commitment to timeless elegance 
                and premium quality.
              </p>
              
              <div className="grid grid-cols-2 gap-8 text-sm">
                <div>
                  <h4 className="font-semibold text-black mb-2">Client</h4>
                  <p className="text-gray-600">Black n White Official</p>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Industry</h4>
                  <p className="text-gray-600">Fashion & Retail</p>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Platform</h4>
                  <p className="text-gray-600">E-commerce Website</p>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Year</h4>
                  <p className="text-gray-600">2024</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-black rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">B&W</span>
                </div>
                <h3 className="text-xl font-bold text-black">Black n White</h3>
                <p className="text-gray-600">Fashion E-commerce</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Key Features Delivered</h2>
            <p className="text-lg text-gray-600">Comprehensive solutions built for modern fashion retail</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-2">E-commerce Platform</h3>
              <p className="text-gray-600">Full-featured online store with secure payment processing and inventory management</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Mobile-First Design</h3>
              <p className="text-gray-600">Responsive design optimized for mobile shopping with intuitive touch interactions</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Brand Integration</h3>
              <p className="text-gray-600">Seamless brand experience with custom design elements and premium aesthetics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Project Gallery</h2>
            <p className="text-lg text-gray-600">Visual showcase of the complete platform experience</p>
          </div>
          
          <InfiniteImageMarquee images={blackImages} />
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-black mb-8">The Challenge</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Creating a fashion e-commerce platform that reflects the brand's sophisticated aesthetic while 
                providing an intuitive shopping experience for modern consumers.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Balancing minimalist design with functionality
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Creating premium brand perception online
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Optimizing for mobile commerce
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-black mb-8">Our Solution</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We developed a clean, sophisticated e-commerce platform that embodies the Black n White brand 
                philosophy through elegant design and seamless user experience.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Minimalist, high-impact visual design
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Intuitive product discovery and filtering
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Streamlined checkout and payment flow
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Exceptional Results</h2>
            <p className="text-lg text-gray-600">Measurable impact on brand presence and user engagement</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-black mb-2">+280%</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">User Engagement</div>
              <div className="text-gray-600">Increased time on site and interaction rates</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-black mb-2">+320%</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Mobile Conversions</div>
              <div className="text-gray-600">Improved mobile shopping experience</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-black mb-2">+145%</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Brand Recognition</div>
              <div className="text-gray-600">Enhanced digital brand presence</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's create something extraordinary together. Get in touch to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://werzio.youcanbook.me/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Project
            </a>
            <a 
              href="https://www.blackenwhiteofficial.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-colors"
            >
              View Live Site
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlackNWhiteCaseStudy;