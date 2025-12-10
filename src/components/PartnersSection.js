import React from 'react';
import './PartnersSection.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import optimusLogo from '../images/optimus/optimus-logo-white.webp';
import greenfutureLogo from '../images/GF/GFP-VECTOR-ICON-1024x683.webp';
import hawkLogo from '../images/hawk/LOGO-SCHOLARSHIP-SEEKERS-HUB-2.webp';
import blacknwhiteLogo from '../images/black/logo_file_black_pngg_2.avif';
import optimusLuxeLogo from '../images/luxe/cropped-OptimusLuxe_Transparent-BG.webp';
import buildmodeLogo from '../images/buildmode/logo2.png';
import visionLogo from '../images/vision/logo2 (1).png';

const PartnersSection = () => {
  const sectionRef = useScrollAnimation();
  const partners = [
    { name: 'Optimus', logo: optimusLogo },
    { name: 'Optimus Luxe', logo: optimusLuxeLogo },
    { name: 'Green Future', logo: greenfutureLogo },
    { name: 'Hawk Dispatch', logo: hawkLogo },
    { name: 'Black N White', logo: blacknwhiteLogo },
    { name: 'Build Mode', logo: buildmodeLogo },
    { name: 'Vision Care', logo: visionLogo }
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
            {duplicatedPartners.map((partner, index) => {
              const isLargerLogo = ['Vision Care', 'Green Future', 'Hawk Dispatch'].includes(partner.name);
              const logoClasses = `logo-image ${partner.name === 'Optimus' ? 'logo-inverted' : ''} ${isLargerLogo ? 'logo-larger' : ''}`;
              
              return (
                <div key={index} className="partner-card">
                  <div className="partner-logo">
                    {partner.logo ? (
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className={logoClasses}
                      />
                    ) : (
                      <span className="logo-text">{partner.name}</span>
                    )}
                  </div>
                  <div className="partner-info">
                    <h3 className="partner-name">{partner.name}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
