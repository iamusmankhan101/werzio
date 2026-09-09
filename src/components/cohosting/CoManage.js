import React from 'react';
import { SERVICES, SERVICES_HEADING, SERVICES_HEADING_TEXT } from './content';
import useInView from './useInView';
import SplitText from './SplitText';

const ServiceCard = ({ service, index }) => (
  <article className="wz-service">
    <span className="wz-service__n">{`0${index + 1}.`}</span>
    <h3>{service.title}</h3>
    <p>{service.body}</p>
  </article>
);

const CoManage = () => {
  const [headRef, headIn] = useInView();
  const [railRef, railIn] = useInView({ threshold: 0.05 });

  return (
    <section id="manage" className="wz-section wz-section--dark wz-manage">
      <div className="wz-shell">
        <div className="wz-sechead">
          <div className="wz-sechead__main">
            <span className={`wz-eyebrow wz-reveal${headIn ? ' is-in' : ''}`}>Our services</span>
            <h2 ref={headRef} className="wz-h2" aria-label={SERVICES_HEADING_TEXT}>
              <SplitText segments={SERVICES_HEADING} active={headIn} />
            </h2>
          </div>
          <p className={`wz-sechead__note wz-reveal${headIn ? ' is-in' : ''}`} style={{ transitionDelay: '260ms' }}>
            You keep ownership, pricing veto and owner nights. We keep the pager.
          </p>
        </div>
      </div>

      {/* Two identical groups scroll as one track; the animation resets at -50%,
          which is exactly one group, so the loop has no visible seam. */}
      <div ref={railRef} className={`wz-marquee wz-reveal${railIn ? ' is-in' : ''}`}>
        <div className="wz-marquee__track">
          {[0, 1].map((copy) => (
            <div className="wz-marquee__group" key={copy} aria-hidden={copy === 1}>
              {SERVICES.map((service, i) => (
                <ServiceCard key={`${copy}-${service.title}`} service={service} index={i} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoManage;
