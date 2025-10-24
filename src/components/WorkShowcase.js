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
      {/* Desktop Mockup */}
      <div className="relative mb-8">
        {/* Monitor Screen */}
        <div className="bg-black rounded-lg p-2 shadow-xl">
          <div className={`${project.bgColor} rounded-md aspect-[16/10] relative overflow-hidden`}>
            {/* Browser Chrome */}
            <div className="absolute top-2 left-2 flex gap-1">
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            </div>

            {/* Website Content */}
            <div className="p-0 h-full relative overflow-hidden">
              <div className="w-full h-full relative">
                <img
                  src={getScreenshot()}
                  alt={`${project.title} Website`}
                  className="w-full h-full object-cover object-top"
                  style={{
                    minHeight: '200px',
                    maxHeight: '300px'
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="text-left">
        <h3 className="text-xl font-bold text-black mb-2">{project.title}</h3>
        <div className="flex gap-2">
          {project.categories.map((category, idx) => (
            <span key={idx} className="text-sm text-gray-500">
              {category}{idx < project.categories.length - 1 && <span className="ml-2">•</span>}
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
      description: "Premium Real Estate Solutions",
      bgColor: "bg-blue-50",
      accentColor: "bg-blue-600"
    },
    {
      id: 2,
      title: "Greenfuture Properties",
      categories: ["Sustainable Real Estate", "Green Properties"],
      url: "greenfuture-properties.com",
      description: "Sustainable Real Estate Platform",
      bgColor: "bg-green-50",
      accentColor: "bg-green-600"
    },
    {
      id: 3,
      title: "Optimus Luxe",
      categories: ["Luxury Real Estate", "Premium Properties"],
      url: "optimusluxe.com",
      description: "Luxury Living, Redefined",
      bgColor: "bg-amber-50",
      accentColor: "bg-amber-600"
    },
    {
      id: 4,
      title: "Hawk Dispatch",
      categories: ["Logistics", "Dispatch Services"],
      url: "hawkdispatchinc.com",
      description: "Dispatch Excellence for Industry Leaders",
      bgColor: "bg-blue-50",
      accentColor: "bg-blue-600"
    },
    {
      id: 5,
      title: "Optimus RAK",
      categories: ["Real Estate", "Ras Al Khaimah"],
      url: "optimusrak.com",
      description: "Your Trusted Real Estate Partner in Ras Al Khaimah",
      bgColor: "bg-red-50",
      accentColor: "bg-red-600"
    },
    {
      id: 6,
      title: "Vision Care",
      categories: ["Healthcare", "Vision Care"],
      url: "visioncare-clinic.com",
      description: "Comprehensive Eye Care Solutions",
      bgColor: "bg-teal-50",
      accentColor: "bg-teal-600"
    },
    {
      id: 7,
      title: "Black n White",
      categories: ["Fashion", "E-commerce"],
      url: "blackenwhiteofficial.com",
      description: "Sophisticated Fashion E-commerce Platform",
      bgColor: "bg-gray-50",
      accentColor: "bg-black"
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
