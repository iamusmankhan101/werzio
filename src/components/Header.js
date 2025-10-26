import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import werzioLogo from '../images/werzio png 4@300x.png';

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex items-center">
            <div className={`rounded-xl transition-all duration-300 ${
              isScrolled 
                ? isDarkBackground
                  ? 'backdrop-blur-sm bg-black/30 border border-black/40 shadow-md p-2' 
                  : 'backdrop-blur-sm bg-white/30 border border-white/40 shadow-md p-2'
                : 'bg-transparent'
            }`}>
              <img 
                src={werzioLogo} 
                alt="Werzio Digital" 
                className={`h-10 w-25 transition-all duration-300 ${
                  isDarkBackground ? 'brightness-0 invert' : ''
                }`}
              />
            </div>
          </div>
          
          {/* Navigation */}
          <nav className={`hidden md:flex items-center space-x-4 px-6 py-3 rounded-full transition-all duration-300 ${
            isScrolled 
              ? isDarkBackground 
                ? 'backdrop-blur-md bg-black/10 border border-black/20 shadow-lg' 
                : 'backdrop-blur-md bg-white/10 border border-white/20 shadow-lg'
              : 'bg-transparent'
          }`}>
            <a href="#" className={`px-4 py-2 rounded-full transition-all duration-300 ${
              isDarkBackground
                ? 'text-white hover:text-gray-200 hover:backdrop-blur-md hover:bg-black/20 hover:border hover:border-black/30 hover:shadow-md'
                : isScrolled 
                  ? 'text-gray-700 hover:text-black hover:backdrop-blur-md hover:bg-white/20 hover:border hover:border-white/30 hover:shadow-md' 
                  : 'text-gray-600 hover:text-black hover:backdrop-blur-md hover:bg-white/10 hover:border hover:border-white/20 hover:shadow-sm'
            }`}>Services</a>
            <a href="#" className={`px-4 py-2 rounded-full transition-all duration-300 ${
              isDarkBackground
                ? 'text-white hover:text-gray-200 hover:backdrop-blur-md hover:bg-black/20 hover:border hover:border-black/30 hover:shadow-md'
                : isScrolled 
                  ? 'text-gray-700 hover:text-black hover:backdrop-blur-md hover:bg-white/20 hover:border hover:border-white/30 hover:shadow-md' 
                  : 'text-gray-600 hover:text-black hover:backdrop-blur-md hover:bg-white/10 hover:border hover:border-white/20 hover:shadow-sm'
            }`}>Work</a>
            <a href="#" className={`px-4 py-2 rounded-full transition-all duration-300 ${
              isDarkBackground
                ? 'text-white hover:text-gray-200 hover:backdrop-blur-md hover:bg-black/20 hover:border hover:border-black/30 hover:shadow-md'
                : isScrolled 
                  ? 'text-gray-700 hover:text-black hover:backdrop-blur-md hover:bg-white/20 hover:border hover:border-white/30 hover:shadow-md' 
                  : 'text-gray-600 hover:text-black hover:backdrop-blur-md hover:bg-white/10 hover:border hover:border-white/20 hover:shadow-sm'
            }`}>About</a>
            <a href="#" className={`px-4 py-2 rounded-full transition-all duration-300 ${
              isDarkBackground
                ? 'text-white hover:text-gray-200 hover:backdrop-blur-md hover:bg-black/20 hover:border hover:border-black/30 hover:shadow-md'
                : isScrolled 
                  ? 'text-gray-700 hover:text-black hover:backdrop-blur-md hover:bg-white/20 hover:border hover:border-white/30 hover:shadow-md' 
                  : 'text-gray-600 hover:text-black hover:backdrop-blur-md hover:bg-white/10 hover:border hover:border-white/20 hover:shadow-sm'
            }`}>Contact</a>
          </nav>
          
          {/* Mobile menu button */}
          <button className={`md:hidden p-2 rounded-full transition-all duration-300 ${
            isDarkBackground
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
