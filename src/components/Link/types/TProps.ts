import type { JSX } from 'preact';

// types
import type { IBaseComponentProps } from '@types';

interface IProps {
  isExternal?: boolean;
}
type TProps = JSX.AnchorHTMLAttributes & IBaseComponentProps & IProps;

export default TProps;
