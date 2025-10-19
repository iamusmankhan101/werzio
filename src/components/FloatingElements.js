import React from 'react';
import { TrendingUp, BarChart3, PieChart } from 'lucide-react';

const FloatingElements = () => {
  return (
    <>
      {/* Status Badge */}
<div className="absolute top-24 sm:top-20 left-1/2 transform -translate-x-1/2 animate-fade-in z-20">
        <div className="status-badge text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-1">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"></div>
          Available to work
        </div>
      </div>

      {/* Analytics Card - Hidden on mobile, visible on larger screens */}
      <div className="hidden md:block absolute top-32 right-4 lg:right-20 animate-float">
        <div className="floating-card w-40 lg:w-48">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs lg:text-sm font-medium text-gray-600">Analytics</span>
            <BarChart3 className="w-3 h-3 lg:w-4 lg:h-4 text-gray-400" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs lg:text-sm">
              <span className="text-gray-500">Revenue</span>
              <span className="font-semibold">$24,500</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-1.5 lg:h-2">
              <div className="bg-blue-500 h-1.5 lg:h-2 rounded-full w-3/4"></div>
            </div>
            <div className="flex items-center gap-1 text-xs text-green-600">
              <TrendingUp className="w-2.5 h-2.5 lg:w-3 lg:h-3" />
              <span>+12% this month</span>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Text Pill - Responsive positioning and sizing */}
      <div className="absolute top-40 sm:top-48 md:top-56 left-4 sm:left-8 lg:left-20 right-4 sm:right-auto">
        <div className="bg-gray-800 text-white rounded-full flex items-center px-3 sm:px-4 py-2 sm:py-3 shadow-lg w-full sm:w-64 max-w-xs sm:max-w-none transform -rotate-2">
          {/* Icon */}
          <div className="flex-shrink-0 mr-2 sm:mr-3">
            <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gray-600 rounded flex items-center justify-center">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-sm opacity-80"></div>
            </div>
          </div>
          
          {/* Scrolling Text */}
          <div className="flex-1 overflow-hidden">
            <div className="animate-marquee whitespace-nowrap">
              <span className="inline-block mr-4 sm:mr-8 text-xs sm:text-sm font-medium">WEB DEVELOPMENT  •  DESIGN  •  SMM  •  MARKETING  •  BRANDING</span>
              <span className="inline-block mr-4 sm:mr-8 text-xs sm:text-sm font-medium">WEB DEVELOPMENT  •  DESIGN  •  SMM  •  MARKETING  •  BRANDING</span>
            </div>
          </div>
        </div>
      </div>

      {/* Analytics Icon - Floating analytics element */}
      <div className="absolute top-60 sm:top-72 md:top-80 right-4 sm:right-12 md:right-20 animate-float" style={{animationDelay: '1.5s'}}>
        <div className="bg-white rounded-2xl p-3 sm:p-4 shadow-lg border border-gray-100 hover:scale-110 transition-transform duration-300">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="bg-blue-500 rounded-full p-2 flex items-center justify-center">
              <PieChart className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div className="text-left">
              <div className="text-xs sm:text-sm font-medium text-gray-800">Analytics</div>
              <div className="text-xs text-gray-500">Live Data</div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default FloatingElements;
