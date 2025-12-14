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
import TrackerCaseStudy from './components/TrackerCaseStudy';
import DynamicProjectPage from './components/DynamicProjectPage';
import ReviewsSection from './components/ReviewsSection';

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
      } else if (hash === 'tracker-case-study') {
        setCurrentPage('tracker-case-study');
      } else if (hash === 'spatial-case-study') {
        setCurrentPage('spatial-case-study');
      } else if (hash === 'nexus-case-study') {
        setCurrentPage('nexus-case-study');
      } else if (hash === 'optimus-detail') {
        setCurrentPage('optimus-detail');
      } else if (hash === 'greenfuture-detail') {
        setCurrentPage('greenfuture-detail');
      } else if (hash === 'hawk-dispatch-detail') {
        setCurrentPage('hawk-dispatch-detail');
      } else if (hash === 'black-n-white-detail') {
        setCurrentPage('black-n-white-detail');
      } else if (hash === 'vision-care-detail') {
        setCurrentPage('vision-care-detail');
      } else if (hash === 'optimus-luxe-detail') {
        setCurrentPage('optimus-luxe-detail');
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

  if (currentPage === 'tracker-case-study') {
    return (
      <>
        <DynamicProjectPage projectId="tracker" />
        <FooterNew />
      </>
    );
  }

  if (currentPage === 'spatial-case-study') {
    return (
      <>
        <DynamicProjectPage projectId="spatial" />
        <FooterNew />
      </>
    );
  }

  if (currentPage === 'nexus-case-study') {
    return (
      <>
        <DynamicProjectPage projectId="nexus" />
        <FooterNew />
      </>
    );
  }

  if (currentPage === 'optimus-detail') {
    return (
      <>
        <DynamicProjectPage projectId="optimus" />
        <FooterNew />
      </>
    );
  }

  if (currentPage === 'greenfuture-detail') {
    return (
      <>
        <DynamicProjectPage projectId="greenfuture" />
        <FooterNew />
      </>
    );
  }

  if (currentPage === 'hawk-dispatch-detail') {
    return (
      <>
        <DynamicProjectPage projectId="hawk-dispatch" />
        <FooterNew />
      </>
    );
  }

  if (currentPage === 'black-n-white-detail') {
    return (
      <>
        <DynamicProjectPage projectId="black-n-white" />
        <FooterNew />
      </>
    );
  }

  if (currentPage === 'vision-care-detail') {
    return (
      <>
        <DynamicProjectPage projectId="vision-care" />
        <FooterNew />
      </>
    );
  }

  if (currentPage === 'optimus-luxe-detail') {
    return (
      <>
        <DynamicProjectPage projectId="optimus-luxe" />
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
      <ReviewsSection />
      <div id="contact">
        <CTASection />
      </div>
      <FooterNew />
    </div>
  );
}

export default App;
