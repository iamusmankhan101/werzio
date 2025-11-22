import React, { useState } from 'react';
import werzioLogo from '../images/werzio png 4@300x.png';

const BottomNav = () => {
  const [activeMenu, setActiveMenu] = useState('');

  const menuItems = [
    { label: 'WHY?', href: '#why' },
    { label: 'PROCESS', href: '#process' },
    { label: 'TOOLS', href: '#tools' },
    { label: 'PORTFOLIO', href: '#portfolio' },
    { label: 'TESTIMONIALS', href: '#testimonials' },
    { label: 'PRICING', href: '#pricing' },
    { label: 'FAQs', href: '#faqs' }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-md">
              <img 
                src={werzioLogo} 
                alt="Werzio" 
                className="w-8 h-8 object-contain"
              />
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActiveMenu(item.label)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeMenu === item.label
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
      <div className="md:hidden border-t border-gray-200 bg-white">
        <div className="px-4 py-3 overflow-x-auto">
          <div className="flex space-x-6">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActiveMenu(item.label)}
                className={`text-xs font-medium whitespace-nowrap transition-colors duration-200 ${
                  activeMenu === item.label
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
