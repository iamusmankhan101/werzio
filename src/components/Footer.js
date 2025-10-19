import React from 'react';
import { ArrowRight, Mail, Globe, Linkedin, Instagram } from 'lucide-react';

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
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-300">
                Legal Notice
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-300">
                Privacy Policy
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-gray-400 hover:bg-gray-800 transition-all duration-300"
              >
                <Mail className="w-4 h-4 text-gray-400" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-gray-400 hover:bg-gray-800 transition-all duration-300"
              >
                <Globe className="w-4 h-4 text-gray-400" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-gray-400 hover:bg-gray-800 transition-all duration-300"
              >
                <Linkedin className="w-4 h-4 text-gray-400" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-gray-400 hover:bg-gray-800 transition-all duration-300"
              >
                <Instagram className="w-4 h-4 text-gray-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
