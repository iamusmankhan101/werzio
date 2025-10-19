import React, { useEffect, useRef, useState } from 'react';
import { Trophy, Monitor, Code, RotateCcw, Clock, Users, Zap, MessageCircle, ArrowUpRight, Calendar } from 'lucide-react';

const PricingSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('Design');
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = {
    Design: {
      price: "40$",
      pricePrefix: "",
      features: [
        "Online communication",
        "Unlimited design",
        "Fast turnaround",
        "Fixed hour rate",
        "Flexible scope",
        "Stop anytime"
      ],
      testimonial: {
        text: "Werzio created a website for us that exceeded all expectations. Professional, creative, and reliable. No one could have done it better. They are simply the best in the World.",
        author: "David Klin",
        company: "Freelancer/Care",
        avatar: "DK"
      }
    },
    Branding: {
      price: "6.500€",
      pricePrefix: "from ",
      features: [
        "One-off fee or milestone billing",
        "Tailored scope & deliverables",
        "Full documentation & assets",
        "End-to-end collaboration",
        "High-impact execution",
        "Workshops & reviews"
      ],
      testimonial: {
        text: "I'm very happy with the work Deniz did on my website. He was creative, professional, and paid great attention to detail. I can highly recommend his services.",
        author: "Hassan Kirio",
        company: "KS Abbruch",
        avatar: "HK"
      }
    }
  };

  const benefits = [
    { icon: Trophy, title: "Senior-level quality" },
    { icon: Monitor, title: "Systems thinking" },
    { icon: Code, title: "Developer-friendly" },
    { icon: RotateCcw, title: "Clear process" },
    { icon: Clock, title: "On-brand, every time" },
    { icon: Users, title: "Reliable partner" },
    { icon: Zap, title: "Fast execution" },
    { icon: MessageCircle, title: "Thoughtful feedback" },
    { icon: ArrowUpRight, title: "Smooth handoff" }
  ];

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-gray-500 text-sm italic mb-4">Pricing</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
            Fixed Price, Zero Limits
          </h2>
        </div>

        {/* Main Pricing Card */}
        <div className={`max-w-5xl mx-auto transition-all duration-1000 delay-300 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Side - Pricing */}
              <div>
                {/* Service Toggle Switch */}
                <div className="flex items-center justify-center mb-8">
                  <div className="relative bg-gray-200 rounded-full p-1 flex items-center">
                    {/* Toggle Background */}
                    <div 
                      className="absolute top-1 bottom-1 rounded-full transition-all duration-300 ease-in-out"
                      style={{
                        backgroundColor: '#ceec52',
                        width: '50%',
                        left: activeTab === 'Design' ? '4px' : '50%',
                        transform: activeTab === 'Design' ? 'translateX(0)' : 'translateX(-4px)'
                      }}
                    />
                    
                    {/* Toggle Options */}
                    <button
                      onClick={() => setActiveTab('Design')}
                      className={`relative z-10 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        activeTab === 'Design'
                          ? 'text-black'
                          : 'text-gray-600 hover:text-black'
                      }`}
                    >
                      Design
                    </button>
                    <button
                      onClick={() => setActiveTab('Branding')}
                      className={`relative z-10 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        activeTab === 'Branding'
                          ? 'text-black'
                          : 'text-gray-600 hover:text-black'
                      }`}
                    >
                      Branding
                    </button>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="text-5xl md:text-6xl font-black text-black mb-2">
                    {services[activeTab].pricePrefix && (
                      <span className="text-2xl md:text-3xl text-gray-400 font-normal mr-2">
                        {services[activeTab].pricePrefix}
                      </span>
                    )}
                    {services[activeTab].price}
                    {activeTab === 'Design' && (
                      <span className="text-2xl md:text-3xl text-gray-400 font-normal ml-2">
                        per Hour
                      </span>
                    )}
                  </div>
                </div>

                {/* Available Badge */}
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-gray-600">Available to work</span>
                </div>

                {/* CTA Button */}
                <a 
                  href="https://werzio.youcanbook.me/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors duration-300 flex items-center gap-2 no-underline"
                >
                  <Calendar size={16} />
                  Book a Meeting
                  <ArrowUpRight size={16} />
                </a>
              </div>

              {/* Right Side - Features */}
              <div>
                <h3 className="text-xl font-bold text-black mb-6">What's included</h3>
                <div className="space-y-4">
                  {services[activeTab].features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-gray-300 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Testimonial */}
                <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    "{services[activeTab].testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">{services[activeTab].testimonial.avatar}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-black text-sm">{services[activeTab].testimonial.author}</div>
                      <div className="text-gray-500 text-xs">{services[activeTab].testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className={`mt-16 transition-all duration-1000 delay-600 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className={`flex items-center gap-3 text-gray-600 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                  }`}
                  style={{ transitionDelay: `${800 + index * 100}ms` }}
                >
                  <IconComponent size={16} className="text-gray-500" />
                  <span className="text-sm">{benefit.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
