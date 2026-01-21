import React, { useEffect, useState } from 'react';
import './WorkDetailPage.css';

const WorkDetailPage = ({ projectData }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!projectData) {
    return (
      <div className="work-detail-page">
        <div className="project-not-found">
          <h1>Project not found</h1>
          <button onClick={() => window.location.hash = ''} className="back-home-btn">
            Return Home
          </button>
        </div>
      </div>
    );
  }

  const {
    title,
    year,
    client,
    services,
    role,
    description,
    images,
    nextProject,
    logo
  } = projectData;

  const handleBackClick = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.hash = '';
    }
  };

  return (
    <div className={`work-detail-page ${isLoaded ? 'loaded' : ''}`}>
      {/* Header */}
      <header className="work-header">
        <div className="header-content">
          <div className="header-left">
            <button className="back-button" onClick={handleBackClick}>
              <span className="back-arrow">←</span>
              <span className="back-text">BACK</span>
            </button>
          </div>
          <div className="header-center">
            <div className="project-breadcrumb">
              <span className="breadcrumb-home" onClick={() => window.location.hash = ''}>HOME</span>
              <span className="breadcrumb-separator">/</span>
              <span className="breadcrumb-current">WORK</span>
            </div>
          </div>
          <div className="header-right">
            <button className="menu-button" onClick={() => window.location.hash = ''}>
              MENU
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="work-main">
        {/* Project Title Section */}
        <div className="project-title-section">
          <div className="title-container">
            {logo && (
              <div className="project-logo">
                <img src={logo} alt={`${title} Logo`} className="logo-image" />
              </div>
            )}
            <h1 className="project-title">{title}</h1>
            <div className="title-subtitle">
              A deep dive into building a compelling brand experience
            </div>
          </div>
        </div>

        <div className="content-grid">
          {/* Left Column - Project Info */}
          <div className="project-info">
            <div className="info-header">
              <h3 className="info-title">Project Details</h3>
            </div>
            
            <div className="project-details">
              <div className="detail-item">
                <span className="detail-label">Year</span>
                <span className="detail-value">{year}</span>
              </div>
              
              <div className="detail-item">
                <span className="detail-label">Client</span>
                <span className="detail-value">{client}</span>
              </div>
              
              <div className="detail-item">
                <span className="detail-label">Services</span>
                <span className="detail-value">{services}</span>
              </div>

              {role && (
                <div className="detail-item">
                  <span className="detail-label">Role</span>
                  <span className="detail-value">{role}</span>
                </div>
              )}
            </div>

            <div className="project-description">
              <h4 className="description-title">About Project</h4>
              {description.map((paragraph, index) => (
                <p key={index} className="description-paragraph">{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="project-images">
            {images && images.length > 0 ? (
              images.map((image, index) => (
                <div key={index} className={`image-container ${image.size || ''} fade-in-up`} style={{ animationDelay: `${index * 0.1}s` }}>
                  {image.type === 'image' ? (
                    <div className="image-wrapper">
                      <img src={image.src} alt={image.alt} className="project-image" />
                      <div className="image-overlay">
                        <span className="image-caption">{image.alt}</span>
                      </div>
                    </div>
                  ) : (
                    <div className={`image-placeholder ${image.bgClass}`}>
                      {image.component && React.createElement(image.component)}
                      <div className="placeholder-overlay">
                        <span className="placeholder-label">Interactive Component</span>
                      </div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="no-images">
                <div className="no-images-content">
                  <h3>Visual Content Coming Soon</h3>
                  <p>We're preparing stunning visuals for this project.</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Next Project Section */}
        {nextProject && (
          <div className="project-footer">
            <div className="footer-overlay"></div>
            
            {/* Floating Images */}
            <div className="floating-images">
              {nextProject.floatingImages && nextProject.floatingImages.map((img, index) => (
                <div key={index} className={`floating-image floating-image-${index + 1}`}>
                  <img src={img.src} alt={img.alt} />
                </div>
              ))}
            </div>
            
            <div className="footer-content">
              <div className="footer-label">Next Project</div>
              <h2 className="footer-title">{nextProject.title}</h2>
              <p className="footer-description">{nextProject.description}</p>
              <button 
                className="view-project-btn"
                onClick={() => window.location.hash = nextProject.link}
              >
                <span>VIEW PROJECT</span>
                <span className="btn-arrow">→</span>
              </button>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="work-cta-section">
          <div className="cta-content">
            <h2 className="cta-title">Want to grab a virtual coffee and talk about your project?</h2>
            <button className="cta-button" onClick={() => window.location.hash = '#contact'}>
              Let's Talk
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WorkDetailPage;