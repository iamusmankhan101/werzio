import React from 'react';
import { STEPS } from './content';

const CoProcess = () => (
  <section id="process" className="wz-section">
    <div className="wz-shell">
      <div className="wz-sechead">
        <h2 className="wz-h2" style={{ maxWidth: '22ch' }}>Live in about ten days.</h2>
        <span className="wz-eyebrow">How it works</span>
      </div>

      <div className="wz-steps">
        {STEPS.map((st) => (
          <div key={st.n} className="wz-step">
            <span className="wz-step__n">{st.n}</span>
            <h3>{st.title}</h3>
            <p>{st.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CoProcess;
