import React from 'react';
import './TrackerCaseStudy.css';

const TrackerCaseStudy = () => {
  return (
    <div className="tracker-case-study">
      {/* Header */}
      <header className="tracker-header">
        <div className="header-content">
          <div className="header-left">
            <button className="back-button" onClick={() => window.history.back()}>
              ← BACK
            </button>
          </div>
          <div className="header-right">
            <button className="menu-button">MENU</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="tracker-main">
        <div className="content-grid">
          {/* Left Column - Project Info */}
          <div className="project-info">
            <h1 className="project-title">TRACKER</h1>
            
            <div className="project-details">
              <div className="detail-item">
                <span className="detail-label">YEAR</span>
                <span className="detail-value">2024</span>
              </div>
              
              <div className="detail-item">
                <span className="detail-label">CLIENT</span>
                <span className="detail-value">Fitness Solutions</span>
              </div>
              
              <div className="detail-item">
                <span className="detail-label">SERVICES</span>
                <span className="detail-value">Product Design, Branding, UI/UX</span>
              </div>
              
              <div className="detail-item">
                <span className="detail-label">ROLE</span>
                <span className="detail-value">Lead Designer</span>
              </div>
            </div>

            <div className="project-description">
              <p>
                A comprehensive fitness tracking solution that combines wearable technology 
                with intuitive design. The project focused on creating a seamless user 
                experience across multiple touchpoints.
              </p>
              
              <p>
                Our approach emphasized minimalist aesthetics while maintaining 
                functionality, resulting in a product that appeals to both fitness 
                enthusiasts and casual users.
              </p>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="project-images">
            {/* Main Hero Image */}
            <div className="image-container hero-image">
              <div className="image-placeholder blue-bg">
                <div className="tracker-device">
                  <div className="device-band"></div>
                  <div className="device-screen"></div>
                </div>
              </div>
            </div>

            {/* Secondary Images */}
            <div className="image-container">
              <div className="image-placeholder gray-bg">
                <div className="vr-headset">
                  <div className="headset-body"></div>
                  <div className="headset-strap"></div>
                </div>
              </div>
            </div>

            <div className="image-container">
              <div className="image-placeholder light-bg">
                <div className="camera-device">
                  <div className="camera-body"></div>
                  <div className="camera-lens"></div>
                </div>
              </div>
            </div>

            <div className="image-container">
              <div className="image-placeholder white-bg">
                <div className="product-collection">
                  <div className="collection-items">
                    <div className="item item-1"></div>
                    <div className="item item-2"></div>
                    <div className="item item-3"></div>
                    <div className="item item-4"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="image-container">
              <div className="image-placeholder mint-bg">
                <div className="spatial-design">
                  <div className="spatial-elements">
                    <div className="element element-1"></div>
                    <div className="element element-2"></div>
                    <div className="element element-3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="project-footer">
          <div className="footer-content">
            <h2 className="footer-title">SPATIAL</h2>
            <p className="footer-description">
              Explore spatial design solutions that bridge physical and digital experiences.
            </p>
            <button className="view-project-btn">VIEW PROJECT</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TrackerCaseStudy;