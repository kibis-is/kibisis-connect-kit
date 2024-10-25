import type { JSX, VNode } from 'preact';

// types
import type { IBaseComponentProps, TIconProps } from '@types';

interface IProps extends IBaseComponentProps {
  icon: VNode<TIconProps>;
}
type TProps = Omit<JSX.HTMLAttributes<HTMLButtonElement>, 'icon'> & IProps;

export default TProps;
