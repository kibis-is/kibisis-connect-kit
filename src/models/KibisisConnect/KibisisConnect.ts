import {
  ARC0027MethodEnum,
  ARC0027MethodTimedOutError,
  ARC0027UnknownError,
  AVMWebClient,
  BaseARC0027Error,
  DEFAULT_REQUEST_TIMEOUT,
  type IAccount,
} from '@agoralabs-sh/avm-web-provider';
import { randomString } from '@stablelib/random';
import SignClient from '@walletconnect/sign-client';
import { h, render } from 'preact';

// containers
import App from '@containers/App';

// enums
import { ConnectionTypeEnum } from '@enums';

// types
import type { IConfig, ILogger } from '@types';
import type { IInitOptions, INewOptions } from './types';

// utils
import chainReferenceFromGenesisHash from '@utils/chainReferenceFromGenesisHash';
import createClientMetadata from '@utils/createClientMetadata';
import createLogger from '@utils/createLogger';
import detectSystemTheme from '@utils/detectSystemTheme';

export default class KibisisConnect {
  // public static variables
  public static readonly displayName = 'KibisisConnect';
  // private variables
  private _config: IConfig;
  private _avmWebClient: AVMWebClient;
  private _avmWebClientListenerIDs: string[];
  private _logger: ILogger;
  private _timerIDs: number[];
  private _walletConnectClient: SignClient;

  private constructor({
    avmWebClient,
    clientMetadata,
    debug,
    genesisHash,
    walletConnectClient,
  }: INewOptions) {
    this._avmWebClient = avmWebClient;
    this._avmWebClientListenerIDs = [];
    this._config = {
      clientMetadata,
      connection: null,
      debug,
      genesisHash,
      id: randomString(8),
    };
    this._logger = createLogger(debug ? 'debug' : 'error');
    this._timerIDs = [];
    this._walletConnectClient = walletConnectClient;
  }

  /**
   * public static methods
   */

  /**
   * Initializes Kibisis Connect and setups the AVM Web Provider (for web) and WalletConnect (for mobile).
   * @param {IInitOptions} options - The initialization options.
   * @returns {Promise<KibisisConnect>} A promise that resolves to an initialized Kibisis Connect.
   * @public
   * @static
   */
  public static async init({
    clientMetadata,
    debug = false,
    genesisHash,
  }: IInitOptions): Promise<KibisisConnect> {
    const _clientMetadata = clientMetadata || createClientMetadata();
    const avmWebClient = AVMWebClient.init({
      debug,
    });
    const walletConnectClient = await SignClient.init({
      metadata: {
        description: _clientMetadata.description || '',
        name: _clientMetadata.name,
        url: _clientMetadata.host,
        icons: _clientMetadata.iconURL ? [_clientMetadata.iconURL] : [],
      },
      projectId: import.meta.env.VITE_REOWN_PROJECT_ID,
    });

    return new KibisisConnect({
      avmWebClient,
      clientMetadata: _clientMetadata,
      debug,
      genesisHash,
      walletConnectClient,
    });
  }

  /**
   * private methods
   */

  private _closeUI(): void {
    const rootElement = window.document.getElementById(this._rootElementID());

    // if there is a root element, remove it
    if (rootElement) {
      rootElement.remove();
    }
  }

  private _onLaunchWeb(
    onComplete: (accounts: IAccount[]) => void,
    onError: (error: BaseARC0027Error) => void
  ): void {
    const _functionName = '_onLaunchWeb';
    const timerID = window.setTimeout(() => {
      // remove listener
      this._avmWebClient.removeListener(listenerID);
      this._avmWebClientListenerIDs.filter((value) => value !== listenerID);

      onError(
        new ARC0027MethodTimedOutError({
          method: ARC0027MethodEnum.Enable,
          message: `no response from provider "${KibisisConnect.displayName}"`,
          providerId: import.meta.env.VITE_PROVIDER_ID,
        })
      );
    }, DEFAULT_REQUEST_TIMEOUT);
    const listenerID = this._avmWebClient.onEnable(
      ({ error, method, result }) => {
        // remove the listener, it is not needed
        this._avmWebClient.removeListener(listenerID);
        this._avmWebClientListenerIDs.filter((value) => value !== listenerID);

        // remove the timeout
        window.clearTimeout(timerID);
        this._timerIDs.filter((value) => value !== timerID);

        if (error) {
          return onError(error);
        }

        if (!result) {
          return onError(
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
        this._closeUI();

        return onComplete(result.accounts);
      }
    );

    // add the listeners
    this._timerIDs.push(timerID);
    this._avmWebClientListenerIDs.push(listenerID);

    // send an enable request
    this._avmWebClient.enable({
      genesisHash: this._config.genesisHash,
      providerId: this.providerID(),
    });
  }

  private _reset(): void {
    // clean up listeners
    this._avmWebClientListenerIDs.forEach((value) =>
      this._avmWebClient.removeListener(value)
    );
    this._timerIDs.forEach((value) => window.clearTimeout(value));
    this._avmWebClientListenerIDs = [];
    this._timerIDs = [];

    // reset connection type
    this._config.connection = null;
  }

  /**
   * Convenience method to get the root element, where the UI us rendered, ID.
   * @returns {string} The root element ID.
   * @private
   */
  private _rootElementID(): string {
    return `kibisis-connect__${this._config.id}`;
  }

  /**
   * public methods
   */

  /**
   * Gets the current configuration of
   */
  public config(): IConfig {
    return this._config;
  }

  /**
   * Launches the UI and allows the user to connect to the web extension or set up a connection using WalletConnect. If
   * the connection was successful, the allow accounts are returned and the connection object of the config will be
   * instantiated.
   * @returns {Promise<IAccount[]>} A promise that resolves the allowed accounts.
   * @throws {ARC0027UnknownError} If there is no `window` context or there was an error on the provider.
   * @throws {ARC0027MethodTimedOutError} If the user did not respond to the provider request.
   * @throws {ARC0027NetworkNotSupportedError} If the provided genesis hash is not supported.
   * @public
   */
  public async connect(): Promise<IAccount[]> {
    return new Promise(async (resolve, reject) => {
      const _functionName = 'connect';
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

      // get the walletconnect uri
      const { uri } = await this._walletConnectClient.connect({
        requiredNamespaces: {
          algorand: {
            chains: [
              `algorand:${chainReferenceFromGenesisHash(this._config.genesisHash)}`,
            ],
            events: [],
            methods: ['algo_signTxn'],
          },
          avm: {
            chains: [
              `avm:${chainReferenceFromGenesisHash(this._config.genesisHash)}`,
            ],
            events: [],
            methods: ['avm_signTransactions', 'avm_signMessage'],
          },
        },
      });

      // render the ui
      render(
        h(App, {
          onClose: () => {
            this._closeUI();
            this._reset();
          },
          onLaunchWeb: this._onLaunchWeb.bind(this, resolve, reject),
          theme: detectSystemTheme(),
          walletConnectURI: uri,
        }),
        rootElement
      );
    });
  }

  /**
   * Sends a disconnect request.
   * @public
   */
  public async disconnect(): Promise<void> {
    if (this._config.connection?.__delimiter === ConnectionTypeEnum.Web) {
      this._avmWebClient.disable({
        genesisHash: this._config.genesisHash,
        providerId: this.providerID(),
        sessionIds: [this._config.connection.sessionID],
      });
    }

    // reset connection
    this._reset();
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
    this._reset(); // reset the connection and remove listeners
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
