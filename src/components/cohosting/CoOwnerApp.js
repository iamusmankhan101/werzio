import React from 'react';
import { OWNER_POINTS, LEDGER } from './content';

const CoOwnerApp = () => (
  <section id="dashboard" className="wz-section wz-section--alt">
    <div className="wz-shell">
      <div className="wz-owner">
        <div className="wz-owner__copy">
          <span className="wz-eyebrow">Owner app</span>
          <h2 className="wz-h2">Every booking, cost and payout — visible, always.</h2>
          <p className="wz-owner__lead">
            No monthly PDF you have to chase. Live calendar, itemised statement, one tap to block
            owner nights.
          </p>
          <ul className="wz-owner__list">
            {OWNER_POINTS.map((p) => <li key={p}>{p}</li>)}
          </ul>
        </div>

        <div className="wz-window">
          <div className="wz-window__bar">
            <i /><i /><i />
            <span className="wz-window__url">app.werzio.com / marina-2br</span>
          </div>

          <div className="wz-kpis">
            <div className="wz-kpi"><span>NET THIS MONTH</span><b>$6,240</b></div>
            <div className="wz-kpi"><span>OCCUPANCY</span><b>91%</b></div>
            <div className="wz-kpi"><span>VS AREA</span><b className="is-up">+22%</b></div>
            <div className="wz-kpi"><span>NEXT PAYOUT</span><b>Oct 5</b></div>
          </div>

          <div className="wz-ledger">
            {LEDGER.map((r) => (
              <div key={r.label} className="wz-ledger__row">
                <span className="wz-ledger__day">{r.day}</span>
                <div className="wz-ledger__body">
                  <div className="wz-ledger__label">{r.label}</div>
                  <div className="wz-ledger__meta">{r.meta}</div>
                </div>
                <span className={`wz-ledger__amt${r.kind === 'in' ? ' is-in' : r.kind === 'none' ? ' is-none' : ''}`}>
                  {r.amt}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CoOwnerApp;
