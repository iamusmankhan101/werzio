import React from 'react';
import { ArrowLeft, ExternalLink, Calendar, Users, Clock, Target, Truck, Route, FileText } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import InfiniteImageMarquee from './InfiniteImageMarquee';
import hawkScreenshot1 from '../images/hawk/Screenshot 2025-10-19 214555.png';
import hawkScreenshot2 from '../images/hawk/Screenshot 2025-10-19 214604.png';
import hawkScreenshot3 from '../images/hawk/Screenshot 2025-10-19 214611.png';
import hawkScreenshot4 from '../images/hawk/Screenshot 2025-10-19 214620.png';
import hawkScreenshot5 from '../images/hawk/Screenshot 2025-10-19 214636.png';
import hawkScreenshot6 from '../images/hawk/Screenshot 2025-10-19 214644.png';
import hawkScreenshot7 from '../images/hawk/Screenshot 2025-10-19 214653.png';
import hawkScreenshot8 from '../images/hawk/Screenshot 2025-10-19 214712.png';
import hawkScreenshot9 from '../images/hawk/Screenshot 2025-10-19 214724.png';
import hawkScreenshot10 from '../images/hawk/Screenshot 2025-10-19 214739.png';
import hawkLogo from '../images/hawk/LOGO-SCHOLARSHIP-SEEKERS-HUB-2.webp';

const HawkDispatchCaseStudy = () => {
  // Image data for the marquee
  const marqueeImages = [
    {
      src: hawkScreenshot1,
      alt: "Hawk Dispatch Homepage"
    },
    {
      src: hawkScreenshot2,
      alt: "Hawk Dispatch Services"
    },
    {
      src: hawkScreenshot3,
      alt: "Hawk Dispatch Load Booking"
    },
    {
      src: hawkScreenshot4,
      alt: "Hawk Dispatch Tracking"
    },
    {
      src: hawkScreenshot5,
      alt: "Hawk Dispatch Documentation"
    },
    {
      src: hawkScreenshot6,
      alt: "Hawk Dispatch About"
    },
    {
      src: hawkScreenshot7,
      alt: "Hawk Dispatch Pricing"
    },
    {
      src: hawkScreenshot8,
      alt: "Hawk Dispatch Contact"
    },
    {
      src: hawkScreenshot9,
      alt: "Hawk Dispatch Dashboard"
    },
    {
      src: hawkScreenshot10,
      alt: "Hawk Dispatch Support"
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
            <span className="px-3 py-1 bg-gray-100 text-black text-sm rounded-full">Logistics</span>
            <span className="px-3 py-1 bg-gray-100 text-black text-sm rounded-full">Dispatch Services</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4 mb-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight text-black">
              Hawk Dispatch
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-black font-light">
              Dispatch Excellence for Industry Leaders
            </p>
          </div>

          {/* Project URL */}
          <div className="mb-12 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <a 
              href="https://hawkdispatchinc.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-black hover:text-gray-700 transition-colors duration-300"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="text-lg">hawkdispatchinc.com</span>
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
                Hawk Dispatch required a comprehensive platform to showcase their logistics expertise and dispatch services. The platform needed to effectively communicate their 40+ years of combined industry experience while providing clear information about load booking, tracking, documentation, and 24/7 support services for trucking professionals.
              </p>
              
              {/* Project Details */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-black" />
                    <span className="text-sm text-black">Client</span>
                  </div>
                  <p className="font-medium text-black">Hawk Dispatch Inc</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-black" />
                    <span className="text-sm text-black">Duration</span>
                  </div>
                  <p className="font-medium text-black">2025 - Present</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-4 h-4 text-black" />
                    <span className="text-sm text-black">Team Size</span>
                  </div>
                  <p className="font-medium text-black">4 people</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-black" />
                    <span className="text-sm text-black">Year</span>
                  </div>
                  <p className="font-medium text-black">2025</p>
                </div>
              </div>
            </div>

            {/* Project Visual */}
            <div className="relative">
              <div className="rounded-2xl p-12 aspect-square flex items-center justify-center">
                <div className="relative">
                  <img 
                    src={hawkLogo}
                    alt="Hawk Dispatch Logo"
                    className="w-full h-auto max-w-sm object-contain"
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
            <p className="text-lg text-black">Comprehensive logistics solutions for trucking professionals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-black" />
              </div>
              <h4 className="text-xl font-bold text-black mb-3">Load Booking & Sourcing</h4>
              <p className="text-black">Advanced load sourcing system using premium load boards and private broker networks, expertly negotiating the highest possible rate per mile for all equipment types.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Route className="w-8 h-8 text-black" />
              </div>
              <h4 className="text-xl font-bold text-black mb-3">Dispatch & Tracking</h4>
              <p className="text-black">Real-time dispatch support with 24/7 tracking, route planning, and consistent communication to keep operations smooth and minimize empty miles.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-black" />
              </div>
              <h4 className="text-xl font-bold text-black mb-3">Documentation & Billing</h4>
              <p className="text-black">Complete administrative management including rate confirmations, broker setup packets, invoicing with factoring companies, and compliance documentation.</p>
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
              Visual showcase of the Hawk Dispatch platform featuring professional design, 
              comprehensive service presentation, and user-friendly logistics interface
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
                Hawk Dispatch needed a platform that could effectively communicate their comprehensive logistics services while building trust with trucking professionals. Their existing system lacked:
              </p>
              <ul className="space-y-3 text-black">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Clear presentation of dispatch services and expertise</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Equipment type specialization showcase</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>24/7 support and tracking system presentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Professional credibility and experience display</span>
                </li>
              </ul>
            </div>

            {/* Solution */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">Our Solution</h3>
              <p className="text-lg text-black leading-relaxed mb-6">
                We developed a comprehensive logistics platform that showcases Hawk Dispatch's expertise and builds trust with trucking professionals:
              </p>
              <ul className="space-y-3 text-black">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Professional service presentation with clear value propositions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Equipment specialization pages (Dry Van, Reefer, Flatbed, etc.)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>24/7 support system with real-time tracking capabilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Trust-building content highlighting 5+ years experience</span>
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
            <p className="text-lg text-black">Measurable impact on logistics business growth</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl">
              <div className="text-4xl md:text-5xl font-black text-black mb-2">
                +300%
              </div>
              <div className="text-lg font-medium text-black mb-2">
                Client Inquiries
              </div>
              <div className="text-sm text-black">
                Increase in dispatch service requests
              </div>
            </div>

            <div className="text-center p-8 rounded-2xl">
              <div className="text-4xl md:text-5xl font-black text-black mb-2">
                5+
              </div>
              <div className="text-lg font-medium text-black mb-2">
                Years Experience
              </div>
              <div className="text-sm text-black">
                Combined industry expertise
              </div>
            </div>

            <div className="text-center p-8 rounded-2xl">
              <div className="text-4xl md:text-5xl font-black text-black mb-2">
                24/7
              </div>
              <div className="text-lg font-medium text-black mb-2">
                Support & Tracking
              </div>
              <div className="text-sm text-black">
                Round-the-clock service availability
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Ready to Streamline Your Operations?
          </h3>
          <p className="text-lg text-black mb-8 leading-relaxed">
            Let's discuss how we can create a powerful platform that optimizes your logistics operations and drives business growth, just like we did for Hawk Dispatch.
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

export default HawkDispatchCaseStudy;
