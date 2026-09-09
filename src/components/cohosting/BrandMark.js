import React from 'react';

// The Werzio slash, redrawn as an inline mark so it stays crisp at nav sizes.
const BrandMark = ({ size = 22 }) => (
  <svg
    className="wz-brand__mark"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <rect
      x="9"
      y="1.5"
      width="6"
      height="21"
      rx="2.4"
      fill="#C6E24F"
      transform="rotate(18 12 12)"
    />
  </svg>
);

export default BrandMark;
