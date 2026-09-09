import React, { useState } from 'react';
import { EMAIL } from './content';

const EMPTY = { name: '', email: '', location: '', listing: '' };

const CoContact = () => {
  const [form, setForm] = useState(EMPTY);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend yet — same client-side handling as the rest of the site.
    console.log('Forecast request:', form);
    setSent(true);
  };

  return (
    <section id="contact" className="wz-section wz-section--dark">
      <div className="wz-shell wz-contact">
        <div className="wz-contact__copy">
          <h2 className="wz-contact__title">Send us a link. We’ll send back the numbers.</h2>
          <p className="wz-contact__lead">
            A 20-minute call, a real forecast for your address, and an honest answer on whether
            short-let beats your current lease.
          </p>
          <div className="wz-contact__meta">
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <span>Onboarding 6 homes this month</span>
          </div>
        </div>

        <form className="wz-form" onSubmit={handleSubmit}>
          <span className="wz-form__label">REQUEST A FORECAST</span>

          {sent ? (
            <div className="wz-form__done">
              <b>Request received.</b>
              <p>
                We’ll come back within one business day with a forecast for your address. No sales
                sequence.
              </p>
              <button
                type="button"
                className="wz-btn wz-btn--ghost"
                onClick={() => { setForm(EMPTY); setSent(false); }}
              >
                Send another
              </button>
            </div>
          ) : (
            <>
              <input
                className="wz-input"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full name"
                autoComplete="name"
                required
              />
              <input
                className="wz-input"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                autoComplete="email"
                required
              />
              <input
                className="wz-input"
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="City & building"
                required
              />
              <input
                className="wz-input"
                name="listing"
                value={form.listing}
                onChange={handleChange}
                placeholder="Listing link (optional)"
              />
              <button type="submit" className="wz-btn wz-btn--primary">Send request</button>
              <span className="wz-form__fine">We reply within one business day. No sales sequence.</span>
            </>
          )}
        </form>
      </div>
    </section>
  );
};

export default CoContact;
