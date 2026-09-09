import React from 'react';
import heroImage from '../../images/wz-hero-interior.jpg';
import recentThumb from '../../images/wz-lobby.jpg';

const CoHero = () => (
  <section id="top" className="wz-hero">
    <div className="wz-hero__frame">
      <img className="wz-hero__img" src={heroImage} alt="Furnished apartment overlooking the city skyline" />

      {/* Image runs edge to edge; the copy stays on the same column as the rest
          of the page. */}
      <div className="wz-shell wz-hero__inner">
        <h1 className="wz-hero__display">list.host.earn</h1>

        <div className="wz-hero__foot">
          <div className="wz-hero__pitch">
            <span className="wz-eyebrow wz-hero__eyebrow">Full-service co-hosting</span>
            <p className="wz-hero__sub">Listings managed to outperform the ones next door.</p>
            <div className="wz-hero__actions">
              <a href="#contact" className="wz-btn wz-btn--primary">Get my revenue forecast</a>
              <a href="#manage" className="wz-btn wz-btn--outline">What we manage</a>
            </div>
          </div>

          <div className="wz-recent">
            <img className="wz-recent__thumb" src={recentThumb} alt="" />
            <div className="wz-recent__body">
              <span className="wz-recent__label">Recent result</span>
              <span className="wz-recent__title">Marina 2BR</span>
              <span className="wz-recent__meta">+31% revenue in 90 days</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CoHero;
