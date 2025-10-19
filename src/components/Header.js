import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import werzioLogo from '../images/werzio png 4@300x.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
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
                ? 'backdrop-blur-md bg-white/20 border border-white/30 shadow-lg p-2' 
                : 'bg-transparent'
            }`}>
              <img 
                src={werzioLogo} 
                alt="Werzio Digital" 
                className="h-10 w-25"
              />
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-black transition-colors">Services</a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors">Work</a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors">About</a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors">Contact</a>
          </nav>
          
          {/* Mobile menu button */}
          <button className="md:hidden p-2">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
