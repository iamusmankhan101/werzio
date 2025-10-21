import React, { useEffect, useRef, useState } from 'react';

const StackingCardsSection = () => {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const workProjects = [
    {
      id: 1,
      title: "Vitality Cards",
      tags: ["Purpose", "Branding", "Digital", "Packaging"],
      bgColor: "bg-gradient-to-br from-orange-300 to-orange-400",
      textColor: "text-white",
      image: "/api/placeholder/400/300",
      description: "A comprehensive branding project focused on health and wellness"
    },
    {
      id: 2,
      title: "Tavologo AG",
      tags: ["Purpose", "Branding", "Digital", "Illustration"],
      bgColor: "bg-gradient-to-br from-slate-700 to-slate-800",
      textColor: "text-white",
      image: "/api/placeholder/400/300",
      description: "Corporate identity design for a Swiss technology company"
    },
    {
      id: 3,
      title: "Digital Innovations",
      tags: ["Digital", "UI/UX", "Development", "Strategy"],
      bgColor: "bg-gradient-to-br from-blue-500 to-purple-600",
      textColor: "text-white",
      image: "/api/placeholder/400/300",
      description: "Modern digital solutions for forward-thinking businesses"
    },
    {
      id: 4,
      title: "Creative Studio",
      tags: ["Branding", "Creative", "Design", "Art Direction"],
      bgColor: "bg-gradient-to-br from-green-400 to-teal-500",
      textColor: "text-white",
      image: "/api/placeholder/400/300",
      description: "Artistic approach to brand storytelling and visual identity"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress when container is in view
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const containerHeight = container.offsetHeight;
        const scrolled = windowHeight - rect.top;
        const progress = Math.max(0, Math.min(1, scrolled / (containerHeight + windowHeight)));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
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
        <div className="relative max-w-4xl mx-auto">
          {workProjects.map((project, index) => {
            const cardProgress = Math.max(0, Math.min(1, (scrollProgress * workProjects.length) - index));
            const scale = 0.9 + (cardProgress * 0.1);
            const translateY = (1 - cardProgress) * 100;
            const opacity = Math.max(0.3, cardProgress);
            const rotate = (1 - cardProgress) * 2;

            return (
              <div
                key={project.id}
                className="sticky top-20 mb-8"
                style={{
                  transform: `
                    translateY(${translateY}px) 
                    scale(${scale}) 
                    rotate(${rotate}deg)
                  `,
                  opacity: opacity,
                  zIndex: workProjects.length - index,
                }}
              >
                <div className={`${project.bgColor} rounded-3xl p-8 md:p-12 shadow-2xl transition-all duration-300 hover:shadow-3xl`}>
                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    {/* Content Side */}
                    <div className="flex-1 space-y-6">
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
                      
                      <h3 className={`text-4xl md:text-5xl font-bold ${project.textColor}`}>
                        {project.title}
                      </h3>
                      
                      <p className={`text-lg ${project.textColor} opacity-90 leading-relaxed`}>
                        {project.description}
                      </p>
                      
                      <button className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105">
                        View Project
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>

                    {/* Visual Side */}
                    <div className="flex-1 relative">
                      <div className="relative w-full h-64 md:h-80 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden">
                        {/* Placeholder for project visual */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                            <svg className="w-16 h-16 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                          </div>
                        </div>
                        
                        {/* Decorative elements */}
                        <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full"></div>
                        <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-lg"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-white/20 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress Indicator */}
        <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
          <div className="w-1 h-32 bg-white/20 rounded-full overflow-hidden">
            <div 
              className="w-full bg-white rounded-full transition-all duration-300"
              style={{ height: `${scrollProgress * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StackingCardsSection;
