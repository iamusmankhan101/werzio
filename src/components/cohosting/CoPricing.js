import React from 'react';
import { PLANS } from './content';

const CoPricing = () => (
  <section id="pricing" className="wz-section">
    <div className="wz-shell">
      <div className="wz-pricing__head">
        <span className="wz-eyebrow">Pricing</span>
        <h2 className="wz-h2" style={{ maxWidth: '24ch' }}>We earn when your listing earns.</h2>
        <p>
          No setup fee, no markup on maintenance, 60-day notice. Empty calendar, no invoice.
        </p>
      </div>

      <div className="wz-plans">
        {PLANS.map((plan) => (
          <div key={plan.tier} className={`wz-plan${plan.feature ? ' wz-plan--feature' : ''}`}>
            {plan.flag && <span className="wz-plan__flag">{plan.flag}</span>}
            <span className="wz-plan__tier">{plan.tier}</span>
            <div className="wz-plan__price">
              <b>{plan.price}</b>
              {plan.unit && <span>{plan.unit}</span>}
            </div>
            <p className="wz-plan__copy">{plan.copy}</p>
            <div className="wz-plan__rule" />
            <ul className="wz-plan__feats">
              {plan.feats.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <div className="wz-plan__cta">
              <a
                href={plan.href}
                className={`wz-btn ${plan.feature ? 'wz-btn--light' : 'wz-btn--ghost'}`}
              >
                {plan.cta}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CoPricing;
