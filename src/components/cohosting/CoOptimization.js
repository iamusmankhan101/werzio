import React from 'react';
import { LOOP } from './content';
import useInView from './useInView';

const LoopCard = ({ item, index }) => {
  const ref = useInView({ threshold: 0.2 });
  const isVisible = ref.isVisible;
  
  const icons = {
    WEEKLY: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
        <path d="M16 8V16L21 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    MONTHLY: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="8" width="20" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
        <path d="M10 14L14 18L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    QUARTERLY: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 6L28 26H4L16 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" opacity="0.3"/>
        <circle cx="16" cy="18" r="3" fill="currentColor"/>
      </svg>
    ),
    ALWAYS: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4C9.373 4 4 9.373 4 16S9.373 28 16 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
        <path d="M28 16C28 22.627 22.627 28 16 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M20 12L16 16L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  };

  return (
    <div 
      ref={ref.ref}
      className={`wz-loop__item wz-reveal ${isVisible ? 'is-in' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="wz-loop__icon">{icons[item.tag]}</div>
      <span className="wz-loop__tag">{item.tag}</span>
      <p>{item.body}</p>
    </div>
  );
};

const CoOptimization = () => {
  const headerRef = useInView({ threshold: 0.3 });
  
  return (
    <section id="optimization" className="wz-section wz-section--alt">
      <div className="wz-shell">
        <div className="wz-sechead">
          <div className="wz-sechead__main">
            <span className={`wz-eyebrow wz-reveal ${headerRef.isVisible ? 'is-in' : ''}`}>
              The optimization loop
            </span>
            <h2 className={`wz-h2 wz-reveal ${headerRef.isVisible ? 'is-in' : ''}`}>
              Ranking decays the moment you stop. <em>So we never do.</em>
            </h2>
          </div>
          <p className={`wz-sechead__note wz-reveal ${headerRef.isVisible ? 'is-in' : ''}`}>
            Optimization isn't a one-off cleanup. Every week we re-test the photo order, re-cut the
            rate curve against demand and events, and chase reviews.
          </p>
        </div>

        <div className="wz-loop">
          {LOOP.map((item, index) => (
            <LoopCard key={item.tag} item={item} index={index} />
          ))}
        </div>

        <div className={`wz-loop-cta wz-reveal ${headerRef.isVisible ? 'is-in' : ''}`}>
          <div className="wz-loop-cta__content">
            <p className="wz-loop-cta__text">
              This continuous cycle keeps your listing ahead of competitors and maximizes revenue year-round.
            </p>
            <div className="wz-loop-cta__stat">
              <span className="wz-loop-cta__value">+31%</span>
              <span className="wz-loop-cta__label">median revenue lift in 90 days</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoOptimization;
