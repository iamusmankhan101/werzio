import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WorkShowcase from './components/WorkShowcase';
import StackingCardsSection from './components/StackingCardsSection';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';
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
    return <OptimusCaseStudy />;
  }

  if (currentPage === 'greenfuture-case-study') {
    return <GreenfutureCaseStudy />;
  }

  if (currentPage === 'optimus-luxe-case-study') {
    return <OptimusLuxeCaseStudy />;
  }

  if (currentPage === 'hawk-dispatch-case-study') {
    return <HawkDispatchCaseStudy />;
  }

  if (currentPage === 'optimus-rak-case-study') {
    return <OptimusRAKCaseStudy />;
  }

  if (currentPage === 'vision-care-case-study') {
    return <VisionCareCaseStudy />;
  }

  if (currentPage === 'black-n-white-case-study') {
    return <BlackNWhiteCaseStudy />;
  }

  return (
    <div className="App min-h-screen">
      <Header />
      <HeroSection />
      <WorkShowcase />
      <StackingCardsSection />
      <ServicesSection />
      <ProcessSection />
      <PricingSection />
      <Footer />
    </div>
  );
}

export default App;
