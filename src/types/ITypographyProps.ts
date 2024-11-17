// types
import type IBaseComponentProps from './IBaseComponentProps';
import type TSizes from './TSizes';

interface ITypographyProps extends IBaseComponentProps {
  bold?: boolean;
  children: any;
  fullWidth?: boolean;
  textAlign?: 'left' | 'center' | 'right';
  size?: TSizes;
}

export default ITypographyProps;
