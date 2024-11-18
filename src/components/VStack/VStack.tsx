import type { FunctionComponent } from 'preact';

// components
import Stack from '@components/Stack';

// types
import type { IStackProps } from '@types';

const VStack: FunctionComponent<Omit<IStackProps, 'direction'>> = (props) => (
  <Stack {...props} direction="vertical" />
);

export default VStack;
