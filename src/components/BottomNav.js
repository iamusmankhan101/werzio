import React, { useState } from 'react';
import werzioLogo from '../images/werzio icon 4@300x.png';
import ContactModal from './ContactModal';

const BottomNav = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleClick = (e, href, label) => {
    e.preventDefault();
    if (label === 'Contact') {
      setIsContactModalOpen(true);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50 w-3/5 mb-2.5" style={{
      borderRadius: '50px',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)'
    }}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={werzioLogo}
              alt="Werzio"
              className="w-auto object-contain"
              style={{ height: '68px', filter: 'brightness(0)' }}
            />
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  handleClick(e, item.href, item.label);
                  setActiveMenu(item.label);
                }}
                className={`text-sm font-medium transition-colors duration-200 ${activeMenu === item.label
                  ? 'text-black'
                  : 'text-gray-600 hover:text-black'
                  }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Book a Call Button */}
          <div className="flex items-center">
            <a 
              href="https://werzio.youcanbook.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/90 backdrop-blur-md px-4 py-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-105 border border-white/30"
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
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden border-t border-white/30">
        <div className="px-4 py-3 overflow-x-auto">
          <div className="flex space-x-6">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  handleClick(e, item.href, item.label);
                  setActiveMenu(item.label);
                }}
                className={`text-xs font-medium whitespace-nowrap transition-colors duration-200 ${activeMenu === item.label
                  ? 'text-black'
                  : 'text-gray-600'
                  }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
};

export default BottomNav;
