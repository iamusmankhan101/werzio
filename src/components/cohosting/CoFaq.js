import React, { useState } from 'react';
import { FAQS } from './content';

const CoFaq = () => {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="wz-section">
      <div className="wz-shell wz-faq">
        <div className="wz-faq__intro">
          <span className="wz-eyebrow">FAQ</span>
          <h2>The questions owners actually ask.</h2>
          <p>Anything else, ask on the walkthrough call — no obligation either way.</p>
        </div>

        <div className="wz-faq__list">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="wz-faq__item">
                <button
                  type="button"
                  className="wz-faq__q"
                  aria-expanded={isOpen}
                  aria-controls={`wz-faq-a-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span>{item.q}</span>
                  <span className="wz-faq__icon" aria-hidden="true">+</span>
                </button>
                {isOpen && (
                  <div className="wz-faq__a" id={`wz-faq-a-${i}`}>{item.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoFaq;
