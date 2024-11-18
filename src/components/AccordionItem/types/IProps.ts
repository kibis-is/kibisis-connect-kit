import type { JSX } from 'preact';

// types
import type { IBaseComponentProps } from '@types';

interface IProps extends IBaseComponentProps {
  first?: boolean;
  isOpen: boolean;
  onClick: () => void;
  title?: JSX.Element;
}

export default IProps;
