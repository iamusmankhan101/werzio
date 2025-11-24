import React from 'react';
import './PartnersSection.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const PartnersSection = () => {
  const sectionRef = useScrollAnimation();
  const partners = [
    { name: 'Loreipsum', description: 'Lorem ipsum dolor sit amet, consectetur.' },
    { name: 'Loreipsum', description: 'Lorem ipsum dolor sit amet, consectetur.' },
    { name: 'LOGOIPSUM', description: 'Lorem ipsum dolor sit amet, consectetur.' },
    { name: 'logoipsum', description: 'Lorem ipsum dolor sit amet, consectetur.' },
    { name: 'logoipsum', description: 'Lorem ipsum dolor sit amet, consectetur.' },
    { name: 'logoipsum', description: 'Lorem ipsum dolor sit amet, consectetur.' }
  ];

  // Duplicate partners for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="partners-section" ref={sectionRef}>
      <div className="partners-container">
        {/* Section Label */}
        <div className="partners-label">
          <span>→ PARTNERS</span>
        </div>

        {/* Heading */}
        <h2 className="partners-heading">
          We collaborate with forward-thinking
          brands to build lasting creative impact.
        </h2>

        {/* Partners Carousel */}
        <div className="partners-carousel">
          <div className="partners-track">
            {duplicatedPartners.map((partner, index) => (
              <div key={index} className="partner-card">
                <div className="partner-logo">
                  <span className="logo-text">{partner.name}</span>
                </div>
                <div className="partner-info">
                  <h3 className="partner-name">{partner.name}</h3>
                  <p className="partner-description">{partner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
