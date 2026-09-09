import React from 'react';
import { FINDINGS, STATS } from './content';
import useInView from './useInView';
import useCountUp, { formatStat } from './useCountUp';
import aboutImage from '../../images/wz-skyline.jpg';

const StatCard = ({ stat, index, active }) => {
  const n = useCountUp(stat.count.to, active, 1150 + index * 120);
  return (
    <div
      className={`wz-statcard wz-reveal${active ? ' is-in' : ''}`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <span className="wz-statcard__n">{`///0${index + 1}`}</span>
      <b>{formatStat(n, stat.count)}</b>
      <span>{stat.label}</span>
    </div>
  );
};

const CoAudit = () => {
  const [headRef, headIn] = useInView();
  const [figureRef, figureIn] = useInView({ threshold: 0.25 });
  const [statsRef, statsIn] = useInView({ threshold: 0.4 });
  const [auditRef, auditIn] = useInView({ threshold: 0.2 });

  const score = useCountUp(51, auditIn, 1250);

  return (
    <section id="audit" className="wz-section">
      <div className="wz-shell">
        <div className="wz-statement">
          <div className="wz-statement__side" ref={figureRef}>
            <span className={`wz-eyebrow wz-reveal${figureIn ? ' is-in' : ''}`}>About us</span>
            <div className={`wz-figure wz-reveal${figureIn ? ' is-in' : ''}`}>
              <img src={aboutImage} alt="City skyline at sunset" />
            </div>
          </div>

          <div className="wz-statement__main">
            <h2
              ref={headRef}
              className={`wz-statement__title wz-reveal${headIn ? ' is-in' : ''}`}
            >
              We manage short-let listings end to end — pricing, content, guests and
              turnovers. <em>Your listing is leaving money on the table, and we can show you
              exactly where.</em>
            </h2>

            <div className="wz-statcards" ref={statsRef}>
              {STATS.slice(0, 3).map((stat, i) => (
                <StatCard key={stat.label} stat={stat} index={i} active={statsIn} />
              ))}
            </div>
          </div>
        </div>

        <div ref={auditRef} className={`wz-audit wz-reveal${auditIn ? ' is-in' : ''}`}>
          <div className="wz-audit__side">
            <div className="wz-audit__label">
              <span>SAMPLE AUDIT</span>
              <span className="wz-audit__flag">UNDERPERFORMING</span>
            </div>
            <div className="wz-audit__score">
              <b>{Math.round(score)}</b>
              <span>/ 100</span>
            </div>
            <div className="wz-meter">
              <div className="wz-meter__fill" style={{ width: auditIn ? '51%' : '0%' }} />
            </div>
            <p className="wz-audit__copy">
              Pricing and conversion are the two biggest gaps. Both are fixable inside the first
              two weeks.
            </p>
            <div className="wz-audit__facts">
              <div className="wz-audit__fact"><span>Recoverable revenue</span><b>$1,850 / mo</b></div>
              <div className="wz-audit__fact"><span>Findings</span><b>5 of 11 shown</b></div>
              <div className="wz-audit__fact"><span>Fixed during onboarding</span><b>All of them</b></div>
            </div>
          </div>

          <div className="wz-audit__rows">
            {FINDINGS.map((f, i) => (
              <div
                key={f.title}
                className={`wz-finding wz-reveal${auditIn ? ' is-in' : ''}${f.high ? ' wz-finding--high' : ''}`}
                style={{ transitionDelay: `${180 + i * 90}ms` }}
              >
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
};

export default CoAudit;
