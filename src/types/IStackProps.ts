// types
import type TStackAlign from './TStackAlign';
import type TStackJustify from './TStackJustify';
import type TSizes from './TSizes';

interface IStackProps {
  align?: TStackAlign;
  direction?: 'horizontal' | 'vertical';
  fullWidth?: boolean;
  justify?: TStackJustify;
  spacing?: TSizes;
}

export default IStackProps;
