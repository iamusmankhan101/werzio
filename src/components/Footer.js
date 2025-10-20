import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

// Custom Behance Icon Component
const BehanceIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.672 1.45.672 2.38 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.76-.62.16-1.25.24-1.89.24H0V4.51h6.938v-.007zM3.495 8.717h2.704c.62 0 1.14-.077 1.56-.23.42-.15.63-.59.63-1.31 0-.5-.13-.84-.41-1.02-.28-.18-.68-.27-1.18-.27H3.495v2.83zm0 4.8h3.42c.67 0 1.15-.12 1.44-.35.29-.23.43-.65.43-1.26 0-.55-.17-.96-.51-1.23-.34-.27-.83-.4-1.47-.4H3.495v3.24zM17.78 8.71c.68 0 1.16.25 1.44.75.28.5.42 1.2.42 2.09v3.16c0 .52.11.85.34 1.01.23.16.56.23.98.23.42 0 .77-.07 1.07-.22.3-.15.54-.36.72-.64l1.83.87c-.62.93-1.32 1.58-2.1 1.95-.78.37-1.65.56-2.61.56-.97 0-1.8-.25-2.49-.76-.69-.51-1.03-1.37-1.03-2.58v-3.32c0-.89-.14-1.59-.42-2.09-.28-.5-.76-.75-1.44-.75-.68 0-1.16.25-1.44.75-.28.5-.42 1.2-.42 2.09v3.32c0 1.21-.34 2.07-1.03 2.58-.69.51-1.52.76-2.49.76-.96 0-1.83-.19-2.61-.56-.78-.37-1.48-1.02-2.1-1.95l1.83-.87c.18.28.42.49.72.64.3.15.65.22 1.07.22.42 0 .75-.07.98-.23.23-.16.34-.49.34-1.01V11.55c0-.89.14-1.59.42-2.09.28-.5.76-.75 1.44-.75z"/>
  </svg>
);

// Custom Dribbble Icon Component
const DribbbleIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm7.568 5.302c1.4 1.5 2.252 3.5 2.273 5.698-.653-.126-1.542-.24-2.653-.24-.2 0-.402.008-.606.02-.055-.126-.11-.252-.168-.378-.126-.274-.26-.547-.402-.814 1.43-.588 2.368-1.09 2.556-1.286zm-13.818 1.1c.126.274.252.555.378.835.882-.33 1.89-.588 2.982-.735.378-.042.756-.063 1.134-.063.378 0 .756.021 1.134.063-.126.274-.252.555-.378.835-.882.33-1.89.588-2.982.735-.378.042-.756.063-1.134.063-.378 0-.756-.021-1.134-.063zm7.568 5.698c-.653.126-1.542.24-2.653.24-.2 0-.402-.008-.606-.02.055.126.11.252.168.378.126.274.26.547.402.814-1.43.588-2.368 1.09-2.556 1.286-1.4-1.5-2.252-3.5-2.273-5.698zm6.25 0c.653-.126 1.542-.24 2.653-.24.2 0 .402.008.606.02-.055-.126-.11-.252-.168-.378-.126-.274-.26-.547-.402-.814 1.43-.588 2.368-1.09 2.556-1.286 1.4 1.5 2.252 3.5 2.273 5.698z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Available to work subtitle */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px bg-gray-600 w-16"></div>
            <span className="mx-4 text-gray-400 text-sm font-light italic">Available to work</span>
            <div className="h-px bg-gray-600 w-16"></div>
          </div>
        </div>

        {/* Main heading */}
        <div className="mb-8">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Let's{' '}
            <span className="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
        </div>

        {/* Description */}
        <div className="mb-12 max-w-md mx-auto">
          <p className="text-gray-300 text-lg leading-relaxed mb-2">
            Feel free to contact us if having any questions.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            We're available for new projects or just for chatting.
          </p>
        </div>

        {/* Book a Meeting Button */}
        <div className="mb-20 flex justify-center">
          <a 
            href="https://werzio.youcanbook.me/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-black px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-100 transition-colors duration-300 inline-flex items-center group no-underline w-auto"
          >
            <span className="w-8 h-8 bg-black rounded-full flex items-center justify-center mr-3">
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform duration-300" />
            </span>
            Book a Meeting
          </a>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright and links */}
            <div className="flex items-center space-x-6 mb-6 md:mb-0">
              <span className="text-gray-400 text-sm">© Werzio, 2025</span>
          
            </div>

            {/* Social icons */}
            <div className="flex items-center space-x-4">
              <a 
                href="mailto:hello@werzio.com" 
                className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-gray-400 hover:bg-gray-800 transition-all duration-300"
                title="Email us"
              >
                <Mail className="w-4 h-4 text-gray-400" />
              </a>
              <a 
                href="https://www.behance.net/werziodigital1" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-gray-400 hover:bg-gray-800 transition-all duration-300"
                title="Follow us on Behance"
              >
                <BehanceIcon className="w-4 h-4 text-gray-400" />
              </a>
              <a 
                href="https://dribbble.com/werziodigital" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-gray-400 hover:bg-gray-800 transition-all duration-300"
                title="Follow us on Dribbble"
              >
                <DribbbleIcon className="w-4 h-4 text-gray-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
