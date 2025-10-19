import React, { useEffect, useRef, useState } from 'react';
import { Grid, Monitor, Search, Zap, Target, TrendingUp } from 'lucide-react';

const ServicesSection = () => {
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

  const getIcon = (iconName) => {
    const icons = {
      grid: Grid,
      monitor: Monitor,
      search: Search,
      zap: Zap,
      target: Target,
      'trending-up': TrendingUp
    };
    const IconComponent = icons[iconName];
    return IconComponent ? <IconComponent size={16} /> : null;
  };

  const services = [
    {
      id: 1,
      name: "Design systems",
      icon: "grid",
      color: "bg-orange-500",
      position: "top-20 sm:top-46 left-2 sm:left-16 md:left-24 lg:left-32"
    },
    {
      id: 2,
      name: "UX Design",
      icon: "monitor",
      color: "bg-gray-700",
      position: "bottom-32 sm:bottom-24 left-1 sm:left-8 md:left-16 lg:left-24"
    },
    {
      id: 3,
      name: "Research",
      icon: "search",
      color: "bg-blue-500",
      position: "bottom-16 sm:bottom-11 left-8 sm:left-4 md:left-8 lg:left-16"
    },
    {
      id: 4,
      name: "Animation",
      icon: "zap",
      color: "bg-green-500",
      position: "top-20 sm:top-46 right-2 sm:right-16 md:right-24 lg:right-32"
    },
    {
      id: 5,
      name: "Branding",
      icon: "target",
      color: "bg-pink-500",
      position: "bottom-32 sm:bottom-24 right-1 sm:right-8 md:right-16 lg:right-24"
    },
    {
      id: 6,
      name: "Strategy",
      icon: "trending-up",
      color: "bg-yellow-500",
      position: "bottom-8 sm:bottom-4 right-8 sm:right-4 md:right-8 lg:right-16"
    }
  ];

  return (
    <section ref={sectionRef} className="pt-20 sm:pt-40 pb-32 sm:pb-60 relative overflow-hidden w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Floating Service Badges - Hidden on mobile, visible on larger screens */}
        <div className="hidden sm:block absolute inset-0 pointer-events-none w-screen left-1/2 transform -translate-x-1/2">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`absolute ${service.position} transform transition-all duration-1000 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${200 + index * 150}ms`,
                animation: isVisible ? `float-${index + 1} 6s ease-in-out infinite` : 'none'
              }}
            >
              <div className="bg-white rounded-full flex items-center gap-2 sm:gap-3 shadow-lg hover:scale-110 transition-transform duration-300 px-2 py-2">
                <div className={`${service.color} rounded-full p-1.5 sm:p-2 flex items-center justify-center`}>
                  {getIcon(service.icon)}
                </div>
                <span className="font-medium text-xs sm:text-sm text-gray-800 pr-2 sm:pr-3 whitespace-nowrap">{service.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Service Tags - Visible only on mobile */}
        <div className="sm:hidden flex flex-wrap justify-center gap-2 mb-8">
          {services.map((service) => (
            <div key={`mobile-${service.id}`} className="bg-white rounded-full flex items-center gap-2 shadow-md px-3 py-2">
              <div className={`${service.color} rounded-full p-1.5 flex items-center justify-center`}>
                {getIcon(service.icon)}
              </div>
              <span className="font-medium text-xs text-gray-800">{service.name}</span>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="text-center relative z-20">
          {/* Hello Text */}
          <div className={`mb-6 sm:mb-8 transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4'
          }`}>
            <p className="text-gray-500 text-base sm:text-lg italic font-light">Hello!</p>
          </div>

          {/* Main Heading */}
          <div className={`max-w-4xl mx-auto px-4 transition-all duration-1200 delay-300 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6">
              <span className="text-black">We help brands grow with standout</span>
              <span className="hidden sm:inline"><br /></span>
              <span className="sm:hidden"> </span>
              <span className="text-black">design, clear branding, and content</span>
              <span className="hidden sm:inline"><br /></span>
              <span className="sm:hidden"> </span>
              <span className="text-gray-400">that drives results.</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Floating Animation Keyframes */}
      <style jsx>{`
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-2deg); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(1deg); }
        }
        @keyframes float-4 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(-1deg); }
        }
        @keyframes float-5 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-9px) rotate(3deg); }
        }
        @keyframes float-6 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-14px) rotate(-2deg); }
        }

        .text-black{
        font-weight: 500;
        font-size:px;
        }

        .text-gray-400{
        font-weight: 500;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
