import React from 'react';

const InfiniteImageMarquee = ({ 
  images, 
  speed = 'slow', 
  direction = 'left', 
  pauseOnHover = true,
  imageWidth = 320,
  imageHeight = 240,
  gap = 24,
  className = ''
}) => {
  const speedClass = {
    slow: 'animate-marquee-slow',
    medium: 'animate-marquee-medium', 
    fast: 'animate-marquee-fast'
  }[speed];

  const directionStyle = direction === 'right' ? { animationDirection: 'reverse' } : {};

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div 
        className={`flex ${speedClass} ${pauseOnHover ? 'hover:pause' : ''}`}
        style={{
          width: 'calc(200% + 24px)',
          ...directionStyle
        }}
      >
        {/* First set of images */}
        <div className="flex min-w-full" style={{ gap: `${gap}px` }}>
          {images.map((image, index) => (
            <div 
              key={`first-${index}`}
              className="flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{ width: `${imageWidth}px`, height: `${imageHeight}px` }}
            >
              <img 
                src={image.src}
                alt={image.alt || `Image ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {image.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm font-medium">{image.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Duplicate set for seamless loop */}
        <div className="flex min-w-full" style={{ gap: `${gap}px`, marginLeft: `${gap}px` }}>
          {images.map((image, index) => (
            <div 
              key={`second-${index}`}
              className="flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{ width: `${imageWidth}px`, height: `${imageHeight}px` }}
            >
              <img 
                src={image.src}
                alt={image.alt || `Image ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {image.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm font-medium">{image.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Gradient overlays for smooth fade effect */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white via-white/50 to-transparent pointer-events-none z-10"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white via-white/50 to-transparent pointer-events-none z-10"></div>
      
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes marquee-slow {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        
        @keyframes marquee-medium {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        
        @keyframes marquee-fast {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        
        .animate-marquee-slow {
          animation: marquee-slow 60s linear infinite;
        }
        
        .animate-marquee-medium {
          animation: marquee-medium 40s linear infinite;
        }
        
        .animate-marquee-fast {
          animation: marquee-fast 25s linear infinite;
        }
        
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
        
        /* Smooth performance optimizations */
        .animate-marquee-slow,
        .animate-marquee-medium,
        .animate-marquee-fast {
          will-change: transform;
          backface-visibility: hidden;
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

export default InfiniteImageMarquee;
