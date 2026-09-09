import React from 'react';
import { QUOTES } from './content';

const CoQuotes = () => (
  <section className="wz-section wz-section--alt">
    <div className="wz-shell">
      <div className="wz-quotes">
        {QUOTES.map((q) => (
          <figure key={q.name} className="wz-quote" style={{ margin: 0 }}>
            <span className="wz-quote__stat">{q.stat}</span>
            <blockquote style={{ margin: 0 }}>
              <p>{q.body}</p>
            </blockquote>
            <figcaption className="wz-quote__who">
              <span className="wz-avatar">{q.initials}</span>
              <span>
                <span className="wz-quote__name" style={{ display: 'block' }}>{q.name}</span>
                <span className="wz-quote__meta">{q.meta}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default CoQuotes;
