import clsx from 'clsx';
import { FunctionComponent } from 'preact';
import { useEffect, useMemo, useRef } from 'preact/hooks';
import QRCodeStyling from 'qr-code-styling';

// components
import HStack from '@components/HStack';
import Link from '@components/Link';
import Stack from '@components/Stack';
import Text from '@components/Text';
import VStack from '@components/VStack';

// constants
import { APK_DIRECT_DOWNLOAD_URL, PLAY_STORE_URL } from '@constants';

// icons
import AndroidIcon from '@icons/AndroidIcon';
// import AppStoreIcon from '@icons/AppStoreIcon';
// import KibisisIcon from '@icons/KibisisIcon';
// import FDroidIcon from '@icons/FDroidIcon';
import PlayStoreIcon from '@icons/PlayStoreIcon';

// images
import qrCodeIconSVG from '/images/qr_code_icon.svg?raw';

// hooks
import usePrimaryColor from '@hooks/usePrimaryColor';

// styles
import styles from './styles.module.scss';

// types
import type { IProps } from './types';

// utils
import svgToDataURI from '@utils/svgToDataURI';

const MobileConnect: FunctionComponent<IProps> = ({
  theme = 'dark',
  walletConnectURI,
}) => {
  const qrCodeRef = useRef<HTMLDivElement | null>(null);
  // hooks
  const primaryLightColor = usePrimaryColor('light');
  // memo
  const qrCode = useMemo(
    () =>
      new QRCodeStyling({
        backgroundOptions: {
          color: '#ffffff',
        },
        cornersDotOptions: {
          type: 'dot',
        },
        cornersSquareOptions: {
          type: 'dot',
        },
        data: walletConnectURI,
        dotsOptions: {
          color: primaryLightColor,
          type: 'dots',
        },
        height: 300,
        image: svgToDataURI(qrCodeIconSVG),
        imageOptions: {
          crossOrigin: 'anonymous',
          margin: 10,
        },
        type: 'svg',
        width: 300,
      }),
    []
  );
  // misc
  const platformIconSize = '2rem';

  useEffect(() => {
    if (qrCodeRef.current) {
      qrCode.append(qrCodeRef.current);
    }
  }, [qrCode, qrCodeRef]);

  return (
    <Stack align="center" fullWidth={true} justify="center">
      <VStack
        align="center"
        fullWidth={true}
        maxWidth={400}
        minHeight={364}
        justify="between"
        spacing="md"
      >
        <VStack align="center" fullWidth={true} spacing="sm">
          {/*caption*/}
          <Text textAlign="center" theme={theme}>
            Open your Kibisis app on your device and scan the below code.
          </Text>

          {/*qr code*/}
          <div className={clsx(styles.qrCode)} ref={qrCodeRef}></div>
        </VStack>

        <VStack align="center" fullWidth={true} spacing="sm">
          <Text size="sm" textAlign="center" theme={theme}>
            Don't have Kibisis installed?
          </Text>

          {/*store icons*/}
          <HStack align="center" fullWidth={true} justify="center" spacing="sm">
            <Link href={PLAY_STORE_URL} isExternal={true}>
              <PlayStoreIcon
                aria-label="Play Store icon."
                height={platformIconSize}
                width={platformIconSize}
              />
            </Link>

            {/*<Link href={APP_STORE_URL} isExternal={true}>*/}
            {/*  <AppStoreIcon*/}
            {/*    aria-label="App Store icon."*/}
            {/*    height={platformIconSize}*/}
            {/*    width={platformIconSize}*/}
            {/*  />*/}
            {/*</Link>*/}

            {/*<Link href={F_DROID_URL} isExternal={true}>*/}
            {/*  <FDroidIcon*/}
            {/*    aria-label="F-Droid icon."*/}
            {/*    height={platformIconSize}*/}
            {/*    width={platformIconSize}*/}
            {/*  />*/}
            {/*</Link>*/}

            <Link href={APK_DIRECT_DOWNLOAD_URL} isExternal={true}>
              <AndroidIcon
                aria-label="Android icon."
                height={platformIconSize}
                width={platformIconSize}
              />
            </Link>
          </HStack>
        </VStack>
      </VStack>
    </Stack>
  );
};

export default MobileConnect;
