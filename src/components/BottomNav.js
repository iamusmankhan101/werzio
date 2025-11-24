import React, { useState } from 'react';
import werzioLogo from '../images/werzio icon 4@300x.png';

const BottomNav = () => {
  const [activeMenu, setActiveMenu] = useState('');

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'Pricing', href: '#pricing' }
  ];

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
                onClick={() => setActiveMenu(item.label)}
                className={`text-sm font-medium transition-colors duration-200 ${activeMenu === item.label
                  ? 'text-black'
                  : 'text-gray-600 hover:text-black'
                  }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center">
            <a
              href="https://werzio.youcanbook.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-gray-800 transition-colors duration-300 flex items-center gap-2"
            >
              BOOK A CALL
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
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
                onClick={() => setActiveMenu(item.label)}
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
    </div>
  );
};

export default BottomNav;
