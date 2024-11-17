import clsx from 'clsx';
import { Component, type ComponentChild } from 'preact';

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
import type { IProps, IState } from './types';

export default class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      theme: props.theme,
    };

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener(
        'change',
        this._handleOnSystemThemeChangeEvent.bind(this)
      );
  }

  /**
   * private methods
   */

  private _handleOnClose(): void {
    this.props.onClose();
  }

  private _handleOnSystemThemeChangeEvent({
    matches,
  }: MediaQueryListEvent): void {
    this.setState({
      theme: matches ? 'dark' : 'light',
    });
  }

  private _handleOnLaunchWeb(): void {
    this.props.onLaunchWeb();
  }

  private _handleOnThemeClick(): void {
    this.setState({
      theme: this.state.theme === 'dark' ? 'light' : 'dark',
    });
  }

  /**
   * public methods
   */

  public componentWillUnmount(): void {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .removeEventListener(
        'change',
        this._handleOnSystemThemeChangeEvent.bind(this)
      );
  }

  public render(): ComponentChild {
    const { theme } = this.state;
    const defaultTextColor = useDefaultTextColor(theme);
    const primaryColor = usePrimaryColor(theme);

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
              <KibisisIcon
                className={clsx(styles.modalHeaderIcon)}
                color={primaryColor}
              />

              <Heading textAlign="left" theme={theme}>
                Kibisis Connect
              </Heading>
            </HStack>

            <HStack align="center" justify="center" spacing="xs">
              {/*change theme button*/}
              <IconButton
                icon={theme === 'dark' ? <MoonIcon /> : <SunnyIcon />}
                onClick={this._handleOnThemeClick.bind(this)}
                theme={theme}
              />

              {/*close button*/}
              <IconButton
                icon={<CloseIcon />}
                onClick={this._handleOnClose.bind(this)}
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
                  content: <MobileConnect theme={theme} />,
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
                    <WebConnect
                      onSelect={this._handleOnLaunchWeb.bind(this)}
                      theme={theme}
                    />
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
  }
}
