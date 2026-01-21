import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);

      // Detect dark background sections
      // Assuming WorkShowcase section starts around 1200px and has dark cards
      // You can adjust these values based on your actual section positions
      const workShowcaseStart = 1200;
      const workShowcaseEnd = 2400;

      setIsDarkBackground(scrollTop >= workShowcaseStart && scrollTop <= workShowcaseEnd);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-white font-bold text-xl tracking-wide">
              WERZIO
            </span>
          </div>

          {/* Navigation and CTA Button */}
          <div className="flex items-center gap-6">
            <nav className={`hidden md:flex items-center space-x-4 px-6 py-3 transition-all duration-300 ${isScrolled
              ? isDarkBackground
                ? 'backdrop-blur-md bg-black/10 border border-black/20 shadow-lg'
                : 'backdrop-blur-md bg-white/10 border border-white/20 shadow-lg'
              : 'bg-transparent'
              }`} style={{ borderRadius: '15px' }}>
              <button onClick={() => window.location.hash = '#home'} className={`px-4 py-2 rounded-full transition-all duration-300 ${isDarkBackground
                ? 'text-white hover:text-gray-200 hover:backdrop-blur-md hover:bg-black/20 hover:border hover:border-black/30 hover:shadow-md'
                : isScrolled
                  ? 'text-gray-700 hover:text-black hover:backdrop-blur-md hover:bg-white/20 hover:border hover:border-white/30 hover:shadow-md'
                  : 'text-gray-600 hover:text-black hover:backdrop-blur-md hover:bg-white/10 hover:border hover:border-white/20 hover:shadow-sm'
                }`}>Home</button>
              <button onClick={() => window.location.hash = '#about'} className={`px-4 py-2 rounded-full transition-all duration-300 ${isDarkBackground
                ? 'text-white hover:text-gray-200 hover:backdrop-blur-md hover:bg-black/20 hover:border hover:border-black/30 hover:shadow-md'
                : isScrolled
                  ? 'text-gray-700 hover:text-black hover:backdrop-blur-md hover:bg-white/20 hover:border hover:border-white/30 hover:shadow-md'
                  : 'text-gray-600 hover:text-black hover:backdrop-blur-md hover:bg-white/10 hover:border hover:border-white/20 hover:shadow-sm'
                }`}>About</button>
              <button onClick={() => window.location.hash = '#work'} className={`px-4 py-2 rounded-full transition-all duration-300 ${isDarkBackground
                ? 'text-white hover:text-gray-200 hover:backdrop-blur-md hover:bg-black/20 hover:border hover:border-black/30 hover:shadow-md'
                : isScrolled
                  ? 'text-gray-700 hover:text-black hover:backdrop-blur-md hover:bg-white/20 hover:border hover:border-white/30 hover:shadow-md'
                  : 'text-gray-600 hover:text-black hover:backdrop-blur-md hover:bg-white/10 hover:border hover:border-white/20 hover:shadow-sm'
                }`}>Portfolio</button>
              <button onClick={() => window.location.hash = '#services'} className={`px-4 py-2 rounded-full transition-all duration-300 ${isDarkBackground
                ? 'text-white hover:text-gray-200 hover:backdrop-blur-md hover:bg-black/20 hover:border hover:border-black/30 hover:shadow-md'
                : isScrolled
                  ? 'text-gray-700 hover:text-black hover:backdrop-blur-md hover:bg-white/20 hover:border hover:border-white/30 hover:shadow-md'
                  : 'text-gray-600 hover:text-black hover:backdrop-blur-md hover:bg-white/10 hover:border hover:border-white/20 hover:shadow-sm'
                }`}>Service</button>
            </nav>

            {/* Book a Call Button */}
            <a 
              href="https://werzio.youcanbook.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-3 bg-white/90 backdrop-blur-md px-4 py-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-105"
            >
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" fill="white"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-black font-semibold text-sm">Book a 30 mins call</div>
                <div className="flex items-center gap-1 text-xs text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Available now
                </div>
              </div>
            </a>
          </div>

          {/* Mobile menu button */}
          <button className={`md:hidden p-2 rounded-full transition-all duration-300 ${isDarkBackground
            ? 'text-white hover:text-gray-200 hover:backdrop-blur-md hover:bg-black/20 hover:border hover:border-black/30 hover:shadow-md'
            : isScrolled
              ? 'text-gray-700 hover:text-black hover:backdrop-blur-md hover:bg-white/20 hover:border hover:border-white/30 hover:shadow-md'
              : 'text-gray-600 hover:text-black hover:backdrop-blur-md hover:bg-white/10 hover:border hover:border-white/20 hover:shadow-sm'
            }`}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
