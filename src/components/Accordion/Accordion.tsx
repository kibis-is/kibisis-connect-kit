import { randomString } from '@stablelib/random';
import type { FunctionComponent } from 'preact';
import { useMemo, useState } from 'preact/hooks';

// components
import AccordionItem from '@components/AccordionItem';
import VStack from '@components/VStack';

// types
import type { IProps } from './types';

const Accordion: FunctionComponent<IProps> = ({ items, theme = 'light' }) => {
  // states
  const [index, setIndex] = useState<number>(-1);
  // misc
  const context = useMemo(() => randomString(8), []);
  // handlers
  const handleOnClick = (_index: number) => () =>
    setIndex(_index === index ? -1 : _index);

  return (
    <VStack fullWidth={true}>
      {items.map(({ content, title }, _index) => (
        <AccordionItem
          isOpen={_index === index}
          key={`${context}-${_index}`}
          onClick={handleOnClick(_index)}
          theme={theme}
          title={title}
          {...(_index === 0 && {
            first: true,
          })}
        >
          {content}
        </AccordionItem>
      ))}
    </VStack>
  );
};

export default Accordion;
