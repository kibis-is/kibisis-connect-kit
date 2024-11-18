import type { JSX, VNode } from 'preact';

// types
import type { IBaseComponentProps, TIconProps } from '@types';

interface IProps extends IBaseComponentProps {
  children: string;
  fullWidth?: boolean;
  leftIcon?: VNode<TIconProps>;
  rightIcon?: VNode<TIconProps>;
}
type TProps = IProps & Omit<JSX.HTMLAttributes<HTMLButtonElement>, 'children'>;

export default TProps;
