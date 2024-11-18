import clsx from 'clsx';
import { cloneElement, type FunctionComponent } from 'preact';

// hooks
import useDefaultTextColor from '@hooks/useDefaultTextColor';

// styles
import styles from './styles.module.scss';

// types
import type { TProps } from './types';

const IconButton: FunctionComponent<TProps> = ({
  icon,
  theme = 'light',
  ...buttonProps
}) => {
  // hooks
  const defaultTextColor = useDefaultTextColor(theme);

  return (
    <button {...buttonProps} className={clsx(styles.button)} data-theme={theme}>
      {cloneElement(icon, {
        ...icon.props,
        className: clsx(styles.buttonIcon),
        color: defaultTextColor,
      })}
    </button>
  );
};

export default IconButton;
