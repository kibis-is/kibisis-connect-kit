import type { FunctionComponent } from 'preact';

// types
import type { TIconProps } from '@types';

const LaptopIcon: FunctionComponent<TIconProps> = ({ color, ...svgProps }) => (
  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" {...svgProps}>
    <rect
      fill="none"
      height="304"
      rx="32.14"
      ry="32.14"
      stroke={color || '#000000'}
      stroke-linejoin="round"
      stroke-width="32"
      width="416"
      x="48"
      y="96"
    />

    <path
      d="M16 416h480"
      stroke={color || '#000000'}
      stroke-linecap="round"
      stroke-miterlimit="10"
      stroke-width="32"
    />
  </svg>
);

export default LaptopIcon;
