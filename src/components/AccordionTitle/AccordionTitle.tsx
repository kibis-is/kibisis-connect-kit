import clsx from 'clsx';
import { cloneElement, type FunctionComponent } from 'preact';

// components
import Heading from '@components/Heading';
import HStack from '@components/HStack';

// hooks
import useDefaultTextColor from '@hooks/useDefaultTextColor';

// styles
import styles from './styles.module.scss';

// types
import type { IProps } from './types';

const AccordionTitle: FunctionComponent<IProps> = ({
  icon,
  theme = 'dark',
  title,
}) => {
  // hooks
  const defaultTextColor = useDefaultTextColor(theme);

  return (
    <HStack fullWidth={true} spacing="sm">
      {icon &&
        cloneElement(icon, {
          className: clsx(styles.icon),
          color: defaultTextColor,
        })}

      <Heading size="sm" textAlign="left" theme={theme}>
        {title}
      </Heading>
    </HStack>
  );
};

export default AccordionTitle;
