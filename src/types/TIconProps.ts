import type { SVGProps } from 'react';

interface IIconProps {
  color?: string;
}
type TIconProps = IIconProps & SVGProps<SVGSVGElement>;

export default TIconProps;
