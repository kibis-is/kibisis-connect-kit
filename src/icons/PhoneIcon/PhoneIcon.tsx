import type { FunctionComponent } from 'preact';

// types
import type { TIconProps } from '@types';

const PhoneIcon: FunctionComponent<TIconProps> = ({ color, ...svgProps }) => {
  const _color = color || '#000000';

  return (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" {...svgProps}>
      <rect
        x="128"
        y="16"
        width="256"
        height="480"
        rx="48"
        ry="48"
        fill="none"
        stroke={_color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
      />

      <path
        d="M176 16h24a8 8 0 018 8h0a16 16 0 0016 16h64a16 16 0 0016-16h0a8 8 0 018-8h24"
        fill="none"
        stroke={_color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
      />
    </svg>
  );
};

export default PhoneIcon;
