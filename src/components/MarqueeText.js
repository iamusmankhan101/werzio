import React from 'react';

const MarqueeText = () => {
  const services = [
    'Web Development',
    'Graphic Design', 
    'SMM',
    'Performance Marketing',
    'Brand Identity',
    'Video Editing'
  ];

  return (
    <div className="relative overflow-hidden bg-black text-white py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* First set of services */}
        {services.map((service, index) => (
          <span key={`first-${index}`} className="text-2xl font-bold mx-8 flex items-center">
            {service}
            <span className="mx-4 text-gray-400">•</span>
          </span>
        ))}
        
        {/* Duplicate set for seamless loop */}
        {services.map((service, index) => (
          <span key={`second-${index}`} className="text-2xl font-bold mx-8 flex items-center">
            {service}
            <span className="mx-4 text-gray-400">•</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeText;
