import React, { useEffect, useRef, useState } from 'react';

// Import project images
import optimusScreenshot from '../images/optimus/Screenshot 2025-10-19 202742.png';
import greenfutureScreenshot from '../images/GF/Screenshot 2025-10-19 210004.png';
import luxeScreenshot from '../images/luxe/Screenshot 2025-10-19 213550.png';
import hawkScreenshot from '../images/hawk/Screenshot 2025-10-19 214555.png';
import rakScreenshot from '../images/rak/Screenshot 2025-10-19 221016.png';
import visionScreenshot from '../images/vision/Screenshot 2025-10-19 221920.png';
import blackScreenshot from '../images/black/Screenshot 2025-10-20 114845.png';

const StackingCardsSection = () => {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const workProjects = [
    {
      id: 1,
      title: "Black n White",
      tags: ["Fashion", "E-commerce", "UI/UX"],
      bgColor: "bg-gradient-to-br from-gray-900 to-black",
      textColor: "text-white",
      image: blackScreenshot,
      description: "Sophisticated fashion e-commerce platform delivering premium style with elegant simplicity",
      hash: "black-n-white-case-study"
    },
    {
      id: 2,
      title: "Vision Care",
      tags: ["Eyewear - Ecommerce", "Vision Care", "Medical"],
      bgColor: "bg-gradient-to-br from-teal-600 to-teal-800",
      textColor: "text-white",
      image: visionScreenshot,
      description: "Comprehensive eye care solutions with modern patient management system",
      hash: "vision-care-case-study"
    },
    {
      id: 3,
      title: "Optimus RAK",
      tags: ["Real Estate", "Property", "RAK"],
      bgColor: "bg-gradient-to-br from-red-600 to-red-800",
      textColor: "text-white",
      image: rakScreenshot,
      description: "Your trusted real estate partner in Ras Al Khaimah with premium property solutions",
      hash: "optimus-rak-case-study"
    },
    {
      id: 4,
      title: "Hawk Dispatch",
      tags: ["Logistics", "Dispatch", "Management"],
      bgColor: "bg-gradient-to-br from-blue-600 to-blue-800",
      textColor: "text-white",
      image: hawkScreenshot,
      description: "Dispatch excellence for industry leaders with advanced logistics management",
      hash: "hawk-dispatch-case-study"
    },
    {
      id: 5,
      title: "Optimus Luxe",
      tags: ["Luxury", "Real Estate", "Premium"],
      bgColor: "bg-gradient-to-br from-amber-600 to-amber-800",
      textColor: "text-white",
      image: luxeScreenshot,
      description: "Luxury living redefined with premium property showcase and management",
      hash: "optimus-luxe-case-study"
    },
    {
      id: 6,
      title: "Greenfuture Properties",
      tags: ["Sustainable", "Real Estate", "Eco-friendly"],
      bgColor: "bg-gradient-to-br from-green-600 to-green-800",
      textColor: "text-white",
      image: greenfutureScreenshot,
      description: "Sustainable real estate platform focusing on eco-friendly property solutions",
      hash: "greenfuture-case-study"
    },
    {
      id: 7,
      title: "Optimus Properties",
      tags: ["Real Estate", "Premium", "Management"],
      bgColor: "bg-gradient-to-br from-blue-700 to-blue-900",
      textColor: "text-white",
      image: optimusScreenshot,
      description: "Premium real estate solutions with comprehensive property management system",
      hash: "optimus-case-study"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const containerHeight = container.offsetHeight;
      
      // Calculate progress based on how much of the container has been scrolled through
      const viewportTop = -rect.top;
      const viewportBottom = viewportTop + windowHeight;
      
      // Start animation when container enters viewport
      if (viewportBottom > 0 && viewportTop < containerHeight) {
        const progress = Math.max(0, Math.min(1, viewportTop / (containerHeight - windowHeight)));
        setScrollProgress(progress);
      } else if (viewportTop <= 0) {
        setScrollProgress(0);
      } else {
        setScrollProgress(1);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative py-20 bg-black overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Work
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover our latest projects and creative solutions that drive results
          </p>
        </div>

        {/* Stacking Cards Container */}
        <div className="relative max-w-5xl mx-auto" style={{ height: `${workProjects.length * 80}vh` }}>
          {workProjects.map((project, index) => {
            // Calculate when this card should be active
            const cardProgress = Math.max(0, Math.min(1, scrollProgress * workProjects.length - index));
            
            // Calculate when the next card starts pushing this one up
            const nextCardProgress = Math.max(0, Math.min(1, scrollProgress * workProjects.length - (index + 1)));
            
            // Initial position and scale for stacking effect
            let translateY = 0;
            let scale = 1;
            let opacity = 1;
            
            if (cardProgress < 1) {
              // Card is coming into view
              translateY = (1 - cardProgress) * 100; // Start from below
              scale = 0.8 + (cardProgress * 0.2); // Scale from 80% to 100%
              opacity = Math.max(0.1, cardProgress);
            }
            
            if (nextCardProgress > 0) {
              // Next card is pushing this one up
              translateY = translateY - (nextCardProgress * 100); // Push up
              scale = scale * (1 - nextCardProgress * 0.1); // Slightly shrink
              opacity = opacity * (1 - nextCardProgress * 0.7); // Fade out
            }

            return (
              <div
                key={project.id}
                className="sticky top-16"
                style={{
                  transform: `translateY(${translateY}px) scale(${scale})`,
                  opacity: opacity,
                  zIndex: workProjects.length - index,
                  marginBottom: index === workProjects.length - 1 ? '0' : '20px',
                }}
              >
                <div 
                  className={`${project.bgColor} rounded-3xl overflow-hidden shadow-2xl cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-3xl`}
                  onClick={() => window.location.hash = project.hash}
                >
                  <div className="grid lg:grid-cols-2 gap-0 min-h-[500px]">
                    {/* Content Side */}
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="space-y-6">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-white/30"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <h3 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${project.textColor}`}>
                          {project.title}
                        </h3>
                        
                        <p className={`text-lg ${project.textColor} opacity-90 leading-relaxed`}>
                          {project.description}
                        </p>
                        
                        <div className="flex items-center group">
                          <span className="text-lg font-semibold mr-3">View Case Study</span>
                          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                            <svg 
                              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Image Side */}
                    <div className="relative overflow-hidden">
                      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                      <img 
                        src={project.image}
                        alt={`${project.title} Screenshot`}
                        className="w-full h-full object-cover object-top transform hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-black from-0% via-transparent via-30% to-transparent opacity-20"></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress Indicator */}
        <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
          <div className="flex flex-col space-y-2">
            {workProjects.map((_, index) => {
              const isActive = scrollProgress * workProjects.length > index && scrollProgress * workProjects.length < index + 1;
              const isPassed = scrollProgress * workProjects.length > index + 1;
              
              return (
                <div
                  key={index}
                  className={`w-2 h-8 rounded-full transition-all duration-300 ${
                    isPassed 
                      ? 'bg-white' 
                      : isActive 
                        ? 'bg-white/70' 
                        : 'bg-white/20'
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StackingCardsSection;
