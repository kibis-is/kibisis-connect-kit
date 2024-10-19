/**
 * @property {boolean} debug - [optional] Whether to display debug messages. Defaults to "false".
 * @property {string} genesisHash - The hash of the first block that is used to identity the chain. Encoded in base64.
 */
interface INewOptions {
  debug?: boolean;
  genesisHash: string;
}

export default INewOptions;
