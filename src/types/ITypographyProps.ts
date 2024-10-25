// types
import type IBaseComponentProps from './IBaseComponentProps';
import type TSizes from './TSizes';

interface ITypographyProps extends IBaseComponentProps {
  bold?: boolean;
  fullWidth?: boolean;
  text: string;
  textAlign?: 'left' | 'center' | 'right';
  size?: TSizes;
}

export default ITypographyProps;
