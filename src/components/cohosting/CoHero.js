import React from 'react';
import { FINDINGS, STATS } from './content';

const CoHero = () => (
  <section id="top" className="wz-hero">
    <div className="wz-shell wz-hero__head">
      <span className="wz-badge">CO-HOSTING &amp; LISTING OPTIMIZATION</span>
      <h1 className="wz-hero__title">Your listing is leaving money on the table.</h1>
      <p className="wz-hero__sub">
        We take over the whole listing — content, pricing, guests, turnovers, reviews — and keep
        optimizing it against real demand data. You keep the keys, the rate floor and your owner
        nights.
      </p>
      <div className="wz-hero__actions">
        <a href="#contact" className="wz-btn wz-btn--primary">Get my free listing audit</a>
        <a href="#optimization" className="wz-btn wz-btn--ghost">See what we optimize</a>
      </div>
      <span className="wz-hero__note">
        Free, no commitment. Works with the major booking platforms.
      </span>
    </div>

    <div className="wz-shell" style={{ paddingBottom: '20px' }}>
      <div className="wz-audit">
        <div className="wz-audit__side">
          <div className="wz-audit__label">
            <span>SAMPLE AUDIT</span>
            <span className="wz-audit__flag">UNDERPERFORMING</span>
          </div>
          <div className="wz-audit__score">
            <b>51</b>
            <span>/ 100</span>
          </div>
          <div className="wz-meter">
            <div className="wz-meter__fill" style={{ width: '51%' }} />
          </div>
          <p className="wz-audit__copy">
            Pricing and conversion are the two biggest gaps. Both are fixable inside the first two
            weeks.
          </p>
          <div className="wz-audit__facts">
            <div className="wz-audit__fact"><span>Recoverable revenue</span><b>$1,850 / mo</b></div>
            <div className="wz-audit__fact"><span>Findings</span><b>5 of 11 shown</b></div>
            <div className="wz-audit__fact"><span>Fixed during onboarding</span><b>All of them</b></div>
          </div>
        </div>

        <div className="wz-audit__rows">
          {FINDINGS.map((f, i) => (
            <div key={f.title} className={`wz-finding${f.high ? ' wz-finding--high' : ''}`}>
              <span className="wz-finding__n">{i + 1}</span>
              <div className="wz-finding__body">
                <div className="wz-finding__title">{f.title}</div>
                <div className="wz-finding__note">{f.body}</div>
              </div>
              <span className="wz-finding__sev">{f.high ? 'HIGH' : 'MED'}</span>
            </div>
          ))}
          <div className="wz-audit__cta">
            <p>Rather not do the fixing yourself? We manage the whole listing from here.</p>
            <a href="#pricing" className="wz-btn wz-btn--light wz-btn--sm">Hand it over</a>
          </div>
        </div>
      </div>
    </div>

    <div className="wz-shell" style={{ paddingTop: '26px', paddingBottom: '66px' }}>
      <div className="wz-stats">
        {STATS.map((s) => (
          <div key={s.label} className="wz-stat">
            <b>{s.value}</b>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CoHero;
