import React from 'react';
import { ArrowLeft, ExternalLink, Calendar, Users, Clock, Target, Home, MapPin, TrendingUp } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import InfiniteImageMarquee from './InfiniteImageMarquee';
import rakScreenshot1 from '../images/rak/Screenshot 2025-10-19 221016.png';
import rakScreenshot2 from '../images/rak/Screenshot 2025-10-19 221026.png';
import rakScreenshot3 from '../images/rak/Screenshot 2025-10-19 221035.png';
import rakScreenshot4 from '../images/rak/Screenshot 2025-10-19 221042.png';
import rakScreenshot5 from '../images/rak/Screenshot 2025-10-19 221050.png';
import rakScreenshot6 from '../images/rak/Screenshot 2025-10-19 221058.png';
import rakScreenshot7 from '../images/rak/Screenshot 2025-10-19 221107.png';
import rakScreenshot8 from '../images/rak/Screenshot 2025-10-19 221128.png';
import rakScreenshot9 from '../images/rak/Screenshot 2025-10-19 221137.png';
import rakScreenshot10 from '../images/rak/Screenshot 2025-10-19 221200.png';
import rakScreenshot11 from '../images/rak/Screenshot 2025-10-19 221208.png';
import rakLogo from '../images/rak/optimus-rak-white-logo-e1757322545339-1024x270.webp';

const OptimusRAKCaseStudy = () => {
  // Image data for the marquee
  const marqueeImages = [
    {
      src: rakScreenshot1,
      alt: "Optimus RAK Homepage"
    },
    {
      src: rakScreenshot2,
      alt: "Optimus RAK About Us"
    },
    {
      src: rakScreenshot3,
      alt: "Optimus RAK Properties"
    },
    {
      src: rakScreenshot4,
      alt: "Optimus RAK Sora Beach"
    },
    {
      src: rakScreenshot5,
      alt: "Optimus RAK Ola Residences"
    },
    {
      src: rakScreenshot6,
      alt: "Optimus RAK Sobha Aquamont"
    },
    {
      src: rakScreenshot7,
      alt: "Optimus RAK Property Types"
    },
    {
      src: rakScreenshot8,
      alt: "Optimus RAK Services"
    },
    {
      src: rakScreenshot9,
      alt: "Optimus RAK Blog"
    },
    {
      src: rakScreenshot10,
      alt: "Optimus RAK Contact"
    },
    {
      src: rakScreenshot11,
      alt: "Optimus RAK Portfolio"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 sm:pt-32">
        <div className="absolute inset-0"></div>
        
        {/* Back Button */}
        <div className="absolute top-32 left-4 sm:left-8 z-20">
          <button 
            onClick={() => window.location.hash = ''}
            className="flex items-center gap-2 text-black hover:text-gray-700 transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Work</span>
          </button>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
          {/* Project Categories */}
          <div className="flex justify-center gap-2 mb-6 animate-fade-in">
            <span className="px-3 py-1 bg-gray-100 text-black text-sm rounded-full">Real Estate</span>
            <span className="px-3 py-1 bg-gray-100 text-black text-sm rounded-full">Ras Al Khaimah</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4 mb-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight text-black">
              Optimus RAK
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-black font-light">
              Your Trusted Real Estate Partner in Ras Al Khaimah
            </p>
          </div>

          {/* Project URL */}
          <div className="mb-12 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <a 
              href="https://optimusrak.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-black hover:text-gray-700 transition-colors duration-300"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="text-lg">optimusrak.com</span>
            </a>
          </div>

          {/* CTA Button */}
          <div className="animate-slide-up flex justify-center" style={{animationDelay: '0.6s'}}>
            <a 
              href="https://werzio.youcanbook.me/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary group no-underline inline-flex w-auto"
            >
              <Calendar className="w-5 h-5" />
              Discuss Your Project
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Project Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Project Overview</h2>
              <p className="text-lg text-black leading-relaxed mb-8">
                Optimus RAK required a comprehensive platform to showcase their expertise in Ras Al Khaimah's real estate market. With over 17 years of experience, they needed a website that effectively presents their personalized real estate solutions, premium properties like Sora Beach Residences and Sobha Aquamont, and their deep local market knowledge.
              </p>
              
              {/* Project Details */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-black" />
                    <span className="text-sm text-black">Client</span>
                  </div>
                  <p className="font-medium text-black">Optimus RAK</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-black" />
                    <span className="text-sm text-black">Duration</span>
                  </div>
                  <p className="font-medium text-black">2024 - Present</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-4 h-4 text-black" />
                    <span className="text-sm text-black">Team Size</span>
                  </div>
                  <p className="font-medium text-black">5 people</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-black" />
                    <span className="text-sm text-black">Year</span>
                  </div>
                  <p className="font-medium text-black">2024</p>
                </div>
              </div>
            </div>

            {/* Project Visual */}
            <div className="relative">
              <div className="rounded-2xl p-12 aspect-square flex items-center justify-center">
                <div className="relative">
                  <img 
                    src={rakLogo}
                    alt="Optimus RAK Logo"
                    className="w-full h-auto max-w-sm object-contain filter invert"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">Key Features Delivered</h3>
            <p className="text-lg text-black">Comprehensive real estate solutions for Ras Al Khaimah market</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-black" />
              </div>
              <h4 className="text-xl font-bold text-black mb-3">Premium Property Showcase</h4>
              <p className="text-black">Comprehensive presentation of luxury properties including Sora Beach Residences, Ola Residences at Al Marjan, and Sobha Aquamont with detailed specifications and imagery.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-black" />
              </div>
              <h4 className="text-xl font-bold text-black mb-3">Local Market Expertise</h4>
              <p className="text-black">Deep local knowledge presentation showcasing 17+ years of RAK market expertise, investment opportunities, and personalized guidance for buyers, sellers, and investors.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-black" />
              </div>
              <h4 className="text-xl font-bold text-black mb-3">Investment Advisory</h4>
              <p className="text-black">Comprehensive investment advisory services with market insights, property analysis, and strategic guidance to maximize value at every step of the real estate journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Image Marquee */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">Project Gallery</h3>
            <p className="text-lg text-black max-w-2xl mx-auto">
              Visual showcase of the Optimus RAK platform featuring professional design, 
              premium property presentations, and comprehensive RAK market coverage
            </p>
          </div>
          
          {/* Primary Marquee - Left to Right */}
          <div className="mb-12">
            <InfiniteImageMarquee 
              images={marqueeImages}
              speed="slow"
              direction="left"
              pauseOnHover={true}
              imageWidth={380}
              imageHeight={280}
              gap={32}
            />
          </div>
          
          {/* Secondary Marquee - Right to Left (Reverse) */}
          <div>
            <InfiniteImageMarquee 
              images={marqueeImages.slice().reverse()}
              speed="medium"
              direction="right"
              pauseOnHover={true}
              imageWidth={320}
              imageHeight={240}
              gap={24}
            />
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Challenge */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">The Challenge</h3>
              <p className="text-lg text-black leading-relaxed mb-6">
                Optimus RAK needed a platform that could effectively showcase their 17+ years of expertise in the Ras Al Khaimah real estate market while presenting premium properties and building client trust. Their existing system lacked:
              </p>
              <ul className="space-y-3 text-black">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Professional presentation of premium RAK properties</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Local market expertise and knowledge showcase</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Investment advisory service presentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Trust-building content highlighting experience</span>
                </li>
              </ul>
            </div>

            {/* Solution */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">Our Solution</h3>
              <p className="text-lg text-black leading-relaxed mb-6">
                We developed a comprehensive real estate platform that showcases Optimus RAK's expertise and builds trust with potential clients in the RAK market:
              </p>
              <ul className="space-y-3 text-black">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Premium property showcase with detailed presentations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Local expertise highlighting 17+ years of RAK experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Investment advisory services with market insights</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Trust-building content and client testimonials</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">Exceptional Results</h3>
            <p className="text-lg text-black">Measurable impact on RAK real estate business growth</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl">
              <div className="text-4xl md:text-5xl font-black text-black mb-2">
                17+
              </div>
              <div className="text-lg font-medium text-black mb-2">
                Years Experience
              </div>
              <div className="text-sm text-black">
                Trusted expertise in RAK market
              </div>
            </div>

            <div className="text-center p-8 rounded-2xl">
              <div className="text-4xl md:text-5xl font-black text-black mb-2">
                52+
              </div>
              <div className="text-lg font-medium text-black mb-2">
                Properties Listed
              </div>
              <div className="text-sm text-black">
                Houses, Apartments, Townhouses & Villas
              </div>
            </div>

            <div className="text-center p-8 rounded-2xl">
              <div className="text-4xl md:text-5xl font-black text-black mb-2">
                +250%
              </div>
              <div className="text-lg font-medium text-black mb-2">
                Client Inquiries
              </div>
              <div className="text-sm text-black">
                Increase in property consultation requests
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Ready to Elevate Your Real Estate Business?
          </h3>
          <p className="text-lg text-black mb-8 leading-relaxed">
            Let's discuss how we can create a powerful platform that showcases your expertise and drives business growth, just like we did for Optimus RAK.
          </p>
          <div className="flex justify-center">
            <a 
              href="https://werzio.youcanbook.me/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary group no-underline inline-flex w-auto"
            >
              <Calendar className="w-5 h-5" />
              Book a Meeting
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OptimusRAKCaseStudy;
