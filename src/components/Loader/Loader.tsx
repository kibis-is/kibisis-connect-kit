import clsx from 'clsx';
import type { FunctionComponent } from 'preact';

// styles
import styles from './styles.module.scss';

// types
import type { IProps } from './types';

const Loader: FunctionComponent<IProps> = ({ color, size = 'md' }) => {
  let sizeStyle = styles.loaderMd;

  switch (size) {
    case 'xs':
      sizeStyle = styles.loaderXs;
      break;
    case 'sm':
      sizeStyle = styles.loaderSm;
      break;
    case 'lg':
      sizeStyle = styles.loaderLg;
      break;
    case 'xl':
      sizeStyle = styles.loaderXl;
      break;
    case 'md':
    default:
      break;
  }

  return (
    <span
      className={clsx(styles.loader, sizeStyle)}
      style={{
        ...(color && {
          borderColor: color,
          borderBottomColor: 'transparent',
        }),
      }}
    />
  );
};

export default Loader;
