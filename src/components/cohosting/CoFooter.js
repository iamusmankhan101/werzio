import React from 'react';
import BrandMark from './BrandMark';
import { BRAND } from './content';

const CoFooter = () => (
  <footer className="wz-footer">
    <div className="wz-shell wz-footer__inner">
      <div className="wz-footer__brand">
        <BrandMark size={18} />
        <span>{BRAND}</span>
      </div>
      <span>Co-hosting &amp; listing optimization</span>
      <a href="#faq">Terms</a>
      <a href="#faq">Privacy</a>
      <span>© {new Date().getFullYear()}</span>
    </div>
  </footer>
);

export default CoFooter;
