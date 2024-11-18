import type { FunctionComponent } from 'preact';

// components
import Link from '@components/Link';
import Text from '@components/Text';
import VStack from '@components/VStack';

// constants
import { DEFAULT_PADDING, KIBISIS_URL } from '@constants';

// types
import type { IBaseComponentProps } from '@types';

const Footer: FunctionComponent<IBaseComponentProps> = ({ theme = 'dark' }) => {
  return (
    <VStack
      align="center"
      fullWidth={true}
      justify="center"
      paddingBottom={DEFAULT_PADDING}
      paddingX={DEFAULT_PADDING}
    >
      {/*privacy policy*/}
      <Text size="sm" textAlign="center" theme={theme}>
        By connecting to Kibisis, you agree to the Kibisis{' '}
        <Link href={`${KIBISIS_URL}/privacy-policy`} isExternal={true}>
          privacy policy
        </Link>
        .
      </Text>
    </VStack>
  );
};

export default Footer;
