import type { FunctionComponent } from 'preact';

// types
import type { TIconProps } from '@types';

const ChevronDownIcon: FunctionComponent<TIconProps> = ({
  color,
  ...svgProps
}) => (
  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" {...svgProps}>
    <path
      d="M112 184l144 144 144-144"
      fill="none"
      stroke={color || '#000000'}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="48"
    />
  </svg>
);

export default ChevronDownIcon;
