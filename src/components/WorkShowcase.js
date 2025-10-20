import React, { useEffect, useRef, useState } from 'react';
import optimusScreenshot from '../images/optimus/Screenshot 2025-10-19 202742.png';
import greenfutureScreenshot from '../images/GF/Screenshot 2025-10-19 210004.png';
import luxeScreenshot from '../images/luxe/Screenshot 2025-10-19 213550.png';
import hawkScreenshot from '../images/hawk/Screenshot 2025-10-19 214555.png';
import rakScreenshot from '../images/rak/Screenshot 2025-10-19 221016.png';
import visionScreenshot from '../images/vision/Screenshot 2025-10-19 221920.png';
import blackScreenshot from '../images/black/Screenshot 2025-10-20 114845.png';

const WorkShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
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
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible 
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
            <div
              key={project.id}
              className={`group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-md cursor-pointer transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-12 scale-95'
              }`}
              style={{
                transitionDelay: `${500 + index * 200}ms`,
                transitionDuration: '800ms'
              }}
              onClick={() => {
                if (project.id === 1) {
                  // Navigate to Optimus Properties case study
                  window.location.hash = 'optimus-case-study';
                } else if (project.id === 2) {
                  // Navigate to Greenfuture Properties case study
                  window.location.hash = 'greenfuture-case-study';
                } else if (project.id === 3) {
                  // Navigate to Optimus Luxe case study
                  window.location.hash = 'optimus-luxe-case-study';
                } else if (project.id === 4) {
                  // Navigate to Hawk Dispatch case study
                  window.location.hash = 'hawk-dispatch-case-study';
                } else if (project.id === 5) {
                  // Navigate to Optimus RAK case study
                  window.location.hash = 'optimus-rak-case-study';
                } else if (project.id === 6) {
                  // Navigate to Vision Care case study
                  window.location.hash = 'vision-care-case-study';
                } else if (project.id === 7) {
                  // Navigate to Black n White case study
                  window.location.hash = 'black-n-white-case-study';
                } else {
                  // For other projects, show a coming soon message
                  alert(`Case study for ${project.title} coming soon!`);
                }
              }}
            >
              {/* Desktop Mockup */}
              <div className="relative mb-8">
                {/* Monitor Stand */}
                <div className="flex justify-center mb-4">
                  <div className="w-24 h-6 bg-gray-300 rounded-b-lg relative">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-400 rounded-b"></div>
                  </div>
                </div>
                
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
                      {project.id === 1 && (
                        <div className="w-full h-full relative">
                          <img 
                            src={optimusScreenshot}
                            alt="Optimus Properties Website"
                            className="w-full h-full object-cover object-top"
                            style={{
                              minHeight: '200px',
                              maxHeight: '300px'
                            }}
                          />
                          {/* Overlay for better text visibility if needed */}
                          <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                        </div>
                      )}
                      {project.id === 2 && (
                        <div className="w-full h-full relative">
                          <img 
                            src={greenfutureScreenshot}
                            alt="Greenfuture Properties Website"
                            className="w-full h-full object-cover object-top"
                            style={{
                              minHeight: '200px',
                              maxHeight: '300px'
                            }}
                          />
                          {/* Overlay for better text visibility if needed */}
                          <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                        </div>
                      )}
                      {project.id === 3 && (
                        <div className="w-full h-full relative">
                          <img 
                            src={luxeScreenshot}
                            alt="Optimus Luxe Website"
                            className="w-full h-full object-cover object-top"
                            style={{
                              minHeight: '200px',
                              maxHeight: '300px'
                            }}
                          />
                          {/* Overlay for better text visibility if needed */}
                          <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                        </div>
                      )}
                      {project.id === 4 && (
                        <div className="w-full h-full relative">
                          <img 
                            src={hawkScreenshot}
                            alt="Hawk Dispatch Website"
                            className="w-full h-full object-cover object-top"
                            style={{
                              minHeight: '200px',
                              maxHeight: '300px'
                            }}
                          />
                          {/* Overlay for better text visibility if needed */}
                          <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                        </div>
                      )}
                      {project.id === 5 && (
                        <div className="w-full h-full relative">
                          <img 
                            src={rakScreenshot}
                            alt="Optimus RAK Website"
                            className="w-full h-full object-cover object-top"
                            style={{
                              minHeight: '200px',
                              maxHeight: '300px'
                            }}
                          />
                          {/* Overlay for better text visibility if needed */}
                          <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                        </div>
                      )}
                      {project.id === 6 && (
                        <div className="w-full h-full relative">
                          <img 
                            src={visionScreenshot}
                            alt="Vision Care Website"
                            className="w-full h-full object-cover object-top"
                            style={{
                              minHeight: '200px',
                              maxHeight: '300px'
                            }}
                          />
                          {/* Overlay for better text visibility if needed */}
                          <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                        </div>
                      )}
                      {project.id === 7 && (
                        <div className="w-full h-full relative">
                          <img 
                            src={blackScreenshot}
                            alt="Black n White Website"
                            className="w-full h-full object-cover object-top"
                            style={{
                              minHeight: '200px',
                              maxHeight: '300px'
                            }}
                          />
                          {/* Overlay for better text visibility if needed */}
                          <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                        </div>
                      )}
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
          ))}
        </div>

      </div>
    </section>
  );
};

export default WorkShowcase;
