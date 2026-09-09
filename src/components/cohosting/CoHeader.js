import React, { useState } from 'react';
import BrandMark from './BrandMark';
import { BRAND, NAV } from './content';

const CoHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="wz-header">
      <div className="wz-shell wz-header__inner">
        <a href="#top" className="wz-brand" onClick={() => setOpen(false)}>
          <BrandMark />
          <span className="wz-brand__name">
            {BRAND}<span className="wz-brand__tm">™</span>
          </span>
        </a>

        <nav className="wz-nav">
          {NAV.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <a href="#contact" className="wz-header__cta">Free listing audit</a>

        <button
          type="button"
          className="wz-burger"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>

      <nav className={`wz-shell wz-mobilenav${open ? ' is-open' : ''}`}>
        {NAV.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
        ))}
        <a href="#contact" onClick={() => setOpen(false)}>Free listing audit</a>
      </nav>
    </header>
  );
};

export default CoHeader;
