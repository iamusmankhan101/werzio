import React from 'react';
import { ArrowLeft, ExternalLink, Calendar, Users, Clock, Target, Eye, Stethoscope, Activity } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import InfiniteImageMarquee from './InfiniteImageMarquee';
import visionScreenshot1 from '../images/vision/Screenshot 2025-10-19 221920.png';
import visionScreenshot2 from '../images/vision/Screenshot 2025-10-19 221929.png';
import visionScreenshot3 from '../images/vision/Screenshot 2025-10-19 221945.png';
import visionScreenshot4 from '../images/vision/Screenshot 2025-10-19 221954.png';
import visionScreenshot5 from '../images/vision/Screenshot 2025-10-19 222001.png';
import visionScreenshot6 from '../images/vision/Screenshot 2025-10-19 222015.png';
import visionScreenshot7 from '../images/vision/Screenshot 2025-10-19 222026.png';
import visionScreenshot8 from '../images/vision/Screenshot 2025-10-19 222038.png';
import visionScreenshot9 from '../images/vision/Screenshot 2025-10-19 222057.png';
import visionScreenshot10 from '../images/vision/Screenshot 2025-10-19 222108.png';
import visionScreenshot11 from '../images/vision/Screenshot 2025-10-19 222118.png';
import visionScreenshot12 from '../images/vision/Screenshot 2025-10-19 222128.png';
import visionScreenshot13 from '../images/vision/Screenshot 2025-10-19 222137.png';
import visionLogo from '../images/vision/logo2.png';

const VisionCareCaseStudy = () => {
  // Image data for the marquee
  const marqueeImages = [
    {
      src: visionScreenshot1,
      alt: "Vision Care Homepage"
    },
    {
      src: visionScreenshot2,
      alt: "Vision Care Services"
    },
    {
      src: visionScreenshot3,
      alt: "Vision Care About Us"
    },
    {
      src: visionScreenshot4,
      alt: "Vision Care Eye Exams"
    },
    {
      src: visionScreenshot5,
      alt: "Vision Care Contact Lenses"
    },
    {
      src: visionScreenshot6,
      alt: "Vision Care Eyewear"
    },
    {
      src: visionScreenshot7,
      alt: "Vision Care Appointments"
    },
    {
      src: visionScreenshot8,
      alt: "Vision Care Patient Portal"
    },
    {
      src: visionScreenshot9,
      alt: "Vision Care Insurance"
    },
    {
      src: visionScreenshot10,
      alt: "Vision Care Location"
    },
    {
      src: visionScreenshot11,
      alt: "Vision Care Team"
    },
    {
      src: visionScreenshot12,
      alt: "Vision Care Reviews"
    },
    {
      src: visionScreenshot13,
      alt: "Vision Care Contact"
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
            <span className="px-3 py-1 bg-gray-100 text-black text-sm rounded-full">Healthcare</span>
            <span className="px-3 py-1 bg-gray-100 text-black text-sm rounded-full">Vision Care</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4 mb-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight text-black">
              Vision Care
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-black font-light">
              Comprehensive Eye Care Solutions
            </p>
          </div>

          {/* Project URL */}
          <div className="mb-12 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-black hover:text-gray-700 transition-colors duration-300"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="text-lg">visioncare-clinic.com</span>
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
                Vision Care required a comprehensive digital platform to showcase their eye care services and streamline patient interactions. The platform needed to effectively present their range of services including comprehensive eye exams, contact lens fittings, eyewear selection, and specialized treatments while providing easy appointment booking and patient portal access.
              </p>
              
              {/* Project Details */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-black" />
                    <span className="text-sm text-black">Client</span>
                  </div>
                  <p className="font-medium text-black">Vision Care Clinic</p>
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
                  <p className="font-medium text-black">4 people</p>
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
                    src={visionLogo}
                    alt="Vision Care Logo"
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
            <p className="text-lg text-black">Comprehensive healthcare solutions for vision care</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-black" />
              </div>
              <h4 className="text-xl font-bold text-black mb-3">Multistep Lens Selection</h4>
              <p className="text-black">Interactive lens selection process with step-by-step guidance, prescription verification, lens type comparison, and personalized recommendations based on lifestyle and vision needs.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="w-8 h-8 text-black" />
              </div>
              <h4 className="text-xl font-bold text-black mb-3">Patient Portal System</h4>
              <p className="text-black">Secure patient portal with appointment management, prescription tracking, insurance verification, and direct communication with healthcare providers.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Activity className="w-8 h-8 text-black" />
              </div>
              <h4 className="text-xl font-bold text-black mb-3">Treatment Tracking</h4>
              <p className="text-black">Comprehensive treatment and follow-up tracking system with automated reminders, progress monitoring, and personalized care plan management.</p>
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
              Visual showcase of the Vision Care platform featuring professional healthcare design, 
              comprehensive service presentation, and user-friendly patient interface
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
                Vision Care needed a modern digital platform that could effectively manage patient interactions while showcasing their comprehensive eye care services. Their existing system lacked:
              </p>
              <ul className="space-y-3 text-black">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Interactive lens selection and fitting process</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Comprehensive service presentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Patient portal and record management</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Insurance verification and billing integration</span>
                </li>
              </ul>
            </div>

            {/* Solution */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">Our Solution</h3>
              <p className="text-lg text-black leading-relaxed mb-6">
                We developed a comprehensive healthcare platform that streamlines patient care while showcasing Vision Care's expertise and services:
              </p>
              <ul className="space-y-3 text-black">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Interactive multistep lens selection with guided recommendations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Professional service showcase with detailed descriptions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Secure patient portal with comprehensive record access</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Integrated insurance verification and billing system</span>
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
            <p className="text-lg text-black">Measurable impact on healthcare service delivery</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl">
              <div className="text-4xl md:text-5xl font-black text-black mb-2">
                +280%
              </div>
              <div className="text-lg font-medium text-black mb-2">
                Online Appointments
              </div>
              <div className="text-sm text-black">
                Increase in digital appointment bookings
              </div>
            </div>

            <div className="text-center p-8 rounded-2xl">
              <div className="text-4xl md:text-5xl font-black text-black mb-2">
                95%
              </div>
              <div className="text-lg font-medium text-black mb-2">
                Patient Satisfaction
              </div>
              <div className="text-sm text-black">
                Improved patient experience rating
              </div>
            </div>

            <div className="text-center p-8 rounded-2xl">
              <div className="text-4xl md:text-5xl font-black text-black mb-2">
                60%
              </div>
              <div className="text-lg font-medium text-black mb-2">
                Reduced Wait Times
              </div>
              <div className="text-sm text-black">
                Streamlined appointment scheduling
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Ready to Transform Your Healthcare Practice?
          </h3>
          <p className="text-lg text-black mb-8 leading-relaxed">
            Let's discuss how we can create a powerful platform that enhances patient care and streamlines your healthcare operations, just like we did for Vision Care.
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

export default VisionCareCaseStudy;
