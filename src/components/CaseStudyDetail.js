import React from 'react';
import { ArrowLeft, ExternalLink, Calendar, Users, Clock, Target } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const CaseStudyDetail = ({ projectId }) => {
  // Sample project data - in a real app, this would come from props or API
  const projects = {
    1: {
      title: "Optimus Properties",
      subtitle: "Premium Real Estate Platform",
      categories: ["Real Estate", "Property"],
      url: "optimus-properties.com",
      description: "Premium Real Estate Solutions",
      bgColor: "bg-blue-50",
      accentColor: "bg-blue-600",
      client: "Optimus Properties Ltd",
      duration: "4 months",
      team: "5 people",
      year: "2024",
      challenge: "Optimus Properties needed a sophisticated real estate platform to showcase premium properties, manage client inquiries, and provide virtual property tours. They required a system that could handle high-value property listings with detailed information and professional presentation.",
      solution: "We created a comprehensive real estate platform featuring advanced property search, virtual tour integration, client portal, and automated lead management. The platform includes interactive property maps, detailed analytics, and seamless integration with CRM systems.",
      results: [
        { metric: "Property Views", value: "+280%", description: "Increase in property page visits" },
        { metric: "Lead Generation", value: "+320%", description: "More qualified inquiries" },
        { metric: "Sales Conversion", value: "+145%", description: "Improvement in closing rate" }
      ],
      technologies: ["React", "Next.js", "PostgreSQL", "Google Maps API", "Stripe", "AWS"],
      images: [
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
        "/api/placeholder/800/600"
      ]
    },
    2: {
      title: "EyeCatcher",
      subtitle: "Beauty & Hair Salon",
      categories: ["Beauty", "Hairs"],
      url: "eyecatcher-salon.com",
      description: "Eye Catcher der Salon",
      bgColor: "bg-green-50",
      accentColor: "bg-green-500",
      client: "EyeCatcher Salon",
      duration: "2 months",
      team: "3 people",
      year: "2024",
      challenge: "A premium beauty salon needed an elegant online presence with appointment booking, service showcase, and customer management system.",
      solution: "We created a sophisticated website with integrated booking system, portfolio gallery, and customer relationship management tools.",
      results: [
        { metric: "Online Bookings", value: "+300%", description: "Increase in online appointments" },
        { metric: "New Clients", value: "+120%", description: "Growth in customer acquisition" },
        { metric: "Revenue", value: "+95%", description: "Boost in monthly revenue" }
      ],
      technologies: ["React", "Firebase", "Stripe", "Google Calendar API"],
      images: [
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
        "/api/placeholder/800/600"
      ]
    }
  };

  const project = projects[projectId] || projects[1];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 sm:pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
        
        {/* Back Button */}
        <div className="absolute top-32 left-4 sm:left-8 z-20">
          <button className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-300">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Work</span>
          </button>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
          {/* Project Categories */}
          <div className="flex justify-center gap-2 mb-6 animate-fade-in">
            {project.categories.map((category, index) => (
              <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                {category}
              </span>
            ))}
          </div>

          {/* Main Heading */}
          <div className="space-y-4 mb-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight text-black">
              {project.title}
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-500 font-light">
              {project.subtitle}
            </p>
          </div>

          {/* Project URL */}
          <div className="mb-12 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <a 
              href={`https://${project.url}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-300"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="text-lg">{project.url}</span>
            </a>
          </div>

          {/* CTA Button */}
          <div className="animate-slide-up" style={{animationDelay: '0.6s'}}>
            <a 
              href="https://werzio.youcanbook.me/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary group no-underline"
            >
              <Calendar className="w-5 h-5" />
              Discuss Your Project
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Project Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Project Overview</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {project.description}
              </p>
              
              {/* Project Details */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-500">Client</span>
                  </div>
                  <p className="font-medium text-black">{project.client}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-500">Duration</span>
                  </div>
                  <p className="font-medium text-black">{project.duration}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-500">Team Size</span>
                  </div>
                  <p className="font-medium text-black">{project.team}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-500">Year</span>
                  </div>
                  <p className="font-medium text-black">{project.year}</p>
                </div>
              </div>
            </div>

            {/* Project Image */}
            <div className="relative">
              <div className={`${project.bgColor} rounded-2xl p-8 aspect-square flex items-center justify-center`}>
                <div className={`${project.accentColor} w-32 h-32 rounded-full flex items-center justify-center`}>
                  <span className="text-white text-4xl font-bold">{project.title[0]}</span>
                </div>
              </div>
            </div>
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
              <p className="text-lg text-gray-600 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* Solution */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">Our Solution</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {project.solution}
              </p>
              
              {/* Technologies */}
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">Results & Impact</h3>
            <p className="text-lg text-gray-600">Measurable outcomes from our collaboration</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {project.results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-black text-black mb-2">
                  {result.value}
                </div>
                <div className="text-lg font-medium text-gray-800 mb-2">
                  {result.metric}
                </div>
                <div className="text-sm text-gray-600">
                  {result.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Project CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Ready to Start Your Project?
          </h3>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Let's discuss how we can help bring your vision to life with the same dedication and expertise.
          </p>
          <a 
            href="https://werzio.youcanbook.me/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary group no-underline"
          >
            <Calendar className="w-5 h-5" />
            Book a Meeting
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudyDetail;
