import type { FunctionComponent } from 'preact';

// types
import type { TIconProps } from '@types';

const GlobeIcon: FunctionComponent<TIconProps> = ({ color, ...svgProps }) => {
  const _color = color || '#000000';

  return (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" {...svgProps}>
      <path
        d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48z"
        fill="none"
        stroke={_color}
        stroke-miterlimit="10"
        stroke-width="32"
      />

      <path
        d="M256 48c-58.07 0-112.67 93.13-112.67 208S197.93 464 256 464s112.67-93.13 112.67-208S314.07 48 256 48z"
        fill="none"
        stroke={_color}
        stroke-miterlimit="10"
        stroke-width="32"
      />

      <path
        d="M117.33 117.33c38.24 27.15 86.38 43.34 138.67 43.34s100.43-16.19 138.67-43.34M394.67 394.67c-38.24-27.15-86.38-43.34-138.67-43.34s-100.43 16.19-138.67 43.34"
        fill="none"
        stroke={_color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
      />

      <path
        d="M256 48v416M464 256H48"
        fill="none"
        stroke={_color}
        stroke-miterlimit="10"
        stroke-width="32"
      />
    </svg>
  );
};

export default GlobeIcon;
