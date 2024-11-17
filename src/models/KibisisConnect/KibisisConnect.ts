import {
  ARC0027MethodEnum,
  ARC0027MethodTimedOutError,
  ARC0027UnknownError,
  AVMWebClient,
  DEFAULT_REQUEST_TIMEOUT,
  type IAccount,
} from '@agoralabs-sh/avm-web-provider';
import { randomString } from '@stablelib/random';
import { h, render } from 'preact';

// containers
import App from '@containers/App';

// enums
import { ConnectionTypeEnum } from '@enums';

// types
import type { IConfig, ILogger } from '@types';
import type { INewOptions } from './types';

// utils
import createLogger from '@utils/createLogger';
import detectSystemTheme from '@utils/detectSystemTheme';

export default class KibisisConnect {
  // public static variables
  public static readonly displayName = 'KibisisConnect';
  // private variables
  private _config: IConfig;
  private _avmWebClient: AVMWebClient;
  private _logger: ILogger;

  constructor({ debug = false, genesisHash }: INewOptions) {
    this._avmWebClient = AVMWebClient.init({
      debug,
    });
    this._config = {
      connection: null,
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

  private _onLaunchWeb(): void {
    this._avmWebClient.enable({
      genesisHash: this._config.genesisHash,
      providerId: this.providerID(),
    });
  }

  private _renderUI(): void {
    const _functionName = '_renderUI';
    const rootElementID = this._rootElementID();
    let rootElement: HTMLElement | null;

    if (!window) {
      throw new ARC0027UnknownError({
        message:
          'failed to get window object, is this being run in a browser context?',
        providerId: this.providerID(),
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
        onLaunchWeb: this._onLaunchWeb.bind(this),
        theme: detectSystemTheme(),
      }),
      rootElement
    );
  }

  /**
   * public functions
   */

  public async connect(): Promise<IAccount[]> {
    const _functionName = 'connect';

    return new Promise((resolve, reject) => {
      const timerID = window.setTimeout(() => {
        // remove listeners
        this._avmWebClient.removeListener(webEnableListenerID);

        reject(
          new ARC0027MethodTimedOutError({
            method: ARC0027MethodEnum.Enable,
            message: `no response from provider "${KibisisConnect.displayName}"`,
            providerId: import.meta.env.VITE_PROVIDER_ID,
          })
        );
      }, DEFAULT_REQUEST_TIMEOUT);
      const webEnableListenerID = this._avmWebClient.onEnable(
        ({ error, method, result }) => {
          // remove the listener, it is not needed
          this._avmWebClient.removeListener(webEnableListenerID);

          // remove the timeout
          window.clearTimeout(timerID);

          if (error) {
            return reject(error);
          }

          if (!result) {
            return reject(
              new ARC0027UnknownError({
                message: `received response, but "${method}" request details were empty for provider "${KibisisConnect.displayName}"`,
                providerId: this.providerID(),
              })
            );
          }

          this._logger.debug(
            `${KibisisConnect.displayName}#${_functionName}: enable successful`
          );

          // save the connection
          if (result.sessionId) {
            this._config.connection = {
              __delimiter: ConnectionTypeEnum.Web,
              sessionID: result.sessionId,
            };
          }

          // close the ui
          this._onCloseUI();

          return resolve(result.accounts);
        }
      );

      // show the ui
      this._renderUI();
    });
  }

  /**
   * Gets the Kibisis provider ID used to identity the provider (wallet).
   * @returns {string} The provider ID.
   * @public
   */
  public providerID(): string {
    return import.meta.env.VITE_PROVIDER_ID;
  }

  /**
   * Sets the debug level in log.
   * @param {boolean} debug - Whether debug is enabled.
   * @public
   */
  public setDebug(debug: boolean) {
    this._avmWebClient = AVMWebClient.init({
      debug,
    });
    this._config.debug = debug;
    this._logger = createLogger(debug ? 'debug' : 'error');
  }

  /**
   * Sets a new genesis hash.
   * @param {string} genesisHash - The new genesis hash.
   * @public
   */
  public setGenesisHash(genesisHash: string) {
    this._config.connection = null; // reset the connection
    this._config.genesisHash = genesisHash;
  }

  /**
   * Gets the version of the connect kit.
   * @returns {string} The version of the connect kit.
   * @public
   */
  public version(): string {
    return __VERSION__;
  }
}
