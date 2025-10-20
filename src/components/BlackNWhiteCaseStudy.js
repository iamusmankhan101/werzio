import React from 'react';
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
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Black n White
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              A sophisticated fashion e-commerce platform delivering premium style with elegant simplicity
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white text-black px-4 py-2 rounded-full">E-commerce</span>
              <span className="bg-white text-black px-4 py-2 rounded-full">Fashion</span>
              <span className="bg-white text-black px-4 py-2 rounded-full">UI/UX Design</span>
              <span className="bg-white text-black px-4 py-2 rounded-full">Development</span>
            </div>
          </div>
        </div>
      </div>

      {/* Project Overview Card */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Project Overview
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Black n White Official represents the perfect fusion of minimalist design and powerful e-commerce functionality. 
                  We created a sophisticated online fashion destination that embodies the brand's commitment to timeless elegance 
                  and premium quality.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-black rounded-full mr-4"></div>
                    <span className="text-gray-700">Modern, responsive e-commerce platform</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-black rounded-full mr-4"></div>
                    <span className="text-gray-700">Seamless shopping experience</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-black rounded-full mr-4"></div>
                    <span className="text-gray-700">Premium brand positioning</span>
                  </div>
                </div>
              </div>
              <div className="bg-black rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Client:</span>
                    <span className="font-semibold">Black n White Official</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Industry:</span>
                    <span className="font-semibold">Fashion & Retail</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Platform:</span>
                    <span className="font-semibold">E-commerce Website</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Website:</span>
                    <a 
                      href="https://www.blackenwhiteofficial.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-semibold hover:text-gray-300 transition-colors"
                    >
                      blackenwhiteofficial.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Challenge & Solution */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">The Challenge</h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Creating a fashion e-commerce platform that reflects the brand's sophisticated aesthetic while 
                  providing an intuitive shopping experience for modern consumers.
                </p>
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Challenges:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Balancing minimalist design with functionality</li>
                    <li>• Creating premium brand perception online</li>
                    <li>• Optimizing for mobile commerce</li>
                    <li>• Streamlining the checkout process</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Solution</h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  We developed a clean, sophisticated e-commerce platform that embodies the Black n White brand 
                  philosophy through elegant design and seamless user experience.
                </p>
                <div className="bg-black text-white p-6 rounded-xl">
                  <h4 className="font-semibold mb-3">Solution Highlights:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Minimalist, high-impact visual design</li>
                    <li>• Intuitive product discovery and filtering</li>
                    <li>• Mobile-first responsive architecture</li>
                    <li>• Streamlined checkout and payment flow</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Marquee */}
      <div className="py-20">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Visual Showcase</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the elegant design and seamless user experience of the Black n White platform
          </p>
        </div>
        <InfiniteImageMarquee images={blackImages} />
      </div>

      {/* Results & Impact */}
      <div className="py-20 bg-gradient-to-br from-black to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Results & Impact</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The new platform elevated Black n White's digital presence and enhanced customer engagement
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">+</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Enhanced UX</h3>
              <p className="text-gray-300">Streamlined shopping experience with intuitive navigation</p>
            </div>
            <div className="text-center">
              <div className="bg-white text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">↗</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Brand Elevation</h3>
              <p className="text-gray-300">Premium digital presence reflecting brand sophistication</p>
            </div>
            <div className="text-center">
              <div className="bg-white text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">📱</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Mobile Ready</h3>
              <p className="text-gray-300">Optimized for seamless mobile commerce experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Technologies Used */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Technologies & Approach</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built with modern technologies to ensure performance, scalability, and user experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-black rounded-lg mx-auto mb-4"></div>
              <h4 className="font-semibold text-gray-900 mb-2">E-commerce Platform</h4>
              <p className="text-sm text-gray-600">Custom-built solution</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-black rounded-lg mx-auto mb-4"></div>
              <h4 className="font-semibold text-gray-900 mb-2">Responsive Design</h4>
              <p className="text-sm text-gray-600">Mobile-first approach</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-black rounded-lg mx-auto mb-4"></div>
              <h4 className="font-semibold text-gray-900 mb-2">Payment Integration</h4>
              <p className="text-sm text-gray-600">Secure checkout flow</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-black rounded-lg mx-auto mb-4"></div>
              <h4 className="font-semibold text-gray-900 mb-2">Performance</h4>
              <p className="text-sm text-gray-600">Optimized loading</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Brand?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's create something extraordinary together. Get in touch to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Start Your Project
            </button>
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
      </div>
    </div>
  );
};

export default BlackNWhiteCaseStudy;