import React from 'react';
import './HeroSection.css';
import heroVideo from '../images/7234993-uhd_3840_2160_30fps.mp4';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-8 text-white" style={{ letterSpacing: '-0.02em' }}>
              CREATIVITY<br />
              EXISTS OUTSIDE<br />
              THE BOX
            </h1>

            {/* Subtitle */}
            <p className="text-white text-lg sm:text-xl md:text-2xl font-light mb-8 max-w-md uppercase" style={{ letterSpacing: '0.05em' }}>
              CREATIVE SOLUTION FOR<br />
              BUSINESSES LOOKING TO<br />
              STAND OUT.
            </p>
          </div>

          {/* Right Content - CTA Button */}
          <div className="flex justify-start lg:justify-end">
            <a
              href="https://werzio.youcanbook.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-3 shadow-xl"
            >
              BOOK A CALL
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
