import React, { useState } from 'react';
import { ArrowRight, Check, ShieldCheck, Zap, BarChart3, Calculator } from 'lucide-react';
import { PLANS } from './content';

const CoPricing = () => {
  const [revenue, setRevenue] = useState(8000);
  const [showCalculator, setShowCalculator] = useState(false);

  // Revenue lift estimate (approx 31% lift)
  const estimatedBoost = Math.round(revenue * 0.31);
  const netEarningsWithGrowth = revenue + estimatedBoost - 129;
  const netEarningsWithSEO = revenue + Math.round(revenue * 0.20) - 89;

  return (
    <section id="pricing" className="wz-section">
      <div className="wz-shell">
        <div className="wz-pricing__head">
          <span className="wz-eyebrow">Transparent Pricing</span>
          <h2 className="wz-h2" style={{ maxWidth: '24ch' }}>Simple flat monthly plans for every host.</h2>
          <p>
            No percentage cuts of your revenue, no hidden setup fees, and cancel anytime with zero lock-in.
          </p>

          <button
            type="button"
            className="wz-calc-toggle"
            onClick={() => setShowCalculator(!showCalculator)}
          >
            <Calculator size={16} />
            {showCalculator ? 'Hide Revenue Estimator' : 'Interactive ROI Estimator'}
          </button>
        </div>

        {showCalculator && (
          <div className="wz-calc-box">
            <div className="wz-calc-header">
              <div className="wz-calc-title">
                <BarChart3 size={20} className="wz-calc-icon" />
                <div>
                  <h4>Estimate Your Monthly Revenue Growth</h4>
                  <p>Select your current monthly revenue to see estimated lift after optimization</p>
                </div>
              </div>
              <div className="wz-calc-badge">+31% Median Revenue Lift</div>
            </div>

            <div className="wz-calc-slider-wrap">
              <div className="wz-calc-val">
                <span>Current Monthly Revenue</span>
                <b>${revenue.toLocaleString()}</b>
              </div>
              <input
                type="range"
                min="2000"
                max="30000"
                step="500"
                value={revenue}
                onChange={(e) => setRevenue(Number(e.target.value))}
                className="wz-calc-slider"
              />
              <div className="wz-calc-ticks">
                <span>$2,000</span>
                <span>$10,000</span>
                <span>$20,000</span>
                <span>$30,000</span>
              </div>
            </div>

            <div className="wz-calc-grid">
              <div className="wz-calc-card">
                <span className="wz-calc-card__tier">LISTING &amp; SEO ($89/MO)</span>
                <div className="wz-calc-card__net">
                  <span>Est. Monthly Net (+20% Lift)</span>
                  <b>${netEarningsWithSEO.toLocaleString()}</b>
                  <small>Flat Fee: $89/mo · You keep 99%+ of earnings</small>
                </div>
              </div>

              <div className="wz-calc-card wz-calc-card--featured">
                <span className="wz-calc-card__tier">GROWTH &amp; DIRECT BOOKING ($129/MO)</span>
                <div className="wz-calc-card__net">
                  <span>Est. Monthly Net (+31% Lift)</span>
                  <b>${netEarningsWithGrowth.toLocaleString()}</b>
                  <small>Flat Fee: $129/mo · Direct site + SMS/Email retargeting</small>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="wz-plans">
          {PLANS.map((plan) => (
            <div key={plan.tier} className={`wz-plan${plan.feature ? ' wz-plan--feature' : ''}`}>
              {plan.flag && (
                <span className="wz-plan__flag">
                  <span className="wz-plan__flag-dot" />
                  {plan.flag}
                </span>
              )}
              <span className="wz-plan__tier">{plan.tier}</span>
              <div className="wz-plan__price">
                <b>{plan.price}</b>
                {plan.unit && <span>{plan.unit}</span>}
              </div>
              <p className="wz-plan__copy">{plan.copy}</p>
              <div className="wz-plan__rule" />
              <ul className="wz-plan__feats">
                {plan.feats.map((f) => (
                  <li key={f}>
                    <Check size={16} className="wz-feat-icon" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="wz-plan__cta">
                <a
                  href={plan.href}
                  className={`wz-btn ${plan.feature ? 'wz-btn--light' : 'wz-btn--ghost'} wz-btn--with-arrow`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight size={16} className="wz-btn__arrow" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="wz-pricing-trust">
          <div className="wz-trust-item">
            <ShieldCheck size={20} className="wz-trust-icon" />
            <div>
              <strong>No Long-term Lock-in</strong>
              <p>Flexible month-to-month plans with 30-day notice.</p>
            </div>
          </div>

          <div className="wz-trust-item">
            <Zap size={20} className="wz-trust-icon" />
            <div>
              <strong>Zero Hidden Commission</strong>
              <p>Keep 100% of your guest booking payouts.</p>
            </div>
          </div>

          <div className="wz-trust-item">
            <BarChart3 size={20} className="wz-trust-icon" />
            <div>
              <strong>Proven Software Tools</strong>
              <p>Integrated with PriceLabs, Wheelhouse & Google Local SEO.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoPricing;
