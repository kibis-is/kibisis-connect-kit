// types
import type TStackAlign from './TStackAlign';
import type TStackJustify from './TStackJustify';
import type TSizes from './TSizes';

interface IStackProps {
  align?: TStackAlign;
  direction?: 'horizontal' | 'vertical';
  fullWidth?: boolean;
  grow?: boolean;
  height?: number | string;
  justify?: TStackJustify;
  maxHeight?: number | string;
  maxWidth?: number | string;
  minHeight?: number | string;
  minWidth?: number | string;
  spacing?: TSizes;
  width?: number | string;
}

export default IStackProps;
