import { AVMWebClient } from '@agoralabs-sh/avm-web-provider';
import SignClient from '@walletconnect/sign-client';

// types
import type { IClientMetadata } from '@types';

/**
 * @property {AVMWebClient} avmWebClient - An initialized AVM Web Client.
 * @property {SignClient} walletConnectClient - An initialized WalletConnect sign client.
 */
interface INewOptions {
  avmWebClient: AVMWebClient;
  clientMetadata: IClientMetadata;
  debug: boolean;
  genesisHash: string;
  walletConnectClient: SignClient;
}

export default INewOptions;
