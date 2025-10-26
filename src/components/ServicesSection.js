import React, { useEffect, useRef, useState } from 'react';

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
      {
        threshold: 0.3,
        rootMargin: '0px 0px -10% 0px'
      }
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

  const services = [
    "PHOTOGRAPHY & VIDEOGRAPHY",
    "DIGITAL MANIPULATION",
    "VISUAL EFFECT",
    "STORYBOARD",
    "3D MODELLING",
    "MOTION GRAPHIC",
    "WEB DESIGN",
    "SEO",
    "UI/UX DESIGN"
  ];

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen bg-white text-black py-20 px-4 sm:px-6 lg:px-8 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Title */}
          <div className={`transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black leading-none">
              OUR<br />
              SERVICES
            </h2>
          </div>

          {/* Right Side - Content */}
          <div className={`transition-all duration-1000 ease-out delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            {/* Description Card */}
            <div className="bg-gray-100/50 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-gray-200/30">
              <p className="text-gray-600 text-lg leading-relaxed">
                We craft digital experiences that captivate and convert. From stunning visuals to 
                seamless user interfaces, our comprehensive services bring your vision to life with 
                precision and creativity. Every project is a masterpiece in the making.
              </p>
            </div>

            {/* Services Tags */}
            <div className="flex flex-wrap gap-3">
              {services.map((service, index) => (
                <div
                  key={service}
                  className={`bg-black text-white px-6 py-3 rounded-full text-sm font-semibold 
                    transition-all duration-500 ease-out transform hover:scale-105 hover:bg-gray-800 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4'
                  }`}
                  style={{
                    transitionDelay: `${400 + (index * 100)}ms`
                  }}
                >
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;