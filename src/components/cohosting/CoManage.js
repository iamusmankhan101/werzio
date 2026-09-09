import React from 'react';
import { SERVICES } from './content';

const CoManage = () => (
  <section id="manage" className="wz-section wz-section--dark">
    <div className="wz-shell">
      <div className="wz-sechead">
        <div className="wz-sechead__main">
          <span className="wz-eyebrow">Our services</span>
          <h2 className="wz-h2">
            Our service covers every part of running a short-let — content, pricing,
            guests, turnovers and compliance <em>— under one fee.</em>
          </h2>
        </div>
        <p className="wz-sechead__note">
          You keep ownership, pricing veto and owner nights. We keep the pager.
        </p>
      </div>

      <div className="wz-services">
        {SERVICES.map((s, i) => (
          <div key={s.title} className="wz-service">
            <span className="wz-service__n">{`0${i + 1}.`}</span>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CoManage;
