import React from 'react';
import { HERO_PILLARS, BASELINE, MANAGED } from './content';

// Each column stacks the managed uplift on top of the self-managed baseline,
// so the green segment reads as the revenue the optimization loop adds.
const peak = Math.max(...MANAGED);
const columns = BASELINE.map((self, i) => ({
  self: (self / peak) * 97,
  uplift: ((MANAGED[i] - self) / peak) * 97
}));

const CoHero = () => (
  <section id="top" className="wz-hero">
    <div className="wz-shell wz-hero__inner">
      <div className="wz-hero__copy">
        <span className="wz-eyebrow wz-hero__eyebrow">Co-hosting &amp; listing optimization</span>
        <h1 className="wz-hero__title">
          Same apartment. <em>Thirty-one percent more revenue.</em>
        </h1>
        <p className="wz-hero__lead">
          We manage the listing end to end — pricing, content, guests, turnovers, reviews — and
          treat it as an asset to be optimized, not a calendar to be filled.
        </p>
        <div className="wz-hero__actions">
          <a href="#contact" className="wz-btn wz-btn--green">Get my revenue forecast</a>
          <a href="#optimization" className="wz-btn wz-btn--outline">See what we optimize</a>
        </div>
      </div>

      <div className="wz-chart wz-chart--hero">
        <div className="wz-chart__head">
          <span>1BR · CITY CENTRE · 12 MONTHS</span>
          <span className="wz-chart__delta wz-mono">+31.4%</span>
        </div>

        <div className="wz-chart__bars">
          {columns.map((c, i) => (
            <div key={i} className="wz-chart__col">
              <div
                className="wz-chart__seg wz-chart__seg--us"
                style={{ height: `${c.uplift}%`, animationDelay: `${0.35 + i * 0.06}s` }}
              />
              <div
                className="wz-chart__seg wz-chart__seg--self"
                style={{ height: `${c.self}%`, animationDelay: `${i * 0.06}s` }}
              />
            </div>
          ))}
        </div>

        <div className="wz-legend">
          <span><i style={{ background: 'rgba(255,255,255,.22)' }} />Self-managed</span>
          <span><i style={{ background: 'var(--green)' }} />With Werzio</span>
        </div>

        <div className="wz-chart__stats">
          <div className="wz-chart__stat"><b>91%</b><span>occupancy</span></div>
          <div className="wz-chart__stat"><b>$214</b><span>avg nightly</span></div>
          <div className="wz-chart__stat"><b>4.93</b><span>rating</span></div>
        </div>
      </div>
    </div>

    <div className="wz-shell wz-hero__pillars">
      {HERO_PILLARS.map((p) => (
        <div key={p.tag} className="wz-pillar">
          <span className="wz-pillar__tag">{p.tag}</span>
          <span className="wz-pillar__body">{p.body}</span>
        </div>
      ))}
    </div>
  </section>
);

export default CoHero;
