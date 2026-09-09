import { useEffect, useState } from 'react';

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Eases a number up to `target` once `active` turns true.
// Jumps straight to the final value when the viewer has asked for less motion.
export default function useCountUp(target, active, duration = 1150) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return undefined;

    if (prefersReducedMotion()) {
      setValue(target);
      return undefined;
    }

    let frame;
    const started = performance.now();

    const tick = (now) => {
      const progress = Math.min(1, (now - started) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, active, duration]);

  return value;
}

// Renders a counted value back into the label it came from ("1,400+", "4.91").
export function formatStat(n, { prefix = '', suffix = '', decimals = 0 } = {}) {
  const body = decimals
    ? n.toFixed(decimals)
    : Math.round(n).toLocaleString('en-US');
  return `${prefix}${body}${suffix}`;
}
