import type { JSX } from 'preact';

// types
import type { IBaseComponentProps } from '@types';

interface IProps extends IBaseComponentProps {
  isExternal?: boolean;
}
type TProps = JSX.HTMLAttributes<HTMLAnchorElement> & IProps;

export default TProps;
