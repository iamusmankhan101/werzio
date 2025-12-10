import React, { useState, useEffect } from 'react';
import './animations.css';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import HeroSection from './components/HeroSection';
import PartnersSection from './components/PartnersSection';
import WorkSection from './components/WorkSection';
import AboutUsSection from './components/AboutUsSection';
import ServicesStackSection from './components/ServicesStackSection';
import ApproachSection from './components/ApproachSection';
import CTASection from './components/CTASection';
import AboutSection from './components/AboutSection';
import WorkShowcase from './components/WorkShowcase';
import ProcessSection from './components/ProcessSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';
import FooterNew from './components/FooterNew';
import OptimusCaseStudy from './components/OptimusCaseStudy';
import GreenfutureCaseStudy from './components/GreenfutureCaseStudy';
import OptimusLuxeCaseStudy from './components/OptimusLuxeCaseStudy';
import HawkDispatchCaseStudy from './components/HawkDispatchCaseStudy';
import OptimusRAKCaseStudy from './components/OptimusRAKCaseStudy';
import VisionCareCaseStudy from './components/VisionCareCaseStudy';
import BlackNWhiteCaseStudy from './components/BlackNWhiteCaseStudy';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Simple routing based on URL hash
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // Remove the #
      if (hash === 'optimus-case-study') {
        setCurrentPage('optimus-case-study');
      } else if (hash === 'greenfuture-case-study') {
        setCurrentPage('greenfuture-case-study');
      } else if (hash === 'optimus-luxe-case-study') {
        setCurrentPage('optimus-luxe-case-study');
      } else if (hash === 'hawk-dispatch-case-study') {
        setCurrentPage('hawk-dispatch-case-study');
      } else if (hash === 'optimus-rak-case-study') {
        setCurrentPage('optimus-rak-case-study');
      } else if (hash === 'vision-care-case-study') {
        setCurrentPage('vision-care-case-study');
      } else if (hash === 'black-n-white-case-study') {
        setCurrentPage('black-n-white-case-study');
      } else {
        setCurrentPage('home');
      }
    };

    // Check initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    // Expose navigation function globally for easy access
    window.navigateTo = (page) => {
      window.location.hash = page;
    };

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  if (currentPage === 'optimus-case-study') {
    return (
      <>
        <OptimusCaseStudy />
        <FooterNew />
      </>
    );
  }

  if (currentPage === 'greenfuture-case-study') {
    return (
      <>
        <GreenfutureCaseStudy />
        <FooterNew />
      </>
    );
  }

  if (currentPage === 'optimus-luxe-case-study') {
    return (
      <>
        <OptimusLuxeCaseStudy />
        <FooterNew />
      </>
    );
  }

  if (currentPage === 'hawk-dispatch-case-study') {
    return (
      <>
        <HawkDispatchCaseStudy />
        <FooterNew />
      </>
    );
  }

  if (currentPage === 'optimus-rak-case-study') {
    return (
      <>
        <OptimusRAKCaseStudy />
        <FooterNew />
      </>
    );
  }

  if (currentPage === 'vision-care-case-study') {
    return (
      <>
        <VisionCareCaseStudy />
        <FooterNew />
      </>
    );
  }

  if (currentPage === 'black-n-white-case-study') {
    return (
      <>
        <BlackNWhiteCaseStudy />
        <FooterNew />
      </>
    );
  }

  return (
    <div className="App min-h-screen">
      <BottomNav />
      <div id="home">
        <HeroSection />
      </div>
      <PartnersSection />
      <div id="work">
        <WorkSection />
      </div>
      <div id="about">
        <AboutUsSection />
      </div>
      <div id="services">
        <ServicesStackSection />
      </div>
      <ApproachSection />
      <div id="contact">
        <CTASection />
      </div>
      <FooterNew />
    </div>
  );
}

export default App;
