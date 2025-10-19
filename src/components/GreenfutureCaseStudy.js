import React from 'react';
import { ArrowLeft, ExternalLink, Calendar, Users, Clock, Target, Monitor, UserPlus, Share2 } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import InfiniteImageMarquee from './InfiniteImageMarquee';
import gfScreenshot1 from '../images/GF/Screenshot 2025-10-19 210004.png';
import gfScreenshot2 from '../images/GF/Screenshot 2025-10-19 210013.png';
import gfScreenshot3 from '../images/GF/Screenshot 2025-10-19 210021.png';
import gfScreenshot4 from '../images/GF/Screenshot 2025-10-19 210032.png';
import gfScreenshot5 from '../images/GF/Screenshot 2025-10-19 210047.png';
import gfScreenshot6 from '../images/GF/Screenshot 2025-10-19 210106.png';
import gfScreenshot7 from '../images/GF/Screenshot 2025-10-19 210116.png';
import gfScreenshot8 from '../images/GF/Screenshot 2025-10-19 210127.png';
import gfScreenshot9 from '../images/GF/Screenshot 2025-10-19 210136.png';
import gfLogo from '../images/GF/GFP-VECTOR-ICON-1024x683.webp';

const GreenfutureCaseStudy = () => {
  // Image data for the marquee
  const marqueeImages = [
    {
      src: gfScreenshot1,
      alt: "Greenfuture Properties Homepage"
    },
    {
      src: gfScreenshot2,
      alt: "Greenfuture Properties About"
    },
    {
      src: gfScreenshot3,
      alt: "Greenfuture Properties Listings"
    },
    {
      src: gfScreenshot4,
      alt: "Greenfuture Sustainability Features"
    },
    {
      src: gfScreenshot5,
      alt: "Greenfuture Property Details"
    },
    {
      src: gfScreenshot6,
      alt: "Greenfuture Green Certifications"
    },
    {
      src: gfScreenshot7,
      alt: "Greenfuture Energy Calculator"
    },
    {
      src: gfScreenshot8,
      alt: "Greenfuture Admin Dashboard"
    },
    {
      src: gfScreenshot9,
      alt: "Greenfuture Contact Page"
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
            <span className="px-3 py-1 bg-gray-100 text-black text-sm rounded-full">Property</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4 mb-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight text-black">
              Greenfuture Properties
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-black font-light">
              Real Estate Platform
            </p>
          </div>

          {/* Project URL */}
          <div className="mb-12 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <a 
              href="https://greenfuture.pk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-black hover:text-gray-700 transition-colors duration-300"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="text-lg">greenfuture.pk</span>
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
                Greenfuture Properties needed a cutting-edge platform to showcase eco-friendly and sustainable real estate options. The platform required advanced filtering for green certifications, energy efficiency ratings, and environmental impact metrics while maintaining an intuitive user experience for environmentally conscious buyers.
              </p>
              
              {/* Project Details */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-black" />
                    <span className="text-sm text-black">Client</span>
                  </div>
                  <p className="font-medium text-black">Greenfuture Properties</p>
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
                  <p className="font-medium text-black">8 people</p>
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
                    src={gfLogo}
                    alt="Greenfuture Properties Logo"
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
            <p className="text-lg text-black">Comprehensive digital solutions for business growth</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-8 h-8 text-black" />
              </div>
              <h4 className="text-xl font-bold text-black mb-3">Website Design/Development</h4>
              <p className="text-black">Modern, responsive website design and development with user-friendly interface, optimized performance, and seamless user experience across all devices.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <UserPlus className="w-8 h-8 text-black" />
              </div>
              <h4 className="text-xl font-bold text-black mb-3">Lead Generation</h4>
              <p className="text-black">Strategic lead generation campaigns with targeted marketing, conversion optimization, and automated lead capture systems to drive qualified prospects.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Share2 className="w-8 h-8 text-black" />
              </div>
              <h4 className="text-xl font-bold text-black mb-3">Social Media Management</h4>
              <p className="text-black">Comprehensive social media strategy and management including content creation, community engagement, and brand presence across multiple platforms.</p>
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
              Visual showcase of the Greenfuture Properties platform featuring sustainable design, 
              green technology integration, and eco-friendly user experience
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
                Greenfuture Properties faced the challenge of creating a platform that could effectively communicate complex sustainability metrics while remaining user-friendly. Their existing system lacked:
              </p>
              <ul className="space-y-3 text-black">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Comprehensive green certification database</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Energy efficiency comparison tools</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Environmental impact visualization</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Sustainable financing options integration</span>
                </li>
              </ul>
            </div>

            {/* Solution */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">Our Solution</h3>
              <p className="text-lg text-black leading-relaxed mb-6">
                We developed a comprehensive sustainable real estate platform that makes green living accessible and understandable for all users:
              </p>
              <ul className="space-y-3 text-black mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Integrated green certification tracking system</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Interactive energy efficiency calculator</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Real-time sustainability analytics dashboard</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Green financing and incentive finder</span>
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
            <p className="text-lg text-black">Measurable impact on real estate adoption</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl">
              <div className="text-4xl md:text-5xl font-black text-black mb-2">
                +450%
              </div>
              <div className="text-lg font-medium text-black mb-2">
                More Website Views
              </div>
              <div className="text-sm text-black">
                Increase in property inquiries
              </div>
            </div>

            <div className="text-center p-8 rounded-2xl">
              <div className="text-4xl md:text-5xl font-black text-black mb-2">
                +380%
              </div>
              <div className="text-lg font-medium text-black mb-2">
                Eco-Conscious Leads
              </div>
              <div className="text-sm text-black">
                More qualified property buyers
              </div>
            </div>

            <div className="text-center p-8 rounded-2xl">
              <div className="text-4xl md:text-5xl font-black text-black mb-2">
                +220%
              </div>
              <div className="text-lg font-medium text-black mb-2">
                Increased Sales
              </div>
              <div className="text-sm text-black">
                Improvement in plot sales
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Ready to Build Something Special?
          </h3>
          <p className="text-lg text-black mb-8 leading-relaxed">
            Let's discuss how we can create an innovative platform that drives environmental impact and business growth, just like we did for Greenfuture Properties.
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

export default GreenfutureCaseStudy;
