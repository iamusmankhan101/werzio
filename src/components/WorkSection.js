import { useEffect, useRef, useState } from 'react';
import './WorkSection.css';
import optimusImage from '../images/optimus.png';
import greenfutureImage from '../images/gf.png';
import luxeImage from '../images/optimus luxe.png';
import hawkImage from '../images/hawk.png';
import blackImage from '../images/black n white.png';

const WorkSection = () => {
  const [cardScrollProgress, setCardScrollProgress] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const newProgress = cardRefs.current.map((cardRef) => {
        if (!cardRef) return 0;

        const rect = cardRef.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate progress: 0 when card is below viewport, 1 when fully in view
        const cardTop = rect.top;
        const cardHeight = rect.height;

        // Start animation when card enters bottom of viewport
        const startPoint = windowHeight;
        const endPoint = windowHeight * 0.3; // Fully animated when card is 30% up the viewport

        if (cardTop > startPoint) {
          return 0; // Not yet visible
        } else if (cardTop < endPoint) {
          return 1; // Fully animated
        } else {
          // Calculate progress between 0 and 1
          return 1 - ((cardTop - endPoint) / (startPoint - endPoint));
        }
      });

      setCardScrollProgress(newProgress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Optimus Properties',
      image: optimusImage,
      bgColor: '#1a5f7a',
      link: '#optimus-case-study'
    },
    {
      id: 2,
      title: 'Greenfuture',
      image: greenfutureImage,
      bgColor: '#2d7a4f',
      link: '#greenfuture-case-study'
    },
    {
      id: 3,
      title: 'Optimus Luxe',
      image: luxeImage,
      bgColor: '#d97706',
      link: '#optimus-luxe-case-study'
    },
    {
      id: 4,
      title: 'Hawk Dispatch',
      image: hawkImage,
      bgColor: '#1e40af',
      link: '#hawk-dispatch-case-study'
    },
    {
      id: 5,
      title: 'Black n White',
      image: blackImage,
      bgColor: '#000000',
      link: '#black-n-white-case-study'
    }
  ];

  return (
    <section className="work-section">
      <div className="work-main-container">
        {/* Top Section - Title, Info, Copyright */}
        <div className="work-content-wrapper">
          {/* Left Side - Title */}
          <div className="work-left">
            <h2 className="work-heading">
              Selected<sup className="work-sup">®</sup><br />
              Work.
            </h2>
          </div>

          {/* Center - Projects Info */}
          <div className="work-center">
            <h3 className="work-label">PROJECTS</h3>
            <p className="work-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in elementum tristique.
              Duis cursus, mi quis viverra ornare.
            </p>
          </div>

          {/* Right Side - Copyright */}
          <div className="work-right">
            <div className="work-copyright">©25</div>
          </div>
        </div>

        {/* Bottom Section - Project Cards */}
        <div className="work-projects">
          {projects.map((project, index) => {
            const progress = cardScrollProgress[index] || 0;

            // Calculate transform values based on scroll progress
            const translateY = 80 * (1 - progress);
            const rotateX = 75 * (1 - progress);

            return (
              <a
                key={project.id}
                ref={(el) => (cardRefs.current[index] = el)}
                href={project.link}
                className="work-project-card"
                style={{
                  opacity: 1,
                  transform: `translateY(${translateY}px) perspective(1200px) rotateX(${rotateX}deg)`,
                  transition: 'none'
                }}
              >
                <div className="work-project-image">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="work-project-bg-image"
                  />
                  <div className="work-project-badge">
                    <span className="work-project-icon">✦</span>
                    <span className="work-project-title">{project.title}</span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
