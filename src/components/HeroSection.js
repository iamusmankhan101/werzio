import React from 'react';
import './HeroSection.css';
import heroImage from '../images/soul speaks 1st video thumbnail (1).png';
import werzioLogo from '../images/werzio png 4@300x.png';

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Background Image */}
      <div className="hero-background">
        <img src={heroImage} alt="Hero background" className="hero-bg-image" />
      </div>

      {/* Logo in top left */}
      <div className="hero-logo">
        <img src={werzioLogo} alt="Werzio Logo" className="hero-logo-image" />
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
          <div className="hero-cta">
            <a
              href="https://werzio.youcanbook.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              BOOK A CALL
              <div className="cta-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
