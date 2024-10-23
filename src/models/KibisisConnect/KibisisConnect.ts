import { AVMWebClient } from '@agoralabs-sh/avm-web-provider';

// types
import type { ILogger } from '@types';
import type { INewOptions } from './types';

// utils
import createLogger from '@utils/createLogger';

export default class KibisisConnect {
  // private variables
  private _debug: boolean;
  private _avmWebClient: AVMWebClient | null = null;
  private _genesisHash: string;
  private _logger: ILogger;

  constructor({ debug = false, genesisHash }: INewOptions) {
    this._avmWebClient = AVMWebClient.init({
      debug,
    });
    this._debug = debug;
    this._genesisHash = genesisHash;
    this._logger = createLogger(debug ? 'debug' : 'error');
  }

  /**
   * public functions
   */

  public setDebug(debug: boolean) {
    this._avmWebClient = AVMWebClient.init({
      debug,
    });
    this._debug = debug;
    this._logger = createLogger(debug ? 'debug' : 'error');
  }

  public setGenesisHash(genesisHash: string) {
    this._genesisHash = genesisHash;
  }
}
