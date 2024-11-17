// types
import type IMobileConnectionConfig from './IMobileConnectionConfig';
import type IWebConnectionConfig from './IWebConnectionConfig';

interface IConfig {
  connection: IMobileConnectionConfig | IWebConnectionConfig | null;
  debug: boolean;
  genesisHash: string;
  readonly id: string;
}

export default IConfig;
