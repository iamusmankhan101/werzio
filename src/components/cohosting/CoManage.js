import React from 'react';
import { SERVICES } from './content';

const CoManage = () => (
  <section id="manage" className="wz-section wz-section--alt">
    <div className="wz-shell">
      <div className="wz-sechead">
        <div className="wz-sechead__main">
          <span className="wz-eyebrow">What we manage</span>
          <h2 className="wz-h2">Everything a listing needs, under one fee.</h2>
        </div>
        <p className="wz-sechead__note">
          You keep ownership, pricing veto and owner nights. We keep the pager.
        </p>
      </div>

      <div className="wz-cards">
        {SERVICES.map((s) => (
          <div key={s.title} className="wz-card">
            <span className="wz-card__tag">{s.tag}</span>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CoManage;
