// types
import type { IClientMetadata } from '@types';

/**
 * @property {boolean} debug - [optional] Whether to display debug messages. Defaults to "false".
 * @property {string} genesisHash - The hash of the first block that is used to identity the chain. Encoded in base64.
 * @property {IClientMetadata} clientMetadata - [optional] Optional client metadata. If this is not supplied, the
 * metadata will be extracted from the website.
 */
interface INewOptions {
  clientMetadata?: IClientMetadata;
  debug?: boolean;
  genesisHash: string;
}

export default INewOptions;
