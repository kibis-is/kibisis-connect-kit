import { IAccount } from '@agoralabs-sh/avm-web-provider';
import { type FC, useEffect, useState } from 'react';
import { type IConfig, KibisisConnect } from '@kibisis/connect-kit';

// components
import Button from '@example/components/Button';

// styles
import styles from './styles.module.scss';

const App: FC = () => {
  // states
  const [kibisisConnect, setKibisisConnect] = useState<KibisisConnect | null>(
    null
  );
  // handlers
  const handleOnConnectClick = async () => {
    let accounts: IAccount[];
    let config: IConfig;

    if (!kibisisConnect) {
      console.error('kibisis connect not initialized');

      return;
    }

    accounts = await kibisisConnect.connect();
    config = kibisisConnect.config();

    console.log(`connected using "${config.connection?.__delimiter}"`);
    console.log('received accounts:', accounts);
  };

  useEffect(() => {
    (async () =>
      setKibisisConnect(
        await KibisisConnect.init({
          debug: true,
          genesisHash: '5pbhGq04byd0AgV/sbP+yITANqazgKBuaATr85n21wY=', // voi testnet
        })
      ))();
  }, []);

  return (
    <div className={styles.wrapper}>
      <Button onClick={handleOnConnectClick}>Connect</Button>
    </div>
  );
};

export default App;
