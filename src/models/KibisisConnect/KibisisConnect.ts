import {
  IAccount,
  ARC0027UnknownError,
  AVMWebClient,
} from '@agoralabs-sh/avm-web-provider';
import { randomString } from '@stablelib/random';
import { render, h } from 'preact';

// containers
import App from '@containers/App';

// types
import type { IConfig, ILogger } from '@types';
import type { INewOptions } from './types';

// utils
import createLogger from '@utils/createLogger';
import detectSystemTheme from '@utils/detectSystemTheme';

export default class KibisisConnect {
  // private variables
  private _config: IConfig;
  private _avmWebClient: AVMWebClient;
  private _logger: ILogger;
  // public variables
  public static readonly displayName = 'KibisisConnect';

  constructor({ debug = false, genesisHash }: INewOptions) {
    this._avmWebClient = AVMWebClient.init({
      debug,
    });
    this._config = {
      debug,
      genesisHash,
      id: randomString(8),
    };
    this._logger = createLogger(debug ? 'debug' : 'error');
  }

  /**
   * Convenience method to get the root element, where the UI us rendered, ID.
   * @returns {string} The root element ID.
   * @private
   */
  private _rootElementID(): string {
    return `kibisis-connect__${this._config.id}`;
  }

  private _onCloseUI(): void {
    const rootElement = window.document.getElementById(this._rootElementID());

    // if there is a root element, remove it
    if (rootElement) {
      rootElement.remove();
    }
  }

  private _renderUI(): void {
    const _functionName = '_renderUI';
    const rootElementID = this._rootElementID();
    let rootElement: HTMLElement | null;

    if (!window) {
      throw new ARC0027UnknownError({
        message:
          'failed to get window object, is this being run in a browser context?',
        providerId: import.meta.env.VITE_PROVIDER_ID,
      });
    }

    rootElement = window.document.getElementById(rootElementID);

    // create and attach the ui root element
    if (!rootElement) {
      rootElement = window.document.createElement('div');

      rootElement.id = rootElementID;

      window.document.body.appendChild(rootElement);

      this._logger.debug(
        `${KibisisConnect.displayName}#${_functionName}: created a new root element`
      );
    }

    render(
      h(App, {
        onClose: this._onCloseUI.bind(this),
        theme: detectSystemTheme(),
      }),
      rootElement
    );
  }

  /**
   * public functions
   */

  public async connect(): Promise<IAccount[]> {
    this._avmWebClient.onEnable(() => {
      this._onCloseUI();
    });

    // TODO: check if connected, if so, return the accounts
    this._renderUI();

    return [];
  }

  public setDebug(debug: boolean) {
    this._avmWebClient = AVMWebClient.init({
      debug,
    });
    this._config.debug = debug;
    this._logger = createLogger(debug ? 'debug' : 'error');
  }

  public setGenesisHash(genesisHash: string) {
    this._config.genesisHash = genesisHash;
  }

  public version(): string {
    return __VERSION__;
  }
}
