// import clsx from 'clsx';
import type { FunctionComponent } from 'preact';

// components
import HStack from '@components/HStack';
// import Text from '@components/Text';

// styles
// import styles from './styles.module.scss';

// types
import type { IBaseComponentProps } from '@types';

const MobileConnect: FunctionComponent<IBaseComponentProps> = () => {
  return <HStack spacing="sm" fullWidth={true}></HStack>;
};

export default MobileConnect;
