import clsx from 'clsx';
import type { FunctionComponent } from 'preact';

// styles
import styles from './styles.module.scss';

// types
import type { ITypographyProps } from '@types';

const Heading: FunctionComponent<ITypographyProps> = ({
  bold = false,
  fullWidth = false,
  size = 'md',
  text,
  textAlign = 'center',
  theme = 'dark',
}) => {
  let sizeStyle = styles.headingMd;
  let textAlignStyle = styles.headingCenter;

  switch (size) {
    case 'xs':
      sizeStyle = styles.headingXs;
      break;
    case 'sm':
      sizeStyle = styles.headingSm;
      break;
    case 'lg':
      sizeStyle = styles.headingLg;
      break;
    case 'xl':
      sizeStyle = styles.headingXl;
      break;
    case 'md':
    default:
      break;
  }

  switch (textAlign) {
    case 'left':
      textAlignStyle = styles.headingLeft;
      break;
    case 'right':
      textAlignStyle = styles.headingRight;
      break;
    case 'center':
    default:
      break;
  }

  return (
    <h1
      className={clsx(
        styles.heading,
        sizeStyle,
        textAlignStyle,
        bold && styles.headingBold,
        fullWidth && styles.headingFullWidth
      )}
      data-theme={theme}
    >
      {text}
    </h1>
  );
};

export default Heading;
