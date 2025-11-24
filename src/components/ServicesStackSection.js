import './ServicesStackSection.css';
import webDevImage from '../images/9e0e2a8be395cbebe80fe4296dcb4a0e.jpg';
import contentCreationImage from '../images/beef37d748f4afae2efaa1e75b41815e.jpg';
import socialMediaImage from '../images/2e84491cd2eafe758670cb655c6d3bbf.jpg';
import brandingImage from '../images/762c07a232f6e04cca83f525efcb87d6.jpg';

const ServicesStackSection = () => {
  const services = [
    {
      id: 1,
      title: 'Web design/development',
      icon: '●',
      tags: ['Website', 'Wireframe', 'Landing page', 'Dashboard', 'Product'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.',
      image: webDevImage
    },
    {
      id: 2,
      title: 'Content creation',
      icon: '●',
      tags: ['Photography', 'Videography', 'Editing', 'Animation'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.',
      image: contentCreationImage
    },
    {
      id: 3,
      title: 'Social media',
      icon: '●',
      tags: ['Posts', 'Stories', 'Reels', 'Ads', 'Templates'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.',
      image: socialMediaImage
    },
    {
      id: 4,
      title: 'Branding',
      icon: '●',
      tags: ['Logo', 'Packaging', 'Mockup', 'Deck', 'Visual Identity', 'Guidelines'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.',
      image: brandingImage
    }
  ];

  return (
    <section className="services-stack-section">
      <div className="services-stack-container">
        {/* Header */}
        <div className="services-stack-header">
          <h2 className="services-stack-title">Services</h2>
        </div>

        {/* Service Cards */}
        <div className="services-stack-cards">
          {services.map((service) => (
            <div key={service.id} className="service-stack-card">
              <div className="service-card-content">
                {/* Left Side */}
                <div className="service-card-left">
                  <div className="service-card-header">
                    <span className="service-icon">{service.icon}</span>
                    <h3 className="service-title">{service.title}</h3>
                  </div>
                  <div className="service-tags">
                    {service.tags.map((tag, idx) => (
                      <span key={idx} className="service-tag">{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Right Side */}
                <div className="service-card-right">
                  <div className="service-image-container">
                    {service.image ? (
                      <img src={service.image} alt={service.title} className="service-image" />
                    ) : (
                      <div className="service-image-placeholder"></div>
                    )}
                  </div>
                  <p className="service-description">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesStackSection;
