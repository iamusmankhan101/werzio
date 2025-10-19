import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import FloatingElements from './FloatingElements';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 sm:pt-32">
      <FloatingElements />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <div className="space-y-2 sm:space-y-4 mb-6 sm:mb-8">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-tight sm:leading-none animate-fade-in">
            <span className="text-black">Brands</span>
            <span className="text-gray-400 ml-2 sm:ml-4">Grow</span>
          </h1>

          <div className="flex items-center justify-center gap-2 sm:gap-4 flex-wrap animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-gray-400">
              Fast
            </span>
            <div className="bg-gray-800 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium animate-float" style={{ animationDelay: '0.6s' }}>
              Werzio Digital
            </div>
            <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-black">
              With us
            </span>
          </div>
        </div>

        {/* Subtitle */}
        <div className="max-w-2xl mx-auto mb-8 sm:mb-12 px-4 animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            We don't just make brands pretty — we craft
            <span className="hidden sm:inline"><br /></span>
            <span className="sm:hidden"> </span>
            smart design that fuels real business growth.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center px-4 animate-slide-up" style={{ animationDelay: '1.2s' }}>
          <a
            href="https://werzio.youcanbook.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 no-underline"
          >
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
            Book a Meeting
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
