import React from 'react';
import { LOOP } from './content';

const CoOptimization = () => (
  <section id="optimization" className="wz-section wz-section--alt">
    <div className="wz-shell">
      <div className="wz-sechead">
        <div className="wz-sechead__main">
          <span className="wz-eyebrow">The optimization loop</span>
          <h2 className="wz-h2">
            Ranking decays the moment you stop. <em>So we never do.</em>
          </h2>
        </div>
        <p className="wz-sechead__note">
          Optimization isn’t a one-off cleanup. Every week we re-test the photo order, re-cut the
          rate curve against demand and events, and chase reviews.
        </p>
      </div>

      <div className="wz-loop">
        {LOOP.map((l) => (
          <div key={l.tag} className="wz-loop__item">
            <span className="wz-loop__tag">{l.tag}</span>
            <p>{l.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CoOptimization;
