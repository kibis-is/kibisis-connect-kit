import type { SVGProps } from 'preact/compat';

interface IIconProps {
  color?: string;
}
type TIconProps = IIconProps & SVGProps<SVGSVGElement>;

export default TIconProps;
