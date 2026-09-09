import React from 'react';
import { LOOP, BASELINE, MANAGED } from './content';

// Each column stacks the managed uplift on top of the self-managed baseline,
// so the green segment reads as the revenue the optimization loop adds.
const peak = Math.max(...MANAGED);
const columns = BASELINE.map((self, i) => ({
  self: (self / peak) * 97,
  uplift: ((MANAGED[i] - self) / peak) * 97
}));

const CoOptimization = () => (
  <section id="optimization" className="wz-section wz-section--dark">
    <div className="wz-shell">
      <div className="wz-opt">
        <div className="wz-opt__copy">
          <span className="wz-eyebrow">The optimization loop</span>
          <h2 className="wz-opt__title">
            Same apartment. <em>Thirty-one percent more revenue.</em>
          </h2>
          <p className="wz-opt__lead">
            Optimization isn’t a one-off cleanup. Every week we re-test the photo order, re-cut the
            rate curve against demand and events, and chase reviews — because ranking decays the
            moment you stop.
          </p>
          <div className="wz-loop">
            {LOOP.map((l) => (
              <div key={l.tag} className="wz-loop__item">
                <span className="wz-loop__tag">{l.tag}</span>
                <p>{l.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="wz-chart">
          <div className="wz-chart__head">
            <span>1BR · CITY CENTRE · 12 MONTHS</span>
            <span className="wz-chart__delta wz-mono">+31.4%</span>
          </div>

          <div className="wz-chart__bars">
            {columns.map((c, i) => (
              <div key={i} className="wz-chart__col">
                <div className="wz-chart__seg wz-chart__seg--us" style={{ height: `${c.uplift}%` }} />
                <div className="wz-chart__seg wz-chart__seg--self" style={{ height: `${c.self}%` }} />
              </div>
            ))}
          </div>

          <div className="wz-legend">
            <span><i style={{ background: 'var(--green)' }} />With Werzio</span>
            <span><i style={{ background: 'rgba(255,255,255,.22)' }} />Self-managed baseline</span>
          </div>

          <div className="wz-chart__stats">
            <div className="wz-chart__stat"><b>91%</b><span>occupancy</span></div>
            <div className="wz-chart__stat"><b>$214</b><span>avg nightly</span></div>
            <div className="wz-chart__stat"><b>4.93</b><span>rating</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CoOptimization;
