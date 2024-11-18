import { type FC, useMemo } from 'react';
import { KibisisConnect } from '../../../dist';

// components
import Button from '@example/components/Button';

// styles
import styles from './styles.module.scss';

const App: FC = () => {
  // states
  const kibisisConnect = useMemo<KibisisConnect>(
    () =>
      new KibisisConnect({
        debug: true,
        genesisHash: '5pbhGq04byd0AgV/sbP+yITANqazgKBuaATr85n21wY=', // voi testnet
      }),
    []
  );
  // handlers
  const handleOnConnectClick = async () => {
    const accounts = await kibisisConnect.connect();
    const config = kibisisConnect.config();

    console.log(`connected using "${config.connection?.__delimiter}"`);
    console.log('received accounts:', accounts);
  };

  return (
    <div className={styles.wrapper}>
      <Button onClick={handleOnConnectClick}>Connect</Button>
    </div>
  );
};

export default App;
