import React from 'react';
import { ArrowLeft, ExternalLink, Calendar, Users, Clock, Target, Crown, Building2, TrendingUp } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import InfiniteImageMarquee from './InfiniteImageMarquee';
import luxeScreenshot1 from '../images/luxe/Screenshot 2025-10-19 213550.png';
import luxeScreenshot2 from '../images/luxe/Screenshot 2025-10-19 213600.png';
import luxeScreenshot3 from '../images/luxe/Screenshot 2025-10-19 213608.png';
import luxeScreenshot4 from '../images/luxe/Screenshot 2025-10-19 213620.png';
import luxeScreenshot5 from '../images/luxe/Screenshot 2025-10-19 213933.png';
import luxeLogo from '../images/luxe/cropped-OptimusLuxe_Transparent-BG.webp';

const OptimusLuxeCaseStudy = () => {
  // Image data for the marquee
  const marqueeImages = [
    {
      src: luxeScreenshot1,
      alt: "Optimus Luxe Homepage"
    },
    {
      src: luxeScreenshot2,
      alt: "Optimus Luxe Luxury Properties"
    },
    {
      src: luxeScreenshot3,
      alt: "Optimus Luxe Property Details"
    },
    {
      src: luxeScreenshot4,
      alt: "Optimus Luxe Premium Listings"
    },
    {
      src: luxeScreenshot5,
      alt: "Optimus Luxe Contact Page"
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
            <span className="px-3 py-1 bg-gray-100 text-black text-sm rounded-full">Luxury Real Estate</span>
            <span className="px-3 py-1 bg-gray-100 text-black text-sm rounded-full">Premium Properties</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4 mb-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight text-black">
              Optimus Luxe
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-black font-light">
              Luxury Living, Redefined
            </p>
          </div>

          {/* Project URL */}
          <div className="mb-12 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <a 
              href="https://optimusluxe.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-black hover:text-gray-700 transition-colors duration-300"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="text-lg">optimusluxe.com</span>
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
                Optimus Luxe required an exclusive platform to showcase Dubai's most prestigious luxury properties. The platform needed to reflect the sophistication of high-end real estate while providing seamless navigation for discerning clients seeking premium properties in iconic locations like Business Bay, Dubai Marina, and Palm Jumeirah.
              </p>
              
              {/* Project Details */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-black" />
                    <span className="text-sm text-black">Client</span>
                  </div>
                  <p className="font-medium text-black">Optimus Luxe</p>
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
                  <p className="font-medium text-black">6 people</p>
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
                    src={luxeLogo}
                    alt="Optimus Luxe Logo"
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
            <p className="text-lg text-black">Exclusive solutions for luxury real estate</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-black" />
              </div>
              <h4 className="text-xl font-bold text-black mb-3">Luxury Property Showcase</h4>
              <p className="text-black">Sophisticated presentation of premium properties with high-quality imagery, detailed specifications, and immersive virtual tours for discerning clients.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-black" />
              </div>
              <h4 className="text-xl font-bold text-black mb-3">Premium Location Mapping</h4>
              <p className="text-black">Interactive mapping system highlighting Dubai's most prestigious neighborhoods including Business Bay, Dubai Marina, and Palm Jumeirah with lifestyle amenities.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-black" />
              </div>
              <h4 className="text-xl font-bold text-black mb-3">Investment Analytics</h4>
              <p className="text-black">Comprehensive market analysis and investment insights for luxury properties, helping clients make informed decisions in Dubai's premium real estate market.</p>
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
              Visual showcase of the Optimus Luxe platform featuring elegant design, 
              luxury property presentations, and premium user experience
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
                Optimus Luxe needed a platform that could effectively represent Dubai's most exclusive luxury properties while appealing to high-net-worth individuals. Their existing system lacked:
              </p>
              <ul className="space-y-3 text-black">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Sophisticated luxury property presentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Premium location-based search functionality</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>High-end client experience and interface</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Investment-grade market analytics</span>
                </li>
              </ul>
            </div>

            {/* Solution */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">Our Solution</h3>
              <p className="text-lg text-black leading-relaxed mb-6">
                We developed an exclusive luxury real estate platform that embodies sophistication and provides an unparalleled experience for Dubai's premium property market:
              </p>
              <ul className="space-y-3 text-black">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Elegant luxury property showcase with premium imagery</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Interactive Dubai location mapping with lifestyle insights</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Sophisticated user interface for discerning clients</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Comprehensive investment analytics and market insights</span>
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
            <p className="text-lg text-black">Measurable impact on luxury real estate engagement</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl">
              <div className="text-4xl md:text-5xl font-black text-black mb-2">
                +380%
              </div>
              <div className="text-lg font-medium text-black mb-2">
                Luxury Property Views
              </div>
              <div className="text-sm text-black">
                Increase in premium property inquiries
              </div>
            </div>

            <div className="text-center p-8 rounded-2xl">
              <div className="text-4xl md:text-5xl font-black text-black mb-2">
                25k+
              </div>
              <div className="text-lg font-medium text-black mb-2">
                Trusted Customers
              </div>
              <div className="text-sm text-black">
                High-net-worth client base
              </div>
            </div>

            <div className="text-center p-8 rounded-2xl">
              <div className="text-4xl md:text-5xl font-black text-black mb-2">
                +250%
              </div>
              <div className="text-lg font-medium text-black mb-2">
                Premium Sales
              </div>
              <div className="text-sm text-black">
                Improvement in luxury property sales
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Ready to Create Luxury Excellence?
          </h3>
          <p className="text-lg text-black mb-8 leading-relaxed">
            Let's discuss how we can create a sophisticated platform that elevates your luxury brand and drives exceptional results, just like we did for Optimus Luxe.
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

export default OptimusLuxeCaseStudy;
