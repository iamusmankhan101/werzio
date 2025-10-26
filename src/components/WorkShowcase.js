import React, { useEffect, useRef, useState } from 'react';
import optimusScreenshot from '../images/optimus/Screenshot 2025-10-19 202742.png';
import greenfutureScreenshot from '../images/GF/Screenshot 2025-10-19 210004.png';
import luxeScreenshot from '../images/luxe/Screenshot 2025-10-19 213550.png';
import hawkScreenshot from '../images/hawk/Screenshot 2025-10-19 214555.png';
import rakScreenshot from '../images/rak/Screenshot 2025-10-19 221016.png';
import visionScreenshot from '../images/vision/Screenshot 2025-10-19 221920.png';
import blackScreenshot from '../images/black/Screenshot 2025-10-20 114845.png';

// Individual Project Card Component
const ProjectCard = ({ project, index, scrollProgress }) => {
  const [cardVisible, setCardVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const cardElement = cardRef.current;
    if (!cardElement) return;

    const cardObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCardVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '10% 0px -10% 0px'
      }
    );

    cardObserver.observe(cardElement);

    return () => {
      if (cardElement) {
        cardObserver.unobserve(cardElement);
      }
    };
  }, []);

  // Calculate when this card should start animating based on scroll progress
  const cardStartProgress = (index * 0.08) + 0.2; // Reduced spacing and increased start point
  const cardEndProgress = cardStartProgress + 0.3; // Longer animation duration

  // Only animate if card is visible AND section scroll progress allows it
  const rawProgress = cardVisible ?
    Math.max(0, Math.min(1, (scrollProgress - cardStartProgress) / (cardEndProgress - cardStartProgress))) : 0;

  // Apply smooth easing functions for natural animation
  const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);
  const easeOutBack = (t) => {
    const c1 = 1.70158;
    const c3 = c1 + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
  };

  // Use different easing for different properties
  const smoothProgress = easeOutQuart(rawProgress);
  const bounceProgress = easeOutBack(rawProgress);

  // Calculate transforms based on smooth progress - reduced values to keep cards in viewport
  const translateY = (1 - smoothProgress) * 80; // Reduced from 400 to 80
  const rotate = (1 - smoothProgress) * 8; // Reduced from 45 to 8 degrees
  const scale = 0.95 + (bounceProgress * 0.05); // Reduced scale range
  const opacity = Math.max(0, smoothProgress);

  const handleClick = () => {
    if (project.id === 1) {
      window.location.hash = 'optimus-case-study';
    } else if (project.id === 2) {
      window.location.hash = 'greenfuture-case-study';
    } else if (project.id === 3) {
      window.location.hash = 'optimus-luxe-case-study';
    } else if (project.id === 4) {
      window.location.hash = 'hawk-dispatch-case-study';
    } else if (project.id === 5) {
      window.location.hash = 'optimus-rak-case-study';
    } else if (project.id === 6) {
      window.location.hash = 'vision-care-case-study';
    } else if (project.id === 7) {
      window.location.hash = 'black-n-white-case-study';
    } else {
      alert(`Case study for ${project.title} coming soon!`);
    }
  };

  const getScreenshot = () => {
    switch (project.id) {
      case 1: return optimusScreenshot;
      case 2: return greenfutureScreenshot;
      case 3: return luxeScreenshot;
      case 4: return hawkScreenshot;
      case 5: return rakScreenshot;
      case 6: return visionScreenshot;
      case 7: return blackScreenshot;
      default: return null;
    }
  };

  return (
    <div
      ref={cardRef}
      className="group relative rounded-3xl p-8 cursor-pointer backdrop-blur-md bg-white/10 border border-white/20 shadow-lg hover:bg-white/20 hover:shadow-xl transition-all duration-300"
      style={{
        transform: `translateY(${translateY}px) rotate(${rotate}deg) scale(${scale})`,
        opacity: opacity,
        transition: 'none',
        willChange: 'transform, opacity',
      }}
      onClick={handleClick}
    >
      {/* 3D Laptop Mockup */}
      <div className="relative mb-8 bg-black rounded-2xl p-8 overflow-hidden">
        {/* Diagonal pattern background */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 2px,
              rgba(255,255,255,0.1) 2px,
              rgba(255,255,255,0.1) 4px
            )`
          }}></div>
        </div>
        
        {/* 3D Laptop */}
        <div className="relative z-10 mx-auto max-w-sm">
          <div className="transform mx-auto" style={{
            transform: 'perspective(1000px) rotateX(15deg) rotateY(-15deg)',
            transformStyle: 'preserve-3d'
          }}>
            {/* Laptop Screen */}
            <div className="bg-gray-800 rounded-t-lg p-2 shadow-2xl transform-gpu">
              <div className="bg-white rounded-md aspect-[16/10] relative overflow-hidden">
                <img
                  src={getScreenshot()}
                  alt={`${project.title} Website`}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            
            {/* Laptop Base */}
            <div className="bg-gray-700 rounded-b-lg h-4 shadow-lg transform translate-y-1"></div>
            
            {/* Laptop Shadow */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-3/4 h-8 bg-black opacity-20 rounded-full blur-lg"></div>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="text-left">
        <h3 className="text-xl font-bold text-black mb-2">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>
        
        {/* Service Tags */}
        <div className="flex gap-2 flex-wrap">
          {project.services.map((service, idx) => (
            <span key={idx} className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-xs font-medium uppercase tracking-wide">
              {service}
            </span>
          ))}
        </div>
      </div>

      {/* Hover Arrow */}
      <div className="absolute top-6 right-6 w-10 h-10 bg-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
      </div>
    </div>
  );
};

const WorkShowcase = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = section.offsetHeight;

      // Calculate scroll progress through the section
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;

      // Start animation when section is 10% away from viewport
      const triggerDistance = windowHeight * 0.1;

      if (sectionBottom > -triggerDistance && sectionTop < windowHeight + triggerDistance) {
        // Calculate progress with smaller trigger area
        const scrolled = Math.max(0, (windowHeight + triggerDistance) - sectionTop);
        const totalScrollDistance = sectionHeight + (windowHeight + triggerDistance * 2);
        const progress = Math.min(1, scrolled / totalScrollDistance);

        setScrollProgress(progress);

        // Show header when section is 10% visible
        if (progress > 0.1) {
          setHeaderVisible(true);
        }
      } else if (sectionTop >= windowHeight + triggerDistance) {
        setScrollProgress(0);
        setHeaderVisible(false);
      } else if (sectionBottom <= -triggerDistance) {
        setScrollProgress(1);
      }
    };

    // Use requestAnimationFrame for smoother animation
    let ticking = false;
    const smoothHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', smoothHandleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', smoothHandleScroll);
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "Optimus Properties",
      categories: ["Real Estate", "Property"],
      url: "optimus-properties.com",
      description: "Premium real estate solutions connecting buyers with their dream properties through innovative digital experiences.",
      bgColor: "bg-blue-50",
      accentColor: "bg-blue-600",
      services: ["RESEARCH", "WEB DESIGN", "DEVELOPMENT"]
    },
    {
      id: 2,
      title: "Greenfuture Properties",
      categories: ["Sustainable Real Estate", "Green Properties"],
      url: "greenfuture-properties.com",
      description: "Sustainable real estate platform promoting eco-friendly properties and green living solutions for the future.",
      bgColor: "bg-green-50",
      accentColor: "bg-green-600",
      services: ["RESEARCH", "UI/UX DESIGN", "DEVELOPMENT"]
    },
    {
      id: 3,
      title: "Optimus Luxe",
      categories: ["Luxury Real Estate", "Premium Properties"],
      url: "optimusluxe.com",
      description: "Luxury real estate platform showcasing premium properties with sophisticated design and exclusive experiences.",
      bgColor: "bg-amber-50",
      accentColor: "bg-amber-600",
      services: ["BRANDING", "WEB DESIGN", "DEVELOPMENT"]
    },
    {
      id: 4,
      title: "Hawk Dispatch",
      categories: ["Logistics", "Dispatch Services"],
      url: "hawkdispatchinc.com",
      description: "Professional dispatch services platform streamlining logistics operations for transportation industry leaders.",
      bgColor: "bg-blue-50",
      accentColor: "bg-blue-600",
      services: ["RESEARCH", "WEB DESIGN", "SYSTEM INTEGRATION"]
    },
    {
      id: 5,
      title: "Optimus RAK",
      categories: ["Real Estate", "Ras Al Khaimah"],
      url: "optimusrak.com",
      description: "Specialized real estate platform for Ras Al Khaimah market, connecting investors with prime property opportunities.",
      bgColor: "bg-red-50",
      accentColor: "bg-red-600",
      services: ["MARKET RESEARCH", "WEB DESIGN", "DEVELOPMENT"]
    },
    {
      id: 6,
      title: "Vision Care",
      categories: ["Healthcare", "Vision Care"],
      url: "visioncare-clinic.com",
      description: "Comprehensive eye care clinic platform providing advanced vision solutions and patient management systems.",
      bgColor: "bg-teal-50",
      accentColor: "bg-teal-600",
      services: ["RESEARCH", "UI/UX DESIGN", "DEVELOPMENT"]
    },
    {
      id: 7,
      title: "Black n White",
      categories: ["Fashion", "E-commerce"],
      url: "blackenwhiteofficial.com",
      description: "Sophisticated fashion e-commerce platform featuring curated collections with modern shopping experiences.",
      bgColor: "bg-gray-50",
      accentColor: "bg-black",
      services: ["BRANDING", "E-COMMERCE", "DEVELOPMENT"]
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-800 ease-out ${headerVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
          }`}>
          <p className="text-gray-500 text-sm italic mb-4">Our Projects</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
            Recent Case Studies
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              scrollProgress={scrollProgress}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default WorkShowcase;
