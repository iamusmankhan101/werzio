import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-500 via-pink-500 to-purple-600 opacity-60 blur-3xl animate-gradient-move"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-red-600 via-pink-600 to-transparent opacity-40 blur-3xl animate-gradient-move-reverse"></div>
      </div>
      
      {/* Add keyframes for gradient animation */}
      <style jsx>{`
        @keyframes gradient-move {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(10%, -10%) scale(1.1);
          }
          50% {
            transform: translate(-5%, 10%) scale(1.05);
          }
          75% {
            transform: translate(5%, 5%) scale(1.15);
          }
        }
        
        @keyframes gradient-move-reverse {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(-10%, 10%) scale(1.1);
          }
          50% {
            transform: translate(5%, -10%) scale(1.05);
          }
          75% {
            transform: translate(-5%, -5%) scale(1.15);
          }
        }
        
        .animate-gradient-move {
          animation: gradient-move 20s ease-in-out infinite;
        }
        
        .animate-gradient-move-reverse {
          animation: gradient-move-reverse 25s ease-in-out infinite;
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight mb-8">
              <span className="text-white">CREATIVITY</span>
              <br />
              <span className="text-white">EXISTS </span>
              <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">OUTSIDE</span>
              <br />
              <span className="text-white">THE BOX</span>
            </h1>

            {/* Subtitle */}
            <p className="text-white text-lg sm:text-xl md:text-2xl font-light mb-8 max-w-md uppercase tracking-wide">
              CREATIVE SOLUTION FOR<br />
              BUSINESSES LOOKING TO<br />
              STAND OUT.
            </p>
          </div>

          {/* Right Content - CTA Button */}
          <div className="flex justify-start lg:justify-end">
            <a
              href="https://werzio.youcanbook.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-3 shadow-xl"
            >
              BOOK A CALL
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
