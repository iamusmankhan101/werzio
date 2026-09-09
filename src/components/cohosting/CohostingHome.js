import React from 'react';
import './cohosting.css';
import CoHeader from './CoHeader';
import CoHero from './CoHero';
import CoManage from './CoManage';
import CoOptimization from './CoOptimization';
import CoProcess from './CoProcess';
import CoOwnerApp from './CoOwnerApp';
import CoPricing from './CoPricing';
import CoQuotes from './CoQuotes';
import CoFaq from './CoFaq';
import CoContact from './CoContact';
import CoFooter from './CoFooter';

const CohostingHome = () => (
  <div className="wz">
    <CoHeader />
    <main>
      <CoHero />
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

export default CohostingHome;
