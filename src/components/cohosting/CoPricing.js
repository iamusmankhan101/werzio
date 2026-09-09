import React, { useState } from 'react';
import { ArrowRight, Check, ShieldCheck, Zap, BarChart3, Calculator } from 'lucide-react';
import { PLANS, FEE } from './content';

const CoPricing = () => {
  const [revenue, setRevenue] = useState(10000);
  const [showCalculator, setShowCalculator] = useState(false);

  const fullFeeAmt = Math.round(revenue * (FEE / 100));
  const optFeeAmt = Math.round(revenue * 0.08);
  const fullNet = revenue - fullFeeAmt;
  const optNet = revenue - optFeeAmt;

  return (
    <section id="pricing" className="wz-section">
      <div className="wz-shell">
        <div className="wz-pricing__head">
          <span className="wz-eyebrow">Pricing</span>
          <h2 className="wz-h2" style={{ maxWidth: '24ch' }}>We earn when your listing earns.</h2>
          <p>
            No setup fee, no markup on maintenance, 60-day notice. Empty calendar, no invoice.
          </p>

          <button
            type="button"
            className="wz-calc-toggle"
            onClick={() => setShowCalculator(!showCalculator)}
          >
            <Calculator size={16} />
            {showCalculator ? 'Hide Payout Calculator' : 'Interactive Payout Calculator'}
          </button>
        </div>

        {showCalculator && (
          <div className="wz-calc-box">
            <div className="wz-calc-header">
              <div className="wz-calc-title">
                <BarChart3 size={20} className="wz-calc-icon" />
                <div>
                  <h4>Estimate Your Monthly Earnings</h4>
                  <p>Slide to match your estimated gross monthly booking revenue</p>
                </div>
              </div>
              <div className="wz-calc-badge">+31% Median Revenue Lift</div>
            </div>

            <div className="wz-calc-slider-wrap">
              <div className="wz-calc-val">
                <span>Monthly Booking Revenue</span>
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
                <span className="wz-calc-card__tier">OPTIMIZATION ONLY (8%)</span>
                <div className="wz-calc-card__net">
                  <span>Your Net Payout</span>
                  <b>${optNet.toLocaleString()}</b>
                  <small>Fee: ${optFeeAmt.toLocaleString()}/mo</small>
                </div>
              </div>

              <div className="wz-calc-card wz-calc-card--featured">
                <span className="wz-calc-card__tier">FULL CO-HOSTING ({FEE}%)</span>
                <div className="wz-calc-card__net">
                  <span>Your Net Payout (0 Effort)</span>
                  <b>${fullNet.toLocaleString()}</b>
                  <small>Fee: ${fullFeeAmt.toLocaleString()}/mo · Full Hands-Free Service</small>
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
              <p>60-day notice on co-hosting, 30 on optimization.</p>
            </div>
          </div>

          <div className="wz-trust-item">
            <Zap size={20} className="wz-trust-icon" />
            <div>
              <strong>Free Listing Rebuild</strong>
              <p>Pro photography & styling setup with zero upfront fee.</p>
            </div>
          </div>

          <div className="wz-trust-item">
            <BarChart3 size={20} className="wz-trust-icon" />
            <div>
              <strong>100% Aligned Incentives</strong>
              <p>We only earn more when your listing revenue increases.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoPricing;
