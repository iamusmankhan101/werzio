import React from 'react';
import { FINDINGS, STATS } from './content';

const CoAudit = () => (
  <section id="audit" className="wz-section">
    <div className="wz-shell">
      <div className="wz-sechead">
        <div className="wz-sechead__main">
          <span className="wz-eyebrow">Start here</span>
          <h2 className="wz-h2">Your listing is leaving money on the table.</h2>
        </div>
        <p className="wz-sechead__note">
          We score the live listing first — title, photo order, amenity gaps, rate curve, review
          velocity — and show you the recoverable revenue before you commit to anything.
        </p>
      </div>

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

      <div className="wz-stats" style={{ marginTop: '46px' }}>
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

export default CoAudit;
