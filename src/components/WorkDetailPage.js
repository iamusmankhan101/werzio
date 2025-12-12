import React from 'react';
import './WorkDetailPage.css';

const WorkDetailPage = ({ projectData }) => {
  if (!projectData) {
    return <div>Project not found</div>;
  }

  const {
    title,
    year,
    client,
    services,
    role,
    description,
    images,
    nextProject
  } = projectData;

  return (
    <div className="work-detail-page">
      {/* Header */}
      <header className="work-header">
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
      <main className="work-main">
        <div className="content-grid">
          {/* Left Column - Project Info */}
          <div className="project-info">
            <h1 className="project-title">{title}</h1>
            
            <div className="project-details">
              <div className="detail-item">
                <span className="detail-label">YEAR</span>
                <span className="detail-value">{year}</span>
              </div>
              
              <div className="detail-item">
                <span className="detail-label">CLIENT</span>
                <span className="detail-value">{client}</span>
              </div>
              
              <div className="detail-item">
                <span className="detail-label">SERVICES</span>
                <span className="detail-value">{services}</span>
              </div>
              
            
            </div>

            <div className="project-description">
              {description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="project-images">
            {images && images.length > 0 ? (
              images.map((image, index) => (
                <div key={index} className={`image-container ${image.size || ''}`}>
                  {image.type === 'image' ? (
                    <img src={image.src} alt={image.alt} className="project-image" />
                  ) : (
                    <div className={`image-placeholder ${image.bgClass}`}>
                      {image.component && React.createElement(image.component)}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="no-images">
                <p>No images available for this project.</p>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Section */}
        {nextProject && (
          <div className="project-footer">
            <div className="footer-content">
              <h2 className="footer-title">{nextProject.title}</h2>
              <p className="footer-description">{nextProject.description}</p>
              <button 
                className="view-project-btn"
                onClick={() => window.location.hash = nextProject.link}
              >
                VIEW PROJECT
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default WorkDetailPage;