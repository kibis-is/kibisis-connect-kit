// types
import type { IBaseComponentProps } from '@types';

interface IProps extends IBaseComponentProps {
  onCloseClick: () => void;
  onThemeClick: () => void;
}

export default IProps;
