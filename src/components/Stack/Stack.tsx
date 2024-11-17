import clsx from 'clsx';
import type { FunctionComponent } from 'preact';

// styles
import styles from './styles.module.scss';

// types
import type { IStackProps } from '@types';

const Stack: FunctionComponent<IStackProps> = ({
  align = 'start',
  direction = 'horizontal',
  children,
  fullWidth = false,
  grow = false,
  height,
  justify = 'start',
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  spacing,
  width,
}) => {
  let alignStyle = styles.stackAlignStart;
  let justifyStyle = styles.stackJustifyStart;
  let spacingStyle: string | null = null;

  switch (align) {
    case 'center':
      alignStyle = styles.stackAlignCenter;
      break;
    case 'end':
      alignStyle = styles.stackAlignEnd;
      break;
    case 'start':
    default:
      break;
  }

  switch (justify) {
    case 'between':
      justifyStyle = styles.stackJustifyBetween;
      break;
    case 'center':
      justifyStyle = styles.stackJustifyCenter;
      break;
    case 'end':
      justifyStyle = styles.stackJustifyEnd;
      break;
    case 'evenly':
      justifyStyle = styles.stackJustifyEvenly;
      break;
    case 'start':
    default:
      break;
  }

  switch (spacing) {
    case 'xs':
      spacingStyle = styles.stackSpacingXs;
      break;
    case 'sm':
      spacingStyle = styles.stackSpacingSm;
      break;
    case 'md':
      spacingStyle = styles.stackSpacingMd;
      break;
    case 'lg':
      spacingStyle = styles.stackSpacingLg;
      break;
    case 'xl':
      spacingStyle = styles.stackSpacingXl;
      break;
    default:
      break;
  }

  return (
    <div
      className={clsx(
        styles.stack,
        alignStyle,
        justifyStyle,
        spacingStyle,
        direction === 'vertical'
          ? styles.stackVertical
          : styles.stackHorizontal,
        fullWidth && styles.stackFullWidth,
        grow && styles.stackGrow
      )}
      style={{
        ...(height && {
          height: typeof height === 'number' ? `${height}px` : height,
        }),
        ...(maxHeight && {
          maxHeight:
            typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight,
        }),
        ...(maxWidth && {
          maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth,
        }),
        ...(minHeight && {
          minHeight:
            typeof minHeight === 'number' ? `${minHeight}px` : minHeight,
        }),
        ...(minWidth && {
          minWidth: typeof minWidth === 'number' ? `${minWidth}px` : minWidth,
        }),
        ...(width && {
          width: typeof height === 'number' ? `${width}px` : width,
        }),
      }}
    >
      {children}
    </div>
  );
};

export default Stack;
