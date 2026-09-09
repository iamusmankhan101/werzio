import React from 'react';
import { STEPS, PROCESS_HEADING, PROCESS_HEADING_TEXT } from './content';
import useInView from './useInView';
import SplitText from './SplitText';

const CoProcess = () => {
  const [headRef, headIn] = useInView();
  const [trackRef, trackIn] = useInView({ threshold: 0.25 });

  return (
    <section id="process" className="wz-section">
      <div className="wz-shell">
        <div className="wz-sechead">
          <div className="wz-sechead__main">
            <span className={`wz-eyebrow wz-reveal${headIn ? ' is-in' : ''}`}>How it works</span>
            <h2 ref={headRef} className="wz-h2" aria-label={PROCESS_HEADING_TEXT}>
              <SplitText segments={PROCESS_HEADING} active={headIn} />
            </h2>
          </div>
          <p
            className={`wz-sechead__note wz-reveal${headIn ? ' is-in' : ''}`}
            style={{ transitionDelay: '260ms' }}
          >
            From first audit to first payout. You approve the rate floor and house rules before
            anything goes live.
          </p>
        </div>

        {/* The rule doubles as a timeline: it draws left to right, then each
            step's node lands on it in turn. */}
        <ol ref={trackRef} className={`wz-steps${trackIn ? ' is-in' : ''}`}>
          {STEPS.map((step, i) => (
            <li
              key={step.n}
              className={`wz-step wz-reveal${trackIn ? ' is-in' : ''}`}
              style={{ transitionDelay: `${240 + i * 110}ms` }}
            >
              <span className="wz-step__node" style={{ transitionDelay: `${180 + i * 110}ms` }} />
              <span className="wz-step__meta">
                <span className="wz-step__n">{step.n}</span>
                <span className="wz-step__day">{step.day}</span>
              </span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default CoProcess;
