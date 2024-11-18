import type { FunctionComponent } from 'preact';

// components
import Stack from '@components/Stack';

// types
import type { IStackProps } from '@types';

const HStack: FunctionComponent<Omit<IStackProps, 'direction'>> = (props) => (
  <Stack {...props} direction="horizontal" />
);

export default HStack;
