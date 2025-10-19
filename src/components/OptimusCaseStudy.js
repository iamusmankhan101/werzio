import React from 'react';
import { ArrowLeft, ExternalLink, Calendar, Users, Clock, Target, MapPin, Home, TrendingUp } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import InfiniteImageMarquee from './InfiniteImageMarquee';
import optimusScreenshot1 from '../images/optimus/Screenshot 2025-10-19 202742.png';
import optimusScreenshot2 from '../images/optimus/Screenshot 2025-10-19 202754.png';
import optimusScreenshot3 from '../images/optimus/Screenshot 2025-10-19 202816.png';
import optimusScreenshot4 from '../images/optimus/Screenshot 2025-10-19 202828.png';
import optimusScreenshot5 from '../images/optimus/Screenshot 2025-10-19 202841.png';
import optimusScreenshot6 from '../images/optimus/Screenshot 2025-10-19 202856.png';
import optimusScreenshot7 from '../images/optimus/Screenshot 2025-10-19 202908.png';
import optimusLogo from '../images/optimus/4310-47904o.webp';

const OptimusCaseStudy = () => {
  // Image data for the marquee
  const marqueeImages = [
    {
      src: optimusScreenshot1,
      alt: "Optimus Properties Homepage"
    },
    {
      src: optimusScreenshot2,
      alt: "Optimus Properties About"
    },
    {
      src: optimusScreenshot3,
      alt: "Optimus Properties Listings"
    },
    {
      src: optimusScreenshot4,
      alt: "Optimus Properties Off Plan"
    },
    {
      src: optimusScreenshot5,
      alt: "Optimus Properties Details"
    },
    {
      src: optimusScreenshot6,
      alt: "Optimus Properties Features"
    },
    {
      src: optimusScreenshot7,
      alt: "Optimus Properties Contact"
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
              Optimus Properties
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-black font-light">
              Premium Real Estate Platform
            </p>
          </div>

          {/* Project URL */}
          <div className="mb-12 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <a 
              href="https://theoptimus.ae" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-black hover:text-gray-700 transition-colors duration-300"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="text-lg">theoptimus.ae</span>
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
                Optimus Properties required a sophisticated real estate platform that could showcase premium properties with professional presentation, advanced search capabilities, and seamless client management. The platform needed to handle high-value listings while providing an exceptional user experience for both buyers and agents.
              </p>
              
              {/* Project Details */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-black" />
                    <span className="text-sm text-black">Client</span>
                  </div>
                  <p className="font-medium text-black">Optimus Properties</p>
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
                  <p className="font-medium text-black">+25 people</p>
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
                    src={optimusLogo}
                    alt="The Optimus Properties Logo"
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
            <p className="text-lg text-black">Comprehensive solutions for modern real estate business</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-black" />
              </div>
              <h4 className="text-xl font-bold text-black mb-3">Interactive Property Maps</h4>
              <p className="text-black">Advanced mapping system with neighborhood insights, nearby amenities, and property clustering for better user experience.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-black" />
              </div>
              <h4 className="text-xl font-bold text-black mb-3">Virtual Property Tours</h4>
              <p className="text-black">Immersive 360° virtual tours with high-quality imagery and interactive hotspots for detailed property exploration.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-black" />
              </div>
              <h4 className="text-xl font-bold text-black mb-3">Advanced Analytics</h4>
              <p className="text-black">Comprehensive dashboard with property performance metrics, lead tracking, and market trend analysis.</p>
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
              Visual showcase of the Optimus Properties platform featuring modern design, 
              intuitive navigation, and powerful functionality
            </p>
          </div>
          
          {/* Primary Marquee - Left to Right */}
          <div className="mb-8">
            <InfiniteImageMarquee 
              images={marqueeImages}
              speed="slow"
              direction="left"
              pauseOnHover={true}
              imageWidth={380}
              imageHeight={280}
              gap={32}
              className="mb-8"
            />
          </div>
          
          {/* Secondary Marquee - Right to Left (Reverse) */}
          <div className="mb-8">
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
                Optimus Properties was struggling with an outdated website that couldn't effectively showcase their premium property portfolio. Their existing system lacked:
              </p>
              <ul className="space-y-3 text-black">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Advanced search and filtering capabilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Professional property presentation tools</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Efficient lead management system</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Mobile-responsive design for modern users</span>
                </li>
              </ul>
            </div>

            {/* Solution */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">Our Solution</h3>
              <p className="text-lg text-black leading-relaxed mb-6">
                We developed a comprehensive real estate platform that transformed how Optimus Properties showcases and manages their premium property portfolio:
              </p>
              <ul className="space-y-3 text-black mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Intelligent property search with 20+ filter options</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Virtual tour integration with 360° photography</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Automated lead capture and CRM integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Responsive design optimized for all devices</span>
                </li>
              </ul>
              
              {/* Technologies */}
              <div>
                <h4 className="text-sm font-medium text-black mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "PostgreSQL", "Google Maps API", "Stripe", "AWS"].map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">Exceptional Results</h3>
            <p className="text-lg text-black">Measurable impact on business growth and user engagement</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl">
              <div className="text-4xl md:text-5xl font-black text-black mb-2">
                +280%
              </div>
              <div className="text-lg font-medium text-black mb-2">
                Property Views
              </div>
              <div className="text-sm text-black">
                Increase in property page visits
              </div>
            </div>

            <div className="text-center p-8 rounded-2xl">
              <div className="text-4xl md:text-5xl font-black text-black mb-2">
                +320%
              </div>
              <div className="text-lg font-medium text-black mb-2">
                Lead Generation
              </div>
              <div className="text-sm text-black">
                More qualified inquiries
              </div>
            </div>

            <div className="text-center p-8 rounded-2xl">
              <div className="text-4xl md:text-5xl font-black text-black mb-2">
                +145%
              </div>
              <div className="text-lg font-medium text-black mb-2">
                Sales Conversion
              </div>
              <div className="text-sm text-black">
                Improvement in closing rate
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Ready to Transform Your Business?
          </h3>
          <p className="text-lg text-black mb-8 leading-relaxed">
            Let's discuss how we can create a powerful digital solution that drives real results for your business, just like we did for Optimus Properties.
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

export default OptimusCaseStudy;
