import clsx from 'clsx';
import type { FunctionComponent } from 'preact';
import { useEffect, useState } from 'preact/hooks';

// components
import Accordion from '@components/Accordion';
import AccordionTitle from '@components/AccordionTitle';
import Spacer from '@components/Spacer';
import Text from '@components/Text';
import VStack from '@components/VStack';

// containers
import Footer from '@containers/Footer';
import Header from '@containers/Header';
import MobileConnect from '@containers/MobileConnect';
import WebConnect from '@containers/WebConnect';

// constants
import { DEFAULT_PADDING } from '@constants';

// icons
import GlobeIcon from '@icons/GlobeIcon';
import PhoneIcon from '@icons/PhoneIcon';

// styles
import styles from './styles.module.scss';

// types
import type { TTheme } from '@types';
import type { IProps } from './types';

const App: FunctionComponent<IProps> = ({
  onClose,
  onLaunchWeb,
  theme,
  walletConnectURI,
}) => {
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
    <div className={clsx(styles.modal)} data-theme={_theme}>
      {/*overlay*/}
      <div className={clsx(styles.modalOverlay)}></div>

      {/*modal*/}
      <VStack className={clsx(styles.modalContainer)} fullWidth={true}>
        {/*header*/}
        <Header
          onCloseClick={handleOnClose}
          onThemeClick={handleOnThemeClick}
          theme={_theme}
        />

        {/*content*/}
        <VStack
          align="center"
          fullWidth={true}
          justify="center"
          padding={DEFAULT_PADDING}
          spacing="md"
        >
          <Text size="lg" theme={_theme}>
            Choose how you would like to connect to Kibisis.
          </Text>

          <Accordion
            items={[
              {
                content: (
                  <MobileConnect
                    theme={_theme}
                    walletConnectURI={walletConnectURI}
                  />
                ),
                title: (
                  <AccordionTitle
                    icon={<PhoneIcon />}
                    title="Connect Via Mobile"
                    theme={_theme}
                  />
                ),
              },
              {
                content: (
                  <WebConnect onSelect={handleOnLaunchWeb} theme={_theme} />
                ),
                title: (
                  <AccordionTitle
                    icon={<GlobeIcon />}
                    title="Connect Via Web"
                    theme={_theme}
                  />
                ),
              },
            ]}
            theme={_theme}
          />
        </VStack>

        <Spacer />

        {/*footer*/}
        <Footer theme={_theme} />
      </VStack>
    </div>
  );
};

export default App;
