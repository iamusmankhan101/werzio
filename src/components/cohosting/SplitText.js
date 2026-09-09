import React from 'react';

// Renders a statement as masked words that rise into place one after another.
// `segments` lets a single sentence carry two tones, e.g. a dark opening
// followed by a muted continuation.
//
// The split spans are hidden from assistive tech; the caller puts the full
// sentence on the heading's aria-label so it is still announced as one string.
const SplitText = ({ segments, active, stagger = 26, startDelay = 0 }) => {
  let wordIndex = 0;

  return (
    <span className={`wz-words${active ? ' is-in' : ''}`} aria-hidden="true">
      {segments.map((segment, si) => (
        <React.Fragment key={si}>
          {segment.text.split(' ').map((word, wi) => {
            const delay = startDelay + wordIndex * stagger;
            wordIndex += 1;
            return (
              <React.Fragment key={`${si}-${wi}`}>
                <span className={`wz-word${segment.muted ? ' wz-word--muted' : ''}`}>
                  <span className="wz-word__in" style={{ transitionDelay: `${delay}ms` }}>
                    {word}
                  </span>
                </span>{' '}
              </React.Fragment>
            );
          })}
        </React.Fragment>
      ))}
    </span>
  );
};

export default SplitText;
