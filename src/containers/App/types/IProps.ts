// types
import type { TTheme } from '@types';

interface IProps {
  onClose: () => void;
  onLaunchWeb: () => void;
  theme: TTheme;
  walletConnectURI?: string;
}

export default IProps;
