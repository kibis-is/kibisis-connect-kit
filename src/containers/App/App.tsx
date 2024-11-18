import clsx from 'clsx';
import { type FunctionComponent } from 'preact';
import { useEffect, useState } from 'preact/hooks';

// components
import Accordion from '@components/Accordion';
import Heading from '@components/Heading';
import HStack from '@components/HStack';
import IconButton from '@components/IconButton';
import Link from '@components/Link';
import Spacer from '@components/Spacer';
import Text from '@components/Text';
import VStack from '@components/VStack';

// containers
import MobileConnect from '@containers/MobileConnect';
import WebConnect from '@containers/WebConnect';

// constants
import { DEFAULT_PADDING, KIBISIS_URL } from '@constants';

// hooks
import useDefaultTextColor from '@hooks/useDefaultTextColor';
import usePrimaryColor from '@hooks/usePrimaryColor';

// icons
import CloseIcon from '@icons/CloseIcon';
import GlobeIcon from '@icons/GlobeIcon';
import KibisisIcon from '@icons/KibisisIcon';
import PhoneIcon from '@icons/PhoneIcon';
import MoonIcon from '@icons/MoonIcon';
import SunnyIcon from '@icons/SunnyIcon';

// styles
import styles from './styles.module.scss';

// types
import { TTheme } from '@types';
import type { IProps } from './types';

const App: FunctionComponent<IProps> = ({
  onClose,
  onLaunchWeb,
  theme,
  walletConnectURI,
}) => {
  // hooks
  const defaultTextColor = useDefaultTextColor(theme);
  const primaryColor = usePrimaryColor(theme);
  // states
  const [_theme, setTheme] = useState<TTheme>(theme);
  // handlers
  const handleOnClose = () => onClose();
  const handleOnLaunchWeb = () => onLaunchWeb();
  const handleOnSystemThemeChangeEvent = ({ matches }: MediaQueryListEvent) =>
    setTheme(matches ? 'dark' : 'light');
  const handleOnThemeClick = () =>
    setTheme(_theme === 'dark' ? 'light' : 'dark');

  useEffect(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', handleOnSystemThemeChangeEvent);

    return () => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', handleOnSystemThemeChangeEvent);
    };
  }, []);
  useEffect(() => setTheme(theme), [theme]);

  return (
    <div className={clsx(styles.modal)} data-theme={theme}>
      {/*overlay*/}
      <div className={clsx(styles.modalOverlay)}></div>

      {/*modal*/}
      <VStack className={clsx(styles.modalContainer)} fullWidth={true}>
        {/*header*/}
        <HStack
          align="center"
          fullWidth={true}
          justify="between"
          padding={DEFAULT_PADDING}
          spacing="xs"
        >
          <HStack align="center" spacing="sm" fullWidth={true}>
            <Link href={KIBISIS_URL} isExternal={true}>
              <KibisisIcon
                className={clsx(styles.modalHeaderIcon)}
                color={primaryColor}
              />
            </Link>

            <Heading textAlign="left" theme={theme}>
              Kibisis Connect
            </Heading>
          </HStack>

          <HStack align="center" justify="center" spacing="xs">
            {/*change theme button*/}
            <IconButton
              icon={theme === 'dark' ? <MoonIcon /> : <SunnyIcon />}
              onClick={handleOnThemeClick}
              theme={theme}
            />

            {/*close button*/}
            <IconButton
              icon={<CloseIcon />}
              onClick={handleOnClose}
              theme={theme}
            />
          </HStack>
        </HStack>

        {/*content*/}
        <VStack
          align="center"
          fullWidth={true}
          justify="center"
          padding={DEFAULT_PADDING}
          spacing="md"
        >
          <Text size="lg" theme={theme}>
            Choose how you would like to connect to Kibisis.
          </Text>

          <Accordion
            items={[
              {
                content: (
                  <MobileConnect
                    theme={theme}
                    walletConnectURI={walletConnectURI}
                  />
                ),
                title: (
                  <HStack fullWidth={true} spacing="sm">
                    <PhoneIcon
                      className={clsx(styles.accordionIcon)}
                      color={defaultTextColor}
                    />

                    <Heading size="sm" textAlign="left" theme={theme}>
                      Connect Via Mobile
                    </Heading>
                  </HStack>
                ),
              },
              {
                content: (
                  <WebConnect onSelect={handleOnLaunchWeb} theme={theme} />
                ),
                title: (
                  <HStack fullWidth={true} spacing="sm">
                    <GlobeIcon
                      className={clsx(styles.accordionIcon)}
                      color={defaultTextColor}
                    />

                    <Heading size="sm" textAlign="left" theme={theme}>
                      Connect Via Web
                    </Heading>
                  </HStack>
                ),
              },
            ]}
            theme={theme}
          />
        </VStack>

        <Spacer />

        {/*footer*/}
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
      </VStack>
    </div>
  );
};

export default App;
