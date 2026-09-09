import React, { useEffect } from 'react';
import './cohosting.css';
import CoHeader from './CoHeader';
import CoHero from './CoHero';
import CoTrust from './CoTrust';
import CoAudit from './CoAudit';
import CoManage from './CoManage';
import CoOptimization from './CoOptimization';
import CoPricing from './CoPricing';
import CoFaq from './CoFaq';
import CoContact from './CoContact';
import CoFooter from './CoFooter';

const HEADER_HEIGHT = 90;

const CohostingHome = () => {
  // The browser's own anchor jump runs before React mounts these sections, so a
  // deep link like /#pricing would otherwise land at the top of the page.
  // scrollIntoView is avoided here: it also scrolls clipping ancestors.
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return undefined;

    const timer = setTimeout(() => {
      const target = document.getElementById(id);
      if (!target) return;
      const top = target.getBoundingClientRect().top + window.pageYOffset - HEADER_HEIGHT;
      window.scrollTo(0, Math.max(0, top));
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="wz">
      <CoHeader />
      <main>
        <CoHero />
        <CoTrust />
        <CoAudit />
        <CoManage />
        <CoOptimization />
        <CoPricing />
        <CoFaq />
        <CoContact />
      </main>
      <CoFooter />
    </div>
  );
};

export default CohostingHome;
