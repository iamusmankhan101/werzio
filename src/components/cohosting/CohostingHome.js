import React, { useEffect, useRef, useState } from 'react';
import './cohosting.css';
import CoHeader from './CoHeader';
import CoHero from './CoHero';
import CoAudit from './CoAudit';
import CoManage from './CoManage';
import CoOptimization from './CoOptimization';
import CoProcess from './CoProcess';
import CoOwnerApp from './CoOwnerApp';
import CoPricing from './CoPricing';
import CoQuotes from './CoQuotes';
import CoFaq from './CoFaq';
import CoContact from './CoContact';
import CoFooter from './CoFooter';

const HEADER_HEIGHT = 68;

const CohostingHome = () => {
  const heroRef = useRef(null);
  const [overHero, setOverHero] = useState(true);

  // The hero is near-black, so the header inverts while it sits over it.
  // Shrinking the observer root by the header height means the switch fires
  // exactly when the hero's bottom edge passes under the header band.
  useEffect(() => {
    const el = heroRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setOverHero(entry.isIntersecting),
      { rootMargin: `-${HEADER_HEIGHT}px 0px 0px 0px`, threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // The browser's own anchor jump runs before React mounts these sections, so a
  // deep link like /#pricing would otherwise land at the top of the page.
  // scrollIntoView is avoided here: overflow-x:hidden on .wz and body turns them
  // into scroll containers, and it scrolls those too, leaving a blank viewport.
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
      <CoHeader onDark={overHero} />
      <main>
        <div ref={heroRef}>
          <CoHero />
        </div>
        <CoAudit />
        <CoManage />
        <CoOptimization />
        <CoProcess />
        <CoOwnerApp />
        <CoPricing />
        <CoQuotes />
        <CoFaq />
        <CoContact />
      </main>
      <CoFooter />
    </div>
  );
};

export default CohostingHome;
