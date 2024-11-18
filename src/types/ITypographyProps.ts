import type { JSX } from 'preact';

// types
import type IBaseComponentProps from './IBaseComponentProps';
import type TSizes from './TSizes';

interface ITypographyProps extends IBaseComponentProps {
  bold?: boolean;
  children: JSX.Element | string | JSX.Element[] | (JSX.Element | string)[];
  fullWidth?: boolean;
  textAlign?: 'left' | 'center' | 'right';
  size?: TSizes;
}

export default ITypographyProps;
