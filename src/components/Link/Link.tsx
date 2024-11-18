import clsx from 'clsx';
import type { FunctionComponent } from 'preact';

// styles
import styles from './styles.module.scss';

// types
import type { TProps } from './types';

const Link: FunctionComponent<TProps> = ({
  children,
  isExternal = false,
  theme = 'dark',
  ...anchorProps
}) => {
  return (
    <a
      {...anchorProps}
      className={clsx(styles.link)}
      data-theme={theme}
      {...(isExternal && {
        target: '_blank',
      })}
    >
      {children}
    </a>
  );
};

export default Link;
