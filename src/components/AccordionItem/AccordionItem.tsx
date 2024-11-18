import clsx from 'clsx';
import type { FunctionComponent } from 'preact';
import { useRef } from 'preact/hooks';

// hooks
import useDefaultTextColor from '@hooks/useDefaultTextColor';

// icons
import ChevronDownIcon from '@icons/ChevronDownIcon';

// styles
import styles from './styles.module.scss';

// types
import type { IProps } from './types';

const AccordionItem: FunctionComponent<IProps> = ({
  children,
  first = false,
  isOpen,
  onClick,
  theme = 'light',
  title,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  // hooks
  const defaultTextColor = useDefaultTextColor(theme);
  // handlers
  const handleOnClick = () => onClick();

  return (
    <div className={clsx(styles.accordionItem)} data-theme={theme}>
      {/*header*/}
      <button
        className={clsx(
          styles.accordionItemHeader,
          first && styles.accordionItemHeaderFirst
        )}
        onClick={handleOnClick}
      >
        {/*title*/}
        {title}

        {/*icon*/}
        <ChevronDownIcon
          className={clsx(
            styles.accordionItemIcon,
            isOpen && styles.accordionItemIconOpen
          )}
          color={defaultTextColor}
        />
      </button>

      {/*content*/}
      <div
        className={clsx(
          styles.accordionItemContent,
          isOpen && styles.accordionItemContentOpen
        )}
        style={{
          maxHeight:
            isOpen && contentRef.current
              ? `${contentRef.current.scrollHeight}px`
              : '0px',
        }}
        ref={contentRef}
      >
        {children}
      </div>
    </div>
  );
};

export default AccordionItem;
