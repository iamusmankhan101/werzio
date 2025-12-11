import React from 'react';
import './HeroSection.css';
import heroVideo from '../images/hero-background-video.mp4';
import werzioLogo from '../images/werzio png 4@300x.png';

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Background Video */}
      <div className="hero-background">
        <video 
          src={heroVideo} 
          autoPlay 
          muted 
          loop 
          playsInline
          className="hero-bg-video"
        />
      </div>

      {/* Logo in top left */}
      <div className="hero-logo">
        <img src={werzioLogo} alt="Werzio Logo" className="hero-logo-image" />
      </div>

      {/* Book a Call Button - Top Right */}
      <div className="hero-book-button">
        <a 
          href="https://werzio.youcanbook.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-white/90 backdrop-blur-md px-4 py-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-105 border border-white/30"
        >
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" fill="white"/>
            </svg>
          </div>
          <div className="text-left">
            <div className="text-black font-semibold text-sm">Book a 30 mins call</div>
            <div className="flex items-center gap-1 text-xs text-gray-600">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Available now
            </div>
          </div>
        </a>
      </div>

      <div className="hero-content">
        <div className="hero-grid">
          {/* Left Content */}
          <div className="hero-text">
            {/* Main Heading */}
            <h1 className="hero-heading">
              CREATIVITY EXISTS OUTSIDE
              THE BOX
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle">
              CREATIVE SOLUTION FOR<br />
              BUSINESSES LOOKING TO<br />
              STAND OUT.
            </p>
          </div>

          {/* Right Content - CTA Button */}
          
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
