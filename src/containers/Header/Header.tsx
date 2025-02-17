import clsx from 'clsx';
import type { FunctionComponent } from 'preact';

// components
import Heading from '@components/Heading';
import HStack from '@components/HStack';
import IconButton from '@components/IconButton';
import Link from '@components/Link';

// constants
import { DEFAULT_PADDING, KIBISIS_URL } from '@constants';

// hooks
import usePrimaryColor from '@hooks/usePrimaryColor';

// icons
import CloseIcon from '@icons/CloseIcon';
import KibisisIcon from '@icons/KibisisIcon';
import MoonIcon from '@icons/MoonIcon';
import SunnyIcon from '@icons/SunnyIcon';

// styles
import styles from './styles.module.scss';

// types
import type { IProps } from './types';

const Header: FunctionComponent<IProps> = ({
  onCloseClick,
  onThemeClick,
  theme = 'dark',
}) => {
  // hooks
  const primaryColor = usePrimaryColor(theme);

  return (
    <HStack
      align="center"
      fullWidth={true}
      justify="between"
      padding={DEFAULT_PADDING}
      spacing="xs"
    >
      <HStack align="center" spacing="sm" fullWidth={true}>
        <Link href={KIBISIS_URL} isExternal={true}>
          <KibisisIcon className={clsx(styles.icon)} color={primaryColor} />
        </Link>

        <Heading textAlign="left" theme={theme}>
          Kibisis Connect
        </Heading>
      </HStack>

      <HStack align="center" justify="center" spacing="xs">
        {/*change theme button*/}
        <IconButton
          icon={theme === 'dark' ? <MoonIcon /> : <SunnyIcon />}
          onClick={onThemeClick}
          theme={theme}
        />

        {/*close button*/}
        <IconButton icon={<CloseIcon />} onClick={onCloseClick} theme={theme} />
      </HStack>
    </HStack>
  );
};

export default Header;
