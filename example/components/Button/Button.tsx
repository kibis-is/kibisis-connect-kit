import {
  forwardRef,
  type ForwardRefExoticComponent,
  type RefAttributes,
} from 'react';

// styles
import styles from './styles.module.scss';

const Button: ForwardRefExoticComponent<RefAttributes<HTMLButtonElement>> =
  forwardRef<HTMLButtonElement>((props, ref) => (
    <button className={styles.button} {...props} ref={ref} />
  ));

export default Button;
