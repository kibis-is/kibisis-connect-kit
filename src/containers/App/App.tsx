import clsx from 'clsx';
import { Component, type ComponentChild } from 'preact';

// components
import Accordion from '@components/Accordion';
import Heading from '@components/Heading';
import HStack from '@components/HStack';
import IconButton from '@components/IconButton';
import Text from '@components/Text';

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
        <div className={clsx(styles.modalContainer)}>
          {/*header*/}
          <div className={clsx(styles.modalHeader)}>
            <a
              className={clsx(styles.modalHeaderBanner)}
              href="https://kibis.is"
              rel="noopener noreferrer"
              target="_blank"
            >
              <KibisisIcon
                className={clsx(styles.modalHeaderBannerIcon)}
                color={primaryColor}
              />

              <Heading text="Kibisis Connect" textAlign="left" theme={theme} />
            </a>

            <div className={clsx(styles.modalHeaderControls)}>
              {/*change theme button*/}
              <IconButton
                icon={theme === 'dark' ? <SunnyIcon /> : <MoonIcon />}
                onClick={this._handleOnThemeClick.bind(this)}
                theme={theme}
              />

              {/*close button*/}
              <IconButton
                icon={<CloseIcon />}
                onClick={this._handleOnClose.bind(this)}
                theme={theme}
              />
            </div>
          </div>

          {/*content*/}
          <div className={clsx(styles.modalContent)}>
            <Text
              size="lg"
              text="Choose how you would like to connect to Kibisis."
              theme={theme}
            />

            <Accordion
              items={[
                {
                  content: <p>Test</p>,
                  title: (
                    <HStack fullWidth={true} spacing="sm">
                      <PhoneIcon
                        className={clsx(styles.accordionIcon)}
                        color={defaultTextColor}
                      />

                      <Heading
                        size="sm"
                        text="Connect Via Mobile"
                        textAlign="left"
                        theme={theme}
                      />
                    </HStack>
                  ),
                },
                {
                  content: <p>Test</p>,
                  title: (
                    <HStack fullWidth={true} spacing="sm">
                      <GlobeIcon
                        className={clsx(styles.accordionIcon)}
                        color={defaultTextColor}
                      />

                      <Heading
                        size="sm"
                        text="Connect Via Web"
                        textAlign="left"
                        theme={theme}
                      />
                    </HStack>
                  ),
                },
              ]}
              theme={theme}
            />
          </div>
        </div>
      </div>
    );
  }
}
