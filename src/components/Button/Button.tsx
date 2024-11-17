import clsx from 'clsx';
import { cloneElement, type FunctionComponent } from 'preact';

// components
import HStack from '@components/HStack';

// hooks
import useButtonTextColor from '@hooks/useButtonTextColor';

// styles
import styles from './styles.module.scss';

// types
import type { TProps } from './types';

const Button: FunctionComponent<TProps> = ({
  children,
  fullWidth = false,
  leftIcon,
  rightIcon,
  theme = 'dark',
  ...buttonProps
}) => {
  // hooks
  const buttonTextColor = useButtonTextColor(theme);
  // misc
  const iconSize = '1.5rem';

  return (
    <button
      {...buttonProps}
      className={clsx(styles.button, fullWidth && styles.buttonFullWidth)}
      data-theme={theme}
    >
      {leftIcon || rightIcon ? (
        <HStack align="center" fullWidth={true} justify="center" spacing="xs">
          {leftIcon &&
            cloneElement(leftIcon, {
              color: buttonTextColor,
              height: iconSize,
              width: iconSize,
            })}

          {children}

          {rightIcon &&
            cloneElement(rightIcon, {
              color: buttonTextColor,
              height: iconSize,
              width: iconSize,
            })}
        </HStack>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
