import type { VNode } from 'preact';

// types
import type { IBaseComponentProps, TIconProps } from '@types';

interface IProps extends IBaseComponentProps {
  icon?: VNode<TIconProps>;
  title: string;
}

export default IProps;
