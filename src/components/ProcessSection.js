import React, { useEffect, useRef, useState } from 'react';

const ProcessSection = () => {
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

  const processSteps = [
    {
      id: 1,
      number: "1",
      title: "Discover",
      description: "We uncover what drives your brand through purpose clarity audience insight and business focus."
    },
    {
      id: 2,
      number: "2",
      title: "Request",
      description: "We analyze your market understand your competitors and identify where you can stand out."
    },
    {
      id: 3,
      number: "3",
      title: "Create",
      description: "We design a distinct identity using voice visuals and story to build emotional connection."
    },
    {
      id: 4,
      number: "4",
      title: "Activate",
      description: "We launch your brand across all channels creating a consistent experience that grows with you."
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 relative w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-24 transition-all duration-1000 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-gray-500 text-sm italic mb-4">Our Process, Explained</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
            Here's how it works
          </h2>
        </div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <div
              key={step.id}
              className={`bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0 translate-x-0 rotate-0 scale-100' 
                  : 'opacity-0 translate-y-16 translate-x-8 rotate-12 scale-95'
              } ${
                step.id === 2 || step.id === 4 ? 'lg:-mt-12' : ''
              }`}
              style={{
                transitionDelay: `${200 + index * 200}ms`,
                transformOrigin: 'center bottom'
              }}
            >
              {/* Number */}
              <div className="mb-6">
                <span className="text-7xl font-black text-black">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-black">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
