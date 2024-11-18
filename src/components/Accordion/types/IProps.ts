// types
import type { IBaseComponentProps } from '@types';
import type IItemProps from './IItemProps';

interface IProps extends IBaseComponentProps {
  items: IItemProps[];
}

export default IProps;
