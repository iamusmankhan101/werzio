import React from 'react';
import { FINDINGS, STATS } from './content';
import aboutImage from '../../images/wz-skyline.jpg';

const CoAudit = () => (
  <section id="audit" className="wz-section">
    <div className="wz-shell">
      <div className="wz-statement">
        <div className="wz-statement__side">
          <span className="wz-eyebrow">About us</span>
          <div className="wz-figure">
            <img src={aboutImage} alt="City skyline at sunset" />
          </div>
        </div>

        <div className="wz-statement__main">
          <h2 className="wz-statement__title">
            We manage short-let listings end to end — pricing, content, guests and
            turnovers. <em>Your listing is leaving money on the table, and we can show you
            exactly where.</em>
          </h2>

          <div className="wz-statcards">
            {STATS.slice(0, 3).map((s, i) => (
              <div key={s.label} className="wz-statcard">
                <span className="wz-statcard__n">{`///0${i + 1}`}</span>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
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
    </div>
  </section>
);

export default CoAudit;
