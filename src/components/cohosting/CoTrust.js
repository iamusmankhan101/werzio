import React from 'react';
import { STATS } from './content';

// The reference runs a client-logo bar here. We have no partner logos to show,
// so the same slot carries our own verifiable numbers instead.
const CoTrust = () => (
  <section className="wz-trust">
    <div className="wz-shell">
      <div className="wz-trust__who">
        <div className="wz-avatars" aria-hidden="true">
          <span>MR</span><span>DK</span><span>AS</span><span>+</span>
        </div>
        <div className="wz-trust__copy">
          <b>Trusted by property owners</b>
          <span>31 cities, 9 countries</span>
        </div>
      </div>

      <div className="wz-trust__chips">
        {STATS.slice(0, 4).map((s) => (
          <span key={s.label} className="wz-chip">
            <b>{s.value}</b>
            <span>{s.label}</span>
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default CoTrust;
