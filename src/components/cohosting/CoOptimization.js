import React, { useEffect, useState } from 'react';
import { LOOP, LOOP_HEADING, LOOP_HEADING_TEXT, BASELINE, MANAGED } from './content';
import useInView from './useInView';
import { prefersReducedMotion } from './useCountUp';
import SplitText from './SplitText';

// How long each cadence stays lit before the loop moves on.
const DWELL = 4200;

// Each column stacks the managed uplift on the self-managed baseline, so the
// accent segment reads as the revenue the loop adds.
const peak = Math.max(...MANAGED);
const columns = BASELINE.map((self, i) => ({
  self: (self / peak) * 96,
  uplift: ((MANAGED[i] - self) / peak) * 96
}));

const CoOptimization = () => {
  const [headRef, headIn] = useInView();
  const [listRef, listIn] = useInView({ threshold: 0.3 });
  const [chartRef, chartIn] = useInView({ threshold: 0.2 });

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // Advances the highlight round the loop. Re-running on `active` means a click
  // restarts the dwell rather than inheriting the remainder of the last one.
  useEffect(() => {
    if (!listIn || paused || prefersReducedMotion()) return undefined;
    const timer = setTimeout(
      () => setActive((i) => (i + 1) % LOOP.length),
      DWELL
    );
    return () => clearTimeout(timer);
  }, [listIn, paused, active]);

  return (
    <section id="optimization" className="wz-section wz-section--alt">
      <div className="wz-shell">
        <div className="wz-sechead">
          <div className="wz-sechead__main">
            <span className={`wz-eyebrow wz-reveal${headIn ? ' is-in' : ''}`}>
              The optimization loop
            </span>
            <h2 ref={headRef} className="wz-h2" aria-label={LOOP_HEADING_TEXT}>
              <SplitText segments={LOOP_HEADING} active={headIn} />
            </h2>
          </div>
          <p
            className={`wz-sechead__note wz-reveal${headIn ? ' is-in' : ''}`}
            style={{ transitionDelay: '260ms' }}
          >
            Optimization isn’t a one-off cleanup. Every week we re-test the photo order, re-cut
            the rate curve against demand and events, and chase reviews.
          </p>
        </div>

        <div className="wz-opt">
          <div
            className="wz-opt__cadence"
            ref={listRef}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          >
            {LOOP.map((item, i) => (
              <button
                type="button"
                key={item.tag}
                className={`wz-cadence wz-reveal${listIn ? ' is-in' : ''}${i === active ? ' is-active' : ''}`}
                style={{ transitionDelay: `${i * 90}ms` }}
                aria-pressed={i === active}
                onClick={() => setActive(i)}
              >
                <span className="wz-cadence__head">
                  <span className="wz-cadence__tag">{item.tag}</span>
                  <span className="wz-cadence__n">{`0${i + 1}`}</span>
                </span>
                <span className="wz-cadence__body">{item.body}</span>
                <span className="wz-cadence__bar">
                  {i === active && <span className="wz-cadence__fill" key={active} />}
                </span>
              </button>
            ))}
          </div>

          <div ref={chartRef} className={`wz-chart wz-reveal${chartIn ? ' is-in' : ''}`}>
            <div className="wz-chart__head">
              <span>1BR · CITY CENTRE · 12 MONTHS</span>
              <span className="wz-chart__delta">+31.4%</span>
            </div>

            <div className="wz-chart__bars">
              {columns.map((c, i) => (
                <div className="wz-chart__col" key={i}>
                  <div
                    className="wz-chart__seg wz-chart__seg--up"
                    style={{ height: chartIn ? `${c.uplift}%` : 0, transitionDelay: `${320 + i * 55}ms` }}
                  />
                  <div
                    className="wz-chart__seg wz-chart__seg--base"
                    style={{ height: chartIn ? `${c.self}%` : 0, transitionDelay: `${i * 55}ms` }}
                  />
                </div>
              ))}
            </div>

            <div className="wz-chart__legend">
              <span><i className="is-base" />Self-managed</span>
              <span><i className="is-up" />With Werzio</span>
            </div>

            <div className="wz-chart__stats">
              <div><b>91%</b><span>occupancy</span></div>
              <div><b>$214</b><span>avg nightly</span></div>
              <div><b>4.93</b><span>rating</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoOptimization;
