import type { FunctionComponent } from 'preact';

// components
import Button from '@components/Button';
import HStack from '@components/HStack';
import Link from '@components/Link';
import Stack from '@components/Stack';
import Text from '@components/Text';
import VStack from '@components/VStack';

// hooks
import useDefaultTextColor from '@hooks/useDefaultTextColor';

// icons
import ArrowRightIcon from '@icons/ArrowRightIcon';
import BraveIcon from '@icons/BraveIcon';
import ChromeIcon from '@icons/ChromeIcon';
import LaptopIcon from '@icons/LaptopIcon';

// types
import type { IBaseComponentProps } from '@types';
import { CHROME_STORE_URL } from '../../constants/URLs';

const WebConnect: FunctionComponent<IBaseComponentProps> = ({
  theme = 'dark',
}) => {
  // hooks
  const defaultTextColor = useDefaultTextColor(theme);
  // misc
  const browserIconSize = '2rem';
  const laptopIconSize = '4rem';

  return (
    <Stack align="center" fullWidth={true} justify="center">
      <VStack
        align="center"
        fullWidth={true}
        maxWidth={400}
        minHeight={364}
        justify="between"
      >
        <VStack align="center" fullWidth={true} spacing="sm">
          {/*laptop icon*/}
          <LaptopIcon
            color={defaultTextColor}
            height={laptopIconSize}
            width={laptopIconSize}
          />

          {/*caption*/}
          <Text textAlign="center" theme={theme}>
            Connect to your Kibisis web extension through your browser.
          </Text>
        </VStack>

        <VStack align="center" fullWidth={true} spacing="sm">
          <Text size="sm" textAlign="center" theme={theme}>
            Don't have Kibisis installed? Select your browser:
          </Text>

          {/*browser icons*/}
          <HStack align="center" fullWidth={true} justify="center" spacing="sm">
            <Link href={CHROME_STORE_URL} isExternal={true}>
              <ChromeIcon height={browserIconSize} width={browserIconSize} />
            </Link>

            <Link href={CHROME_STORE_URL} isExternal={true}>
              <BraveIcon height={browserIconSize} width={browserIconSize} />
            </Link>
          </HStack>
        </VStack>

        <VStack align="center" fullWidth={true} spacing="sm">
          {/*launch button*/}
          <Button fullWidth={true} rightIcon={<ArrowRightIcon />} theme={theme}>
            Launch
          </Button>

          {/*privacy policy*/}
          <Text size="sm" textAlign="center" theme={theme}>
            By connecting to Kibisis, you agree to the Kibisis{' '}
            <Link href="https://kibis.is/privacy-policy" isExternal={true}>
              privacy policy
            </Link>
            .
          </Text>
        </VStack>
      </VStack>
    </Stack>
  );
};

export default WebConnect;
